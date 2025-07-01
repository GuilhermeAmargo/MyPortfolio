'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Home, Folder, Mail, Menu, X } from 'lucide-react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-white via-blue-300 to-blue-500 text-transparent bg-clip-text drop-shadow-lg">
            Portfólio
          </span>
        </h1>

        {/* Menu Desktop */}
        <nav className="hidden md:flex gap-3 items-center">
          <NavWrapper>
            <NavItem
              href="/"
              icon={<Home className="w-5 h-5 text-blue-300" />}
              label="Início"
            />
          </NavWrapper>
          <NavWrapper>
            <NavItem
              href="/projects"
              icon={<Folder className="w-5 h-5 text-blue-300" />}
              label="Projetos"
            />
          </NavWrapper>
          <NavWrapper>
            <NavItem
              href="/contact"
              icon={<Mail className="w-5 h-5 text-blue-300" />}
              label="Contato"
            />
          </NavWrapper>
        </nav>

        {/* Menu Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-blue-300 hover:text-white transition"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3">
          <NavWrapper>
            <NavItem
              href="/"
              icon={<Home className="w-5 h-5 text-blue-300" />}
              label="Início"
            />
          </NavWrapper>
          <NavWrapper>
            <NavItem
              href="/projects"
              icon={<Folder className="w-5 h-5 text-blue-300" />}
              label="Projetos"
            />
          </NavWrapper>
          <NavWrapper>
            <NavItem
              href="/contact"
              icon={<Mail className="w-5 h-5 text-blue-300" />}
              label="Contato"
            />
          </NavWrapper>
        </div>
      )}
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

function NavWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 rounded-xl shadow-lg border border-blue-700/40 hover:shadow-xl transition-all duration-300">
      {children}
    </div>
  );
}