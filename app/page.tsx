import type { Metadata } from "next";
import Button from "@/components/Button";
import PostCard from "@/components/PostCard";
import TagBadge from "@/components/TagBadge";
import { posts, getAllTags } from "@/data/posts";

export const metadata: Metadata = {
  title: "Home | DevNotes",
  description: "Read the latest articles on React, Next.js, security, DevOps and more.",
};

export default function HomePage() {
  const latestPosts = [...posts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);
  const tags = getAllTags();

  return (
    <div>
      <section className="rounded-2xl bg-slate-900 px-6 py-12 text-white sm:px-10 sm:py-16">
        <p className="text-sm font-semibold uppercase tracking-wide text-cyan-400">Tech Blog</p>
        <h1 className="mt-2 max-w-2xl text-3xl font-bold sm:text-5xl">
          Simple articles for students who love technology
        </h1>
        <p className="mt-4 max-w-xl text-slate-300">
          Short, beginner-friendly posts on web development, security, DevOps and AI.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button label="Browse Posts" href="/posts" />
          <Button label="About Us" href="/about" variant="secondary" />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="mb-6 text-2xl font-bold">Latest Posts</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latestPosts.map((post) => (
            <PostCard key={post.id} post={post} showExcerpt={false} />
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="mb-4 text-2xl font-bold">Topics We Cover</h2>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <TagBadge key={tag} label={tag} />
          ))}
        </div>
      </section>
    </div>
  );
}
