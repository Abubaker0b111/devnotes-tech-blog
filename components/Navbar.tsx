import Link from "next/link";

type NavLink = {
  href: string;
  label: string;
};

interface NavbarProps {
  siteName: string;
  links: NavLink[];
}

export default function Navbar({ siteName, links }: NavbarProps) {
  return (
    <header className="border-b border-slate-200 bg-white">
      <nav className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="text-xl font-bold text-slate-900">
          {siteName}
        </Link>
        <ul className="flex flex-wrap gap-4 text-sm font-medium text-slate-600">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-cyan-700">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
