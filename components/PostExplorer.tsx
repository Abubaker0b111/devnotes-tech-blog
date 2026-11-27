"use client";

import { useState } from "react";
import { Post } from "@/data/posts";
import PostCard from "./PostCard";
import SearchBar from "./SearchBar";
import SortSelect from "./SortSelect";
import TagBadge from "./TagBadge";

interface PostExplorerProps {
  posts: Post[];
  tags: string[];
}

const sortOptions = [
  { value: "newest", label: "Newest first" },
  { value: "oldest", label: "Oldest first" },
  { value: "shortest", label: "Shortest read" },
  { value: "title", label: "Title (A-Z)" },
];

export default function PostExplorer({ posts, tags }: PostExplorerProps) {
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");
  const [sortBy, setSortBy] = useState("newest");

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchesTag = selectedTag === "All" || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (sortBy === "oldest") {
      return a.date.localeCompare(b.date);
    }
    if (sortBy === "shortest") {
      return a.readTime - b.readTime;
    }
    if (sortBy === "title") {
      return a.title.localeCompare(b.title);
    }
    return b.date.localeCompare(a.date);
  });

  return (
    <div>
      <div className="mb-4 flex flex-col gap-3 sm:flex-row">
        <SearchBar value={search} placeholder="Search posts..." onChange={setSearch} />
        <SortSelect value={sortBy} options={sortOptions} onChange={setSortBy} />
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        <TagBadge label="All" active={selectedTag === "All"} onClick={() => setSelectedTag("All")} />
        {tags.map((tag) => (
          <TagBadge key={tag} label={tag} active={selectedTag === tag} onClick={() => setSelectedTag(tag)} />
        ))}
      </div>

      <p className="mb-4 text-sm text-slate-500">
        Showing {sortedPosts.length} of {posts.length} posts
      </p>

      {sortedPosts.length === 0 ? (
        <p className="rounded-lg border border-dashed border-slate-300 p-8 text-center text-slate-500">
          No posts match your search.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sortedPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
