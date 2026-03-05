import { CheckCircle } from 'lucide-react';
import ScrollAnimationWrapper from '../scroll-animation-wrapper';
import { Phone } from 'lucide-react';
import Link from 'next/link';

const benefits = [
  {
    title: 'Profissionalismo e Experiência',
    description:
      'Equipe qualificada com mais de 20 anos de mercado, garantindo um serviço de alta qualidade.',
  },
  {
    title: 'Entrega no Prazo',
    description:
      'Compromisso com o cronograma combinado, evitando atrasos e transtornos em sua obra.',
  },
  {
    title: 'Limpeza Pós-Obra',
    description:
      'Prezamos pela organização e entregamos o ambiente limpo e pronto para uso após o serviço.',
  },
];

export default function WhyUs() {
  return (
    <section id="why-us">
      <div className="container mx-auto px-4">
        <ScrollAnimationWrapper>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
              Por que escolher a Art Gesso?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground font-subtitle">
              Sua tranquilidade e satisfação são nossas prioridades.
            </p>
          </div>
        </ScrollAnimationWrapper>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <ScrollAnimationWrapper key={benefit.title} delay={index * 0.1}>
              <div className="text-center">
                <div className="flex justify-center items-center mb-4">
                  <div className="bg-accent p-3 rounded-full">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold">{benefit.title}</h3>
                <p className="mt-2 text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <ScrollAnimationWrapper>
            <Link href="tel:+553134625959" className="glass-btn !px-8 !py-4 !text-base" aria-label="Ligar agora">
              <Phone className="h-5 w-5 mr-2" />
              Ligue agora
            </Link>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
}
