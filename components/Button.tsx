import Link from "next/link";

interface ButtonProps {
  label: string;
  href?: string;
  type?: "button" | "submit";
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

export default function Button({ label, href, type = "button", variant = "primary", onClick }: ButtonProps) {
  let style = "bg-cyan-700 text-white hover:bg-cyan-800";
  if (variant === "secondary") {
    style = "border border-slate-300 bg-white text-slate-800 hover:bg-slate-100";
  }
  const classes = `inline-block rounded-lg px-5 py-2.5 text-sm font-semibold ${style}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {label}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {label}
    </button>
  );
}
