interface TagBadgeProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export default function TagBadge({ label, active = false, onClick }: TagBadgeProps) {
  let colors = "bg-cyan-50 text-cyan-800 border-cyan-200";
  if (active) {
    colors = "bg-cyan-700 text-white border-cyan-700";
  }

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`rounded-full border px-3 py-1 text-xs font-medium ${colors}`}
      >
        {label}
      </button>
    );
  }

  return (
    <span className={`rounded-full border px-3 py-1 text-xs font-medium ${colors}`}>
      {label}
    </span>
  );
}
