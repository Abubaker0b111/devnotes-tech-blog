import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "About | DevNotes",
  description: "Learn about DevNotes and the writers behind the blog.",
};

export default function AboutPage() {
  const authors: string[] = [];
  for (const post of posts) {
    if (!authors.includes(post.author)) {
      authors.push(post.author);
    }
  }

  return (
    <div>
      <PageHeader title="About DevNotes" subtitle="A small blog made by students, for students." />

      <div className="grid gap-8 md:grid-cols-2 md:items-center">
        <Image
          src="/images/about-team.png"
          alt="DevNotes team"
          width={1200}
          height={675}
          className="h-auto w-full rounded-xl"
        />
        <div className="flex flex-col gap-4 text-slate-700">
          <p>
            DevNotes started as a place to share what we learn in our classes. Every article is short,
            practical and written in plain language.
          </p>
          <p>
            We write about web development, cyber security, networking, DevOps and AI. So far we have
            published {posts.length} posts.
          </p>
        </div>
      </div>

      <h2 className="mt-12 mb-4 text-2xl font-bold">Our Writers</h2>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {authors.map((author) => (
          <li key={author} className="rounded-xl border border-slate-200 bg-white p-5">
            <p className="font-semibold text-slate-900">{author}</p>
            <p className="text-sm text-slate-500">
              {posts.filter((post) => post.author === author).length} posts
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
