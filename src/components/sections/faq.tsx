import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import ScrollAnimationWrapper from '../scroll-animation-wrapper';

const faqs = [
  {
    q: 'Faz muita poeira? Como vocês protegem o ambiente?',
    a: 'Minimizamos poeira com isolamento de área, aspiração constante e limpeza ao final. Cobertura de móveis e proteção de piso estão incluídas.',
  },
  {
    q: 'Qual o prazo típico para rebaixamento de teto em apartamento de 70m²?',
    a: 'Geralmente 1–2 dias, dependendo do nível de detalhes (iluminação, sancas, recortes).',
  },
  {
    q: 'Posso pintar logo após o serviço?',
    a: 'Sim. Orientamos aguardar a secagem correta do gesso. Entregamos a superfície pronta para pintura conforme o acabamento contratado.',
  },
  {
    q: 'Existe garantia do serviço?',
    a: 'Sim. Garantia formal com nota fiscal. Defeitos de instalação são corrigidos sem custo dentro do período de garantia.',
  },
  {
    q: 'Drywall isola som?',
    a: 'Oferece bom desempenho acústico. Com lã mineral e chapas adequadas, alcançamos melhorias significativas de isolamento.',
  },
  {
    q: 'Vocês aceitam Pix e cartão?',
    a: 'Aceitamos Pix e cartões. Condições específicas são apresentadas na proposta.',
  },
  {
    q: 'Como funciona a visita técnica?',
    a: 'Agendamos no melhor horário para você, avaliamos o local e tiramos medidas para uma proposta exata.',
  },
  {
    q: 'Há atendimento aos finais de semana?',
    a: 'Mediante disponibilidade e agendamento prévio.',
  },
  {
    q: 'Qual o tempo de resposta no WhatsApp?',
    a: 'Respondemos em até 5 minutos dentro do horário comercial.',
  },
  {
    q: 'Vocês removem gesso antigo e fazem reparos após vazamentos?',
    a: 'Sim, fazemos remoção, correções de estrutura e acabamento para restabelecer o padrão do ambiente.',
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-secondary/50">
      <div className="container mx-auto px-4">
        <ScrollAnimationWrapper>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Perguntas Frequentes</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Reunimos as dúvidas mais comuns sobre prazos, limpeza, garantia e pintura.
            </p>
          </div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
            {faqs.map((item, idx) => (
              <AccordionItem value={`item-${idx}`} key={idx}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
