# DevNotes – Tech Blog

**CS4032 Web Programming – Assignment 3 (Next.js Frontend)**

- **Group number:** G22
- **Topic:** 51 – Tech blog

| Member | Roll number |
| --- | --- |
| Muhammad Abubaker | 24I-2024 |
| Muhammad Saim | 24I-2064 |
| Muhammad Ali | 24I-2089 |

## Description

DevNotes is a frontend-only tech blog built with Next.js 16, React 19, TypeScript and Tailwind CSS. Users can browse 16 posts, search them, filter by tag, sort them and open a post to read it. Each post has a comment section where comments can be added and deleted (React state only), and there is a contact form with validation.

## How to run

```bash
npm install
npm run dev
```

Open http://localhost:3000. A production build can be made with `npm run build`.

## Routes

| Route | What it shows |
| --- | --- |
| `/` | Home page with a hero section, the 3 latest posts and all tags |
| `/posts` | All posts with search, tag filter and sort (has `loading.tsx`) |
| `/posts/[id]` | Post detail (dynamic route) with the full article and comments; unknown IDs call `notFound()` |
| `/about` | About the blog and its writers |
| `/contact` | Contact form with client-side validation |
| any unknown URL | Custom 404 page (`not-found.tsx`) |

## Project structure

```text
app/            routes, layout.tsx, loading.tsx, not-found.tsx
components/     reusable components
data/           mock data and types (posts.ts, comments.ts)
public/images/  post cover images
```

**Client Components:** `PostExplorer` (search, filter and sort state), `CommentSection` (comment list and form state), `ContactForm` (form fields, validation and success state). All pages are Server Components.

## Contribution

| Member | Pages and components |
| --- | --- |
| Muhammad Abubaker | `layout.tsx`, Home, About, `not-found.tsx`, Navbar, Footer, Button, PageHeader |
| Muhammad Saim | Posts listing, Post detail `[id]`, `loading.tsx`, PostCard, TagBadge, SearchBar, SortSelect, PostExplorer, `data/posts.ts` |
| Muhammad Ali | Contact page, ContactForm, CommentSection, CommentItem, `data/comments.ts` |

## Links

- **Repository:** (add link)
- **Video:** (add link)
- **Live demo (Vercel, bonus):** (add link)

## AI tools used

Claude was used to help write the components and pages and to fix build errors.