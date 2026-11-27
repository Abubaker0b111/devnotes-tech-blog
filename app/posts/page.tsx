import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import PostExplorer from "@/components/PostExplorer";
import { posts, getAllTags } from "@/data/posts";

export const metadata: Metadata = {
  title: "All Posts | DevNotes",
  description: "Search, filter by tag and sort all DevNotes articles.",
};

export default function PostsPage() {
  return (
    <div>
      <PageHeader title="All Posts" subtitle="Search by title, filter by tag and sort the list." />
      <PostExplorer posts={posts} tags={getAllTags()} />
    </div>
  );
}
