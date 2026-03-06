import Link from 'next/link';
import { Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-muted py-8 text-muted-foreground">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {currentYear} Art Gesso. Todos os direitos reservados.
        </p>
        <div className="mt-4 flex flex-wrap justify-center items-center gap-4 text-sm">
          <Link href="#services" className="hover:text-primary transition-colors">
            Serviços
          </Link>
          <span className="opacity-50 hidden sm:inline">|</span>
          <Link href="#locations" className="hover:text-primary transition-colors">
            Unidades
          </Link>
          <span className="opacity-50 hidden sm:inline">|</span>
          <a
            href="tel:+553134625959"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span>Ligar agora</span>
          </a>
          
        </div>
      </div>
    </footer>
  );
}
