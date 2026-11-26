import Link from "next/link";

interface FooterProps {
  siteName: string;
  year: number;
}

export default function Footer({ siteName, year }: FooterProps) {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-sm sm:flex-row sm:justify-between">
        <p>
          © {year} {siteName}. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link href="/posts" className="hover:text-white">
            Posts
          </Link>
          <Link href="/about" className="hover:text-white">
            About
          </Link>
          <Link href="/contact" className="hover:text-white">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
