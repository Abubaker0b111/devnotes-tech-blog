export type Comment = {
  id: number;
  postId: string;
  name: string;
  text: string;
  date: string;
};

export const comments: Comment[] = [
  { id: 1, postId: "react-19-features", name: "Hamza", text: "The use hook section was really clear, thanks!", date: "2026-10-03" },
  { id: 2, postId: "react-19-features", name: "Fatima", text: "Can you write a follow-up on Actions with forms?", date: "2026-10-04" },
  { id: 3, postId: "nextjs-app-router", name: "Ali", text: "Finally understood when to use 'use client'.", date: "2026-09-19" },
  { id: 4, postId: "typescript-tips", name: "Zainab", text: "Union types tip saved me a lot of bugs.", date: "2026-09-06" },
  { id: 5, postId: "docker-basics", name: "Omar", text: "Simple and to the point. Great for beginners.", date: "2026-07-31" },
  { id: 6, postId: "password-security", name: "Noor", text: "Never knew what a salt was until now.", date: "2026-06-26" },
  { id: 7, postId: "network-basics", name: "Saad", text: "The DNS explanation was very helpful for my networking class.", date: "2026-06-13" },
];

export function getCommentsByPostId(postId: string): Comment[] {
  return comments.filter((comment) => comment.postId === postId);
}
