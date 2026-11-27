import Image from "next/image";
import Link from "next/link";
import { Post } from "@/data/posts";
import TagBadge from "./TagBadge";

interface PostCardProps {
  post: Post;
  showExcerpt?: boolean;
}

export default function PostCard({ post, showExcerpt = true }: PostCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md">
      <Link href={`/posts/${post.id}`}>
        <Image
          src={post.image}
          alt={post.title}
          width={1200}
          height={675}
          className="h-auto w-full"
        />
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <TagBadge key={tag} label={tag} />
          ))}
        </div>
        <Link href={`/posts/${post.id}`}>
          <h2 className="text-lg font-semibold text-slate-900 hover:text-cyan-700">{post.title}</h2>
        </Link>
        {showExcerpt && <p className="text-sm text-slate-600">{post.excerpt}</p>}
        <p className="mt-auto text-xs text-slate-500">
          {post.author} · {post.date} · {post.readTime} min read
        </p>
      </div>
    </article>
  );
}
