interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">{title}</h1>
      <p className="mt-2 text-slate-600">{subtitle}</p>
    </div>
  );
}
