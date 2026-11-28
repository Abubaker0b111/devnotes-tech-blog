"use client";

import { useState } from "react";
import { Comment } from "@/data/comments";
import Button from "./Button";
import CommentItem from "./CommentItem";

interface CommentSectionProps {
  postId: string;
  initialComments: Comment[];
}

type CommentErrors = {
  name?: string;
  text?: string;
};

export default function CommentSection({ postId, initialComments }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [errors, setErrors] = useState<CommentErrors>({});
  const [success, setSuccess] = useState("");

  function validate(): CommentErrors {
    const newErrors: CommentErrors = {};
    if (name.trim() === "") {
      newErrors.name = "Name is required.";
    } else if (name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }
    if (text.trim() === "") {
      newErrors.text = "Comment cannot be empty.";
    } else if (text.trim().length < 5) {
      newErrors.text = "Comment must be at least 5 characters.";
    }
    return newErrors;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    setSuccess("");

    if (newErrors.name || newErrors.text) {
      return;
    }

    const newComment: Comment = {
      id: Date.now(),
      postId: postId,
      name: name.trim(),
      text: text.trim(),
      date: new Date().toISOString().slice(0, 10),
    };

    setComments([...comments, newComment]);
    setName("");
    setText("");
    setSuccess("Thanks! Your comment has been added.");
  }

  function handleDelete(id: number) {
    setComments(comments.filter((comment) => comment.id !== id));
  }

  return (
    <section className="mt-12 border-t border-slate-200 pt-8">
      <h2 className="text-2xl font-bold text-slate-900">Comments ({comments.length})</h2>

      {comments.length === 0 ? (
        <p className="mt-4 text-slate-500">No comments yet. Be the first to comment!</p>
      ) : (
        <ul className="mt-4 flex flex-col gap-3">
          {comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} onDelete={handleDelete} />
          ))}
        </ul>
      )}

      <form onSubmit={handleSubmit} noValidate className="mt-8 flex flex-col gap-4 rounded-xl bg-slate-50 p-5">
        <h3 className="text-lg font-semibold text-slate-900">Leave a comment</h3>

        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-700">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setErrors({ ...errors, name: undefined });
            }}
            className={`w-full rounded-lg border bg-white px-3 py-2 text-sm ${errors.name ? "border-red-500" : "border-slate-300"}`}
          />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="text" className="mb-1 block text-sm font-medium text-slate-700">
            Comment
          </label>
          <textarea
            id="text"
            rows={4}
            value={text}
            maxLength={300}
            onChange={(e) => {
              setText(e.target.value);
              setErrors({ ...errors, text: undefined });
            }}
            className={`w-full rounded-lg border bg-white px-3 py-2 text-sm ${errors.text ? "border-red-500" : "border-slate-300"}`}
          />
          <p className="mt-1 text-right text-xs text-slate-500">{text.length}/300</p>
          {errors.text && <p className="mt-1 text-sm text-red-600">{errors.text}</p>}
        </div>

        {success && <p className="text-sm font-medium text-green-700">{success}</p>}

        <div>
          <Button label="Post Comment" type="submit" />
        </div>
      </form>
    </section>
  );
}
