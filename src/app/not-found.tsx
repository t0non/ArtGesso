export default function NotFound() {
  return (
    <main className="min-h-dvh flex items-center justify-center">
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-headline font-bold">Página não encontrada</h2>
        <p className="mt-2 text-muted-foreground">A página que você procura não existe.</p>
        <a href="/" className="glass-btn mt-6 inline-flex">Voltar para a página inicial</a>
      </div>
    </main>
  );
}
