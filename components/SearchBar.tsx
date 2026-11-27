interface SearchBarProps {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, placeholder, onChange }: SearchBarProps) {
  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:border-cyan-600 focus:outline-none"
    />
  );
}
