import { Phone } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-6rem)] items-center justify-center border-b"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/hero-background.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight font-headline text-white lg:text-5xl xl:text-6xl">
          Especialistas em Gesso e Drywall
        </h1>
        <h2 className="mx-auto mt-4 max-w-2xl text-lg text-gray-200 sm:text-xl font-subtitle">
          Qualidade e acabamento perfeito para sua reforma ou construção. Há
          mais de 20 anos transformando ambientes com profissionalismo e
          agilidade.
        </h2>
        <div className="mt-8 flex flex-col items-center gap-4 justify-center sm:flex-row">
          <a
            href="tel:+553134625959"
            className="glass-btn"
            aria-label="Ligar agora"
          >
            <Phone className="h-5 w-5" />
            Ligue agora
          </a>
        </div>
      </div>
    </section>
  );
}
