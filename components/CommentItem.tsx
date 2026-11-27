import { Comment } from "@/data/comments";

interface CommentItemProps {
  comment: Comment;
  onDelete: (id: number) => void;
}

export default function CommentItem({ comment, onDelete }: CommentItemProps) {
  return (
    <li className="rounded-lg border border-slate-200 bg-white p-4">
      <div className="flex items-center justify-between">
        <p className="font-semibold text-slate-900">{comment.name}</p>
        <p className="text-xs text-slate-500">{comment.date}</p>
      </div>
      <p className="mt-2 text-sm text-slate-700">{comment.text}</p>
      <button
        type="button"
        onClick={() => onDelete(comment.id)}
        className="mt-2 text-xs text-red-600 hover:underline"
      >
        Delete
      </button>
    </li>
  );
}
