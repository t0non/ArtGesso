'use server';
/**
 * @fileOverview An AI-powered chat assistant for Art Gesso's landing page.
 *
 * - chatbotAssistant - A function that handles user queries and suggests relevant contact information.
 * - ChatbotAssistantInput - The input type for the chatbotAssistant function.
 * - ChatbotAssistantOutput - The return type for the chatbotAssistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestedContactSchema = z.object({
  type: z.enum(['whatsapp', 'phone', 'google_maps']).describe("Type of contact suggestion (e.g., 'whatsapp', 'phone', 'google_maps')."),
  value: z.string().describe("The contact value, e.g., phone number, WhatsApp link, or Google Maps URL."),
  label: z.string().describe("User-friendly label for the contact, e.g., 'WhatsApp Unidade 1' or 'Ligar para Unidade 2'."),
  unit: z.string().optional().describe("Optional: The specific unit associated with this contact suggestion (e.g., 'Unidade 1 (Esquina)')."),
  prefilledMessage: z.string().optional().describe("Optional: A pre-filled message for WhatsApp contact."),
});
export type SuggestedContact = z.infer<typeof SuggestedContactSchema>;

const ChatbotAssistantInputSchema = z.object({
  question: z.string().describe("The user's question about Art Gesso's services or contact information."),
  pageContentSummary: z.string().describe("A summary of the Art Gesso landing page content, including services, contact details, and unit locations."),
});
export type ChatbotAssistantInput = z.infer<typeof ChatbotAssistantInputSchema>;

const ChatbotAssistantOutputSchema = z.object({
  answer: z.string().describe("The AI's answer to the user's question, based on the provided page content."),
  suggestedContacts: z.array(SuggestedContactSchema).describe("An array of suggested contact options relevant to the user's query. If no specific contact is relevant, this array should be empty."),
});
export type ChatbotAssistantOutput = z.infer<typeof ChatbotAssistantOutputSchema>;

export async function chatbotAssistant(input: ChatbotAssistantInput): Promise<ChatbotAssistantOutput> {
  return chatbotAssistantFlow(input);
}

const chatbotAssistantPrompt = ai.definePrompt({
  name: 'chatbotAssistantPrompt',
  input: {schema: ChatbotAssistantInputSchema},
  output: {schema: ChatbotAssistantOutputSchema},
  prompt: `Você é um assistente de chat profissional e prestativo da Art Gesso, uma empresa especializada em gesso e drywall.
Sua função é analisar a pergunta do usuário e o conteúdo da página inicial fornecido para responder às perguntas sobre os serviços e contatos da Art Gesso.
Seu objetivo é guiar o usuário para a informação mais relevante e, se apropriado, sugerir a melhor forma de contato.

Use o seguinte conteúdo da página inicial para basear suas respostas:
---
{{pageContentSummary}}
---

Instruções para a resposta:
1.  Responda à pergunta do usuário de forma clara e concisa.
2.  Se a pergunta do usuário for sobre serviços em geral ou solicitar um orçamento, priorize a sugestão de contato via WhatsApp.
3.  Se a pergunta do usuário for específica sobre um endereço de unidade ou um número de telefone fixo, inclua essas informações e sugira o link do Google Maps para a unidade relevante, além do WhatsApp.
4.  Se a pergunta for geral e não envolver contato específico, apenas forneça a resposta e, opcionalmente, o WhatsApp geral.
5.  Popule o campo 'suggestedContacts' com um array de objetos JSON que representam as opções de contato mais relevantes, seguindo estritamente o Schema JSON. Se não houver sugestões de contato relevantes, retorne um array vazio [].
6.  Não sugira WhatsApp. Priorize telefone (tel:) e Google Maps.

Exemplos de sugestões de contato:
- Para qualquer serviço ou orçamento:
  {
    "type": "phone",
    "value": "(31) 3462-5959",
    "label": "Ligar para Art Gesso"
  }
- Para informações da Unidade 1:
  [
    {
      "type": "phone",
      "value": "(31) 3462-5169",
      "label": "Ligar para Unidade 1 (Fixo)",
      "unit": "Unidade 1 (Esquina)"
    },
    
    {
      "type": "google_maps",
      "value": "https://www.google.com/maps/search/?api=1&query=Rua%20Humait%C3%A1%2C%20552%20Belo%20Horizonte",
      "label": "Ver Unidade 1 no Mapa",
      "unit": "Unidade 1 (Esquina)"
    }
  ]
- Para informações da Unidade 2:
  [
    {
      "type": "phone",
      "value": "(31) 3462-5959",
      "label": "Ligar para Unidade 2 (Fixo)",
      "unit": "Unidade 2"
    },
    
    {
      "type": "google_maps",
      "value": "https://www.google.com/maps/search/?api=1&query=Rua%20Progresso%2C%20274%20Belo%20Horizonte",
      "label": "Ver Unidade 2 no Mapa",
      "unit": "Unidade 2"
    }
  ]
`
});

const chatbotAssistantFlow = ai.defineFlow(
  {
    name: 'chatbotAssistantFlow',
    inputSchema: ChatbotAssistantInputSchema,
    outputSchema: ChatbotAssistantOutputSchema,
  },
  async (input) => {
    const {output} = await chatbotAssistantPrompt(input);
    return output!;
  }
);
