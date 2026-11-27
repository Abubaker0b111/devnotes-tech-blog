type SortOption = {
  value: string;
  label: string;
};

interface SortSelectProps {
  value: string;
  options: SortOption[];
  onChange: (value: string) => void;
}

export default function SortSelect({ value, options, onChange }: SortSelectProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm sm:w-48"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
