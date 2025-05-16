import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white px-4 py-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
        <p className="text-center sm:text-left">
          © {new Date().getFullYear()} Guilherme Camargo Silva. Todos os direitos reservados.
        </p>
        <nav className="flex gap-4">
          <Link href="/" className="hover:underline">Início</Link>
          <Link href="/projects" className="hover:underline">Projetos</Link>
          <Link href="/contato" className="hover:underline">Contato</Link>
        </nav>
      </div>
    </footer>
  );
}