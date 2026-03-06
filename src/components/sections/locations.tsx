import Image from 'next/image';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, MapPin } from 'lucide-react';
import ScrollAnimationWrapper from '../scroll-animation-wrapper';

const locations = [
  {
    name: 'Art Gesso Belo Horizonte',
    address: 'Rua Progresso, 274 - Padre Eustáquio',
    cep: 'CEP: 30720-320, Belo Horizonte - MG',
    phone: '(31) 3462-5959',
    whatsapp: '(31) 99614-0835',
    whatsappLink:
      'https://wa.me/5531996140835?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20a%20Art%20Gesso.',
    mapsLink:
      'https://www.google.com/maps/search/?api=1&query=Rua%20Progresso%2C%20274%20Belo%20Horizonte',
    image: '/images/Unidade1.png',
  },
  {
    name: 'Art Gesso',
    address: 'Rua Humaitá, 552 - Padre Eustáquio',
    cep: 'CEP: 30720-410, Belo Horizonte - MG',
    phone: '(31) 3462-5169',
    whatsapp: '(31) 99614-0835',
    whatsappLink:
      'https://wa.me/5531996140835?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20a%20Art%20Gesso.',
    mapsLink:
      'https://www.google.com/maps/search/?api=1&query=Rua%20Humait%C3%A1%2C%20552%20Belo%20Horizonte',
    image: '/images/fachada.jpeg',
  },
];

export default function Locations() {
  return (
    <section id="locations" className="bg-secondary/50">
      <div className="container mx-auto px-4">
        <ScrollAnimationWrapper>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
              Nossas Unidades e Contato
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground font-subtitle">
              Temos dois pontos de atendimento no bairro Padre Eustáquio para melhor servir a região de
              Belo Horizonte. Visite-nos ou entre em contato.
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <ScrollAnimationWrapper key={location.name} delay={index * 0.1}>
              <Card key={location.name} className="flex flex-col h-full overflow-hidden">
                <div className="relative w-full h-56">
                  <Image
                    src={location.image}
                    alt={`Foto da ${location.name}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{location.name}</CardTitle>
                  <CardDescription>
                    {location.address}
                    <br />
                    {location.cep}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-2">
                  <p className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="h-4 w-4 text-primary" />{' '}
                    Fixo: {location.phone}
                  </p>
                  {/* Celular/WhatsApp removido a pedido do cliente */}
                </CardContent>
                <CardFooter className="flex flex-col sm:flex-row gap-2">
                  <a
                    href={`tel:${location.phone.replace(/\D/g, '')}`}
                    className="glass-btn w-full !text-sm !py-3"
                    aria-label={`Ligar para ${location.name}`}
                  >
                    <Phone className="h-4 w-4" /> Ligar
                  </a>
                  
                  <Button asChild variant="outline" className="w-full">
                    <a
                      href={location.mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MapPin className="mr-2 h-4 w-4" /> Ver no Mapa
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
