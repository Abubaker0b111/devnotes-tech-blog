import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Button from "@/components/Button";
import CommentSection from "@/components/CommentSection";
import TagBadge from "@/components/TagBadge";
import { getCommentsByPostId } from "@/data/comments";
import { getPostById, posts } from "@/data/posts";

export function generateStaticParams() {
  return posts.map((post) => ({ id: post.id }));
}

export async function generateMetadata({ params }: PageProps<"/posts/[id]">): Promise<Metadata> {
  const { id } = await params;
  const post = getPostById(id);

  if (!post) {
    return { title: "Post Not Found | DevNotes" };
  }

  return {
    title: `${post.title} | DevNotes`,
    description: post.excerpt,
  };
}

export default async function PostDetailPage({ params }: PageProps<"/posts/[id]">) {
  const { id } = await params;
  const post = getPostById(id);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl">
      <div className="mb-4 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <TagBadge key={tag} label={tag} />
        ))}
      </div>
      <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">{post.title}</h1>
      <p className="mt-3 text-sm text-slate-500">
        By {post.author} · {post.date} · {post.readTime} min read
      </p>

      <Image
        src={post.image}
        alt={post.title}
        width={1200}
        height={675}
        priority
        className="mt-6 h-auto w-full rounded-xl"
      />

      <div className="mt-8 flex flex-col gap-5 text-lg leading-relaxed text-slate-700">
        {post.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-8">
        <Button label="← Back to all posts" href="/posts" variant="secondary" />
      </div>

      <CommentSection postId={post.id} initialComments={getCommentsByPostId(post.id)} />
    </article>
  );
}
