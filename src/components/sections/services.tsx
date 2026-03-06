import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import {
  ArrowDownToLine,
  Layers,
  Box,
  Paintbrush,
  PanelTop,
  Construction,
  Grid,
  VolumeX,
  Wrench,
  Hammer,
  RectangleHorizontal,
  Phone,
  type LucideProps,
} from 'lucide-react';
import type { FC } from 'react';
import ScrollAnimationWrapper from '../scroll-animation-wrapper';

const icons: { [key: string]: FC<LucideProps> } = {
  ArrowDownToLine,
  RectangleHorizontal,
  Layers,
  Box,
  Paintbrush,
  PanelTop,
  Construction,
  Grid,
  VolumeX,
  Wrench,
  Hammer,
};

const servicesList = [
  {
    name: 'Rebaixamento de Teto',
    icon: 'ArrowDownToLine',
    description: 'Modernize seu ambiente com forros de gesso lisos e elegantes.',
  },
  {
    name: 'Sancas de Gesso',
    icon: 'RectangleHorizontal',
    description:
      'Adicione um toque de sofisticação com sancas abertas ou fechadas.',
  },
  {
    name: 'Paredes de Drywall',
    icon: 'Layers',
    description:
      'Crie novos ambientes de forma rápida, limpa e com ótimo acabamento.',
  },
  {
    name: 'Gesso 3D',
    icon: 'Box',
    description:
      'Painéis decorativos que trazem relevo e personalidade para suas paredes.',
  },
  {
    name: 'Molduras e Rodapés',
    icon: 'RectangleHorizontal',
    description: 'Acabamentos clássicos que emolduram e valorizam seu espaço.',
  },
  {
    name: 'Gesso Liso',
    icon: 'Paintbrush',
    description: 'Deixe suas paredes perfeitamente lisas, prontas para a pintura.',
  },
  {
    name: 'Cortineiros de Gesso',
    icon: 'PanelTop',
    description: 'Solução embutida e elegante para esconder trilhos de cortinas.',
  },
  {
    name: 'Fechamento de Shafts',
    icon: 'Construction',
    description: 'Acabamento seguro e prático para áreas de instalações.',
  },
  {
    name: 'Forro Modular',
    icon: 'Grid',
    description:
      'Solução versátil e removível, ideal para ambientes comerciais.',
  },
  {
    name: 'Isolamento Acústico',
    icon: 'VolumeX',
    description:
      'Projetos com drywall para mais conforto e privacidade sonora.',
  },
  {
    name: 'Consertos Pós-Vazamento',
    icon: 'Wrench',
    description: 'Recuperamos tetos e paredes danificados por infiltrações.',
  },
  {
    name: 'Reparos em Geral',
    icon: 'Hammer',
    description: 'Conserto de furos, rasgos e outros danos em gesso e drywall.',
  },
];

export default function Services() {
  return (
    <section id="services">
      <div className="container mx-auto px-4">
        <ScrollAnimationWrapper>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
              Nossos Serviços
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground font-subtitle">
              Oferecemos uma gama completa de soluções em gesso e drywall para
              transformar seu ambiente.
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {servicesList.map((service, index) => {
            const IconComponent = icons[service.icon];
            return (
              <ScrollAnimationWrapper key={service.name} delay={index * 0.05}>
                <Card className="text-center hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                  <CardHeader>
                    <div className="flex justify-center items-center mb-4">
                      {IconComponent && (
                        <IconComponent className="w-10 h-10 text-primary" />
                      )}
                    </div>
                    <CardTitle className="text-lg">{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <a
                      href="tel:+553134625959"
                      className="glass-btn w-full !text-sm !py-3"
                      aria-label="Ligar agora"
                    >
                      <Phone className="h-4 w-4" /> Ligar
                    </a>
                  </CardFooter>
                </Card>
              </ScrollAnimationWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
