import type { Metadata } from "next";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Page Not Found | DevNotes",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center py-20 text-center">
      <p className="text-6xl font-bold text-cyan-700">404</p>
      <h1 className="mt-4 text-2xl font-bold text-slate-900">Page not found</h1>
      <p className="mt-2 text-slate-600">Sorry, we could not find the page or post you were looking for.</p>
      <div className="mt-6">
        <Button label="Go to all posts" href="/posts" />
      </div>
    </div>
  );
}
