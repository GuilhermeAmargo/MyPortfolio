import Link from 'next/link';
import { Home, Folder, Mail } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight text-white">
          <span className="bg-gradient-to-r from-white via-blue-400 to-blue-500 text-transparent bg-clip-text drop-shadow-sm">
            Portfólio
          </span>
        </h1>
        <nav className="flex gap-6 text-base items-center">
          <NavItem href="/" icon={<Home className="w-5 h-5" />} label="Início" />
          <NavItem href="/projects" icon={<Folder className="w-5 h-5" />} label="Projetos" />
          <NavItem href="/contact" icon={<Mail className="w-5 h-5" />} label="Contato" />
        </nav>
      </div>
    </header>
  );
}

function NavItem({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 px-3 py-2 rounded-md transition-colors duration-200 hover:bg-white/10 hover:text-blue-100"
    >
      {icon}
      <span className="font-medium">{label}</span>
    </Link>
  );
}