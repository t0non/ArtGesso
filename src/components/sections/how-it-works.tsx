import { Phone } from 'lucide-react';
import ScrollAnimationWrapper from '../scroll-animation-wrapper';
import Link from 'next/link';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-background">
      <div className="container mx-auto px-4">
        <ScrollAnimationWrapper>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
              Como Funciona
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground font-subtitle">Entre em contato agora.</p>
          </div>
        </ScrollAnimationWrapper>

        <div className="mt-10">
          <ScrollAnimationWrapper>
            <div className="flex flex-col items-center gap-4 rounded-xl border bg-card p-6 text-center">
              <h3 className="text-xl font-semibold">Ligue para nós e resolvemos o que você precisa com rapidez e excelência.</h3>
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <Link
                  href="tel:+553134625959"
                  aria-label="Ligue para nós"
                  className="glass-btn !px-8 !py-4 !text-base"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Ligue para nós
                </Link>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
}
