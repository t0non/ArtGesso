'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone } from 'lucide-react';

export default function Header() {
  const navLinks = [
    { href: '#services', label: 'Serviços' },
    { href: '#why-us', label: 'Por que nos escolher' },
    { href: '#locations', label: 'Unidades' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-800 bg-black text-white font-body">
      <div className="container mx-auto flex h-24 md:h-28 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Logo Art Gesso"
              width={200}
              height={66}
              className="object-contain h-14 w-auto md:h-16"
              priority
            />
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium font-nav">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-opacity hover:opacity-80"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:+553134625959"
            className="glass-btn hidden !py-3 !px-6 !text-sm md:inline-flex"
            aria-label="Ligar agora"
          >
            <Phone className="h-4 w-4" />
            Ligar agora
          </a>
        </div>
      </div>
    </header>
  );
}
