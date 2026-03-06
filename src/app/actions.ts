'use server';

import {
  chatbotAssistant,
  type ChatbotAssistantInput,
  type ChatbotAssistantOutput,
} from '@/ai/flows/chatbot-assistant-flow';

const pageContentSummary = `
Art Gesso: Especialistas em Gesso e Drywall em Belo Horizonte.
Serviços: Rebaixamento de Teto, Sancas, Drywall, Gesso 3D, Molduras, Gesso Liso, Cortineiros, Fechamento de Shafts, Forro Modular, Isolamento Acústico, Consertos Pós-Vazamento, Reparos em Geral.
Unidade 1 (Esquina): Rua Humaitá, 552, Padre Eustáquio, Belo Horizonte - MG, CEP 30720-410. Fixo: (31) 3462-5169. Google Maps: https://www.google.com/maps/search/?api=1&query=Rua%20Humait%C3%A1%2C%20552%20Belo%20Horizonte
Unidade 2: Rua Progresso, 274, Padre Eustáquio, Belo Horizonte - MG, CEP 30720-320. Fixo: (31) 3462-5959. Google Maps: https://www.google.com/maps/search/?api=1&query=Rua%20Progresso%2C%20274%20Belo%20Horizonte
Contato Geral WhatsApp: (31) 99614-0835. Link: https://wa.me/5531996140835?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20da%20Art%20Gesso.
`;

export async function getAiResponse(
  question: string
): Promise<ChatbotAssistantOutput> {
  if (!question) {
    return {
      answer: 'Por favor, digite sua pergunta.',
      suggestedContacts: [],
    };
  }

  try {
    const input: ChatbotAssistantInput = {
      question,
      pageContentSummary,
    };
    const response = await chatbotAssistant(input);
    return response;
  } catch (error) {
    console.error('Error calling AI assistant:', error);
    return {
      answer:
        'Desculpe, não consegui processar sua pergunta no momento. Por favor, tente novamente mais tarde ou entre em contato pelo nosso WhatsApp.',
      suggestedContacts: [
        {
          type: 'whatsapp',
          value:
            'https://wa.me/5531996140835?text=Ol%C3%A1%2C%20tive%20um%20problema%20com%20o%20chat.',
          label: 'Fale Conosco via WhatsApp',
          unit: 'Geral',
        },
      ],
    };
  }
}
