import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-6 shadow-inner">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
        <p className="text-center sm:text-left text-gray-300">
          © {new Date().getFullYear()} <span className="font-semibold text-white">Guilherme Camargo Silva</span>. Todos os direitos reservados.
        </p>
        <nav className="flex gap-6 text-gray-300 text-sm font-medium">
          <FooterLink href="/" label="Início" />
          <FooterLink href="/projects" label="Projetos" />
          <FooterLink href="/contact" label="Contato" />
        </nav>
      </div>
    </footer>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="transition-all duration-200 hover:text-white hover:underline underline-offset-4"
    >
      {label}
    </Link>
  );
}
