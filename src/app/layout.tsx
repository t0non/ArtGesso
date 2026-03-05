import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Art Gesso - Especialistas em Gesso e Drywall em Belo Horizonte',
  description:
    'Serviços de gesseiro e drywall com qualidade e acabamento perfeito. Rebaixamento de teto, sancas, gesso 3D, consertos e mais. Atendemos em Belo Horizonte.',
  openGraph: {
    title: 'Art Gesso - Especialistas em Gesso e Drywall',
    description:
      'Qualidade e acabamento perfeito em gesso e drywall. Solicite um orçamento via WhatsApp!',
    type: 'website',
    locale: 'pt_BR',
    url: 'https://www.artgessobh.com.br',
    siteName: 'Art Gesso',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Art Gesso',
    description:
      'Especialistas em Gesso e Drywall – Qualidade e Acabamento Perfeito',
    telephone: '+5531996140835',
    department: [
      {
        '@type': 'LocalBusiness',
        name: 'Art Gesso - Unidade 1 (Esquina)',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Rua Humaitá, 552',
          addressLocality: 'Belo Horizonte',
          addressRegion: 'MG',
          postalCode: '30720-410',
          addressCountry: 'BR',
        },
        telephone: '+553134625169',
      },
      {
        '@type': 'LocalBusiness',
        name: 'Art Gesso - Unidade 2',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Rua Progresso, 274',
          addressLocality: 'Belo Horizonte',
          addressRegion: 'MG',
          postalCode: '30720-320',
          addressCountry: 'BR',
        },
        telephone: '+553134625959',
      },
    ],
    url: 'https://www.artgessobh.com.br',
  };

  return (
    <html lang="pt-BR" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Montserrat:wght@700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={cn('font-body antialiased')}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
