import Link from 'next/link';
import { Home, Folder, Mail } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center">
        <h1 className="text-4xl font-extrabold tracking-tight mr-auto">
          <span className="bg-gradient-to-r from-white via-blue-300 to-blue-500 text-transparent bg-clip-text drop-shadow-lg">
            Portfólio
          </span>
        </h1>
        <nav className="flex gap-4 text-base items-center">
          <NavItem href="/" icon={<Home className="w-5 h-5" />} label="Início" />
          <NavItem href="/projects" icon={<Folder className="w-5 h-5" />} label="Projetos" />
          <NavItem href="/contact" icon={<Mail className="w-5 h-5" />} label="Contato" />
        </nav>
      </div>
    </header>
  );
}

function NavItem({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 font-medium text-white hover:bg-blue-700 hover:text-white hover:shadow-md"
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}