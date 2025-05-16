import Link from 'next/link';
import { Home, Folder, Mail } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-blue-900 text-white px-4 py-3 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-extrabold tracking-wide text-white drop-shadow-sm">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-400 to-blue-500">
            Portfólio
          </span>
        </h1>
        <nav className="flex gap-6 text-base items-center">
          <Link href="/" className="flex items-center gap-1 hover:underline">
            <Home className="w-5 h-5" />
            Início
          </Link>
          <Link href="/projects" className="flex items-center gap-1 hover:underline">
            <Folder className="w-5 h-5" />
            Projetos
          </Link>
          <Link href="/contact" className="flex items-center gap-1 hover:underline">
            <Mail className="w-5 h-5" />
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
}