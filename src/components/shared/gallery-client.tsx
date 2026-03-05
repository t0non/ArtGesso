'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

type Props = {
  images: { src: string; alt: string }[];
};

export default function GalleryClient({ images }: Props) {
  const gridCols = 'grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2';
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggle = useCallback(
    (i: number) => {
      setExpanded((cur) => (cur === i ? null : i));
    },
    [],
  );

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Escape') setExpanded(null);
    },
    [],
  );

  return (
    <div onKeyDown={onKeyDown}>
      {expanded !== null && images[expanded] && (
        <div className="mb-6">
          <button
            aria-label={`Recolher ${images[expanded].alt}`}
            onClick={() => setExpanded(null)}
            className="block w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <div className="relative mx-auto w-full max-w-4xl aspect-square overflow-hidden rounded-md border border-neutral-800 bg-neutral-900">
              <Image
                src={images[expanded].src}
                alt={images[expanded].alt}
                fill
                sizes="90vw"
                className="object-cover"
                priority
              />
            </div>
          </button>
        </div>
      )}
      <div className={gridCols}>
        {images.map((img, i) => {
          if (expanded === i) return null;
          return (
            <div
              key={img.src}
              className={cn(
                'group relative overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950',
                'focus:outline-none',
              )}
            >
              <button
                aria-label={`Ampliar ${img.alt}`}
                onClick={() => toggle(i)}
                className="block w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background cursor-zoom-in"
              >
                <div className="relative aspect-square w-full">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
