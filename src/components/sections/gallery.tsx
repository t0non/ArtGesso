import fs from 'node:fs';
import path from 'node:path';
import GalleryClient from '../shared/gallery-client';
import { unstable_noStore as noStore } from 'next/cache';

export type GalleryImage = {
  src: string;
  alt: string;
};

function readImagesFromPublic(): GalleryImage[] {
  const publicDir = path.join(process.cwd(), 'public', 'imagens');
  const exts = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif', '.avif']);
  const entries: GalleryImage[] = [];
  const seenBase = new Set<string>();

  if (!fs.existsSync(publicDir)) return entries;

  const walk = (relDir: string, absDir: string) => {
    const items = fs.readdirSync(absDir, { withFileTypes: true });
    for (const item of items) {
      if (item.isDirectory()) {
        walk(path.posix.join(relDir, item.name), path.join(absDir, item.name));
      } else if (item.isFile()) {
        const ext = path.extname(item.name).toLowerCase();
        if (exts.has(ext)) {
          const baseKey = path.parse(item.name).name.toLowerCase();
          if (seenBase.has(baseKey)) continue;
          seenBase.add(baseKey);
          const srcPath = path.posix
            .join('/imagens', relDir, item.name)
            .replace(/\\/g, '/');
          entries.push({
            src: srcPath,
            alt: path.parse(item.name).name.replaceAll('-', ' ').replaceAll('_', ' '),
          });
        }
      }
    }
  };

  walk('', publicDir);
  entries.sort((a, b) => a.src.localeCompare(b.src));
  return entries;
}

export default async function Gallery() {
  noStore();
  const images = readImagesFromPublic();
  if (images.length === 0) return null;
  return (
    <section id="gallery" className="container mx-auto px-4 py-12 md:py-16">
      <div className="mb-8 md:mb-10">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Galeria de Projetos</h2>
        <p className="text-muted-foreground mt-2">Seleção organizada de imagens.</p>
      </div>
      <GalleryClient images={images} />
    </section>
  );
}
