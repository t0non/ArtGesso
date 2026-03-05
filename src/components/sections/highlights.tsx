import { Phone } from 'lucide-react';

export default function Highlights() {
  return (
    <section id="about-us" className="bg-background">
      <div className="container mx-auto flex justify-center px-4">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex flex-col items-center space-y-6 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              Art Gesso
            </h2>
            <h3 className="font-headline text-xl font-bold uppercase tracking-tight text-primary">
              Sua referência em rebaixamento de gesso e drywall em Belo
              Horizonte
            </h3>
            <div className="space-y-4 text-lg text-muted-foreground font-subtitle">
              <p>
                A Art Gesso atua há mais de 11 anos no mercado, oferecendo
                serviços de rebaixamento em gesso, drywall e venda de materiais
                de alta qualidade. Localizada no bairro Padre Eustáquio, em
                Belo Horizonte, somos especialistas em transformar ambientes
                com soluções modernas e duráveis. Atendemos tanto
                residenciais quanto comerciais, garantindo um serviço de
                excelência, agilidade e materiais de primeira linha.
              </p>
              <p>
                Se você busca gesso de qualidade em Belo Horizonte ou precisa de
                serviços de drywall e rebaixamento de teto em gesso, entre em
                contato conosco e solicite um orçamento!
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <a href="tel:+553134625959" className="glass-btn" aria-label="Ligar agora">
              <Phone className="h-5 w-5" />
              LIGAR AGORA
            </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
