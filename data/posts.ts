export type Post = {
  id: string;
  title: string;
  excerpt: string;
  content: string[];
  author: string;
  date: string;
  readTime: number;
  tags: string[];
  image: string;
};

export const posts: Post[] = [
  {
    id: "react-19-features",
    title: "What's New in React 19",
    excerpt: "A quick tour of Actions, the use hook and other changes that make React 19 easier to work with.",
    content: [
      "React 19 brings a set of features that remove a lot of boilerplate from everyday components. The biggest change is Actions, which let you pass an async function to a form and let React handle the pending state for you.",
      "The new use hook can read a promise or a context directly inside a component. This makes data loading in Server Components much shorter and easier to read.",
      "Other small improvements include ref as a normal prop, better error messages for hydration problems and built-in support for document metadata tags.",
    ],
    author: "Ayesha Khan",
    date: "2026-10-02",
    readTime: 6,
    tags: ["React", "JavaScript"],
    image: "/images/react-19-features.png",
  },
  {
    id: "nextjs-app-router",
    title: "Getting Started with the Next.js App Router",
    excerpt: "Folders become routes, layouts are shared and pages render on the server by default.",
    content: [
      "The App Router uses the app folder to define routes. Every folder is a URL segment and a page.tsx file makes that segment visible to users.",
      "Layouts wrap pages and keep their state between navigations, which is perfect for a navbar and footer. Special files like loading.tsx and not-found.tsx give you loading states and 404 pages with almost no code.",
      "By default every component is a Server Component. You only add 'use client' when a component needs state, effects or browser events.",
    ],
    author: "Bilal Ahmed",
    date: "2026-09-18",
    readTime: 8,
    tags: ["Next.js", "React"],
    image: "/images/nextjs-app-router.png",
  },
  {
    id: "typescript-tips",
    title: "10 TypeScript Tips for Beginners",
    excerpt: "Simple habits that make your TypeScript code safer without making it harder to read.",
    content: [
      "Start by letting TypeScript infer types where it can. You do not need to write a type on every variable, only on function parameters and exported values.",
      "Use type aliases or interfaces to describe your data, and union types like 'small' | 'large' instead of plain strings when only a few values are allowed.",
      "Turn on strict mode early. It catches null and undefined mistakes before they reach the browser.",
    ],
    author: "Sara Malik",
    date: "2026-09-05",
    readTime: 5,
    tags: ["TypeScript", "JavaScript"],
    image: "/images/typescript-tips.png",
  },
  {
    id: "tailwind-v4",
    title: "Styling Faster with Tailwind CSS v4",
    excerpt: "Tailwind v4 moves configuration into CSS and builds faster than ever.",
    content: [
      "Tailwind CSS v4 replaces the JavaScript config file with a simple @import in your CSS. Theme values are now CSS variables that you can override with @theme.",
      "Utility classes keep your styles next to your markup, which makes components easy to move between projects.",
      "Responsive design is handled with prefixes like md: and lg:, so one class list can describe the mobile, tablet and desktop layout.",
    ],
    author: "Ayesha Khan",
    date: "2026-08-27",
    readTime: 4,
    tags: ["CSS", "Tailwind"],
    image: "/images/tailwind-v4.png",
  },
  {
    id: "python-automation",
    title: "Automating Boring Tasks with Python",
    excerpt: "Rename files, read spreadsheets and send reports with a few lines of Python.",
    content: [
      "Python is a great language for small automation scripts. The os and pathlib modules make it easy to loop over files and rename or move them.",
      "Libraries like openpyxl and csv let you read and write spreadsheets without opening Excel.",
      "Combine these with a scheduler and your weekly report can build itself while you focus on other work.",
    ],
    author: "Usman Tariq",
    date: "2026-08-14",
    readTime: 7,
    tags: ["Python", "Automation"],
    image: "/images/python-automation.png",
  },
  {
    id: "docker-basics",
    title: "Docker Basics: Images and Containers",
    excerpt: "Understand the difference between an image and a container and run your first app.",
    content: [
      "An image is a read-only template that contains your app and everything it needs. A container is a running copy of that image.",
      "A Dockerfile lists the steps to build an image, such as choosing a base image, copying files and installing packages.",
      "With docker run you can start the same app on any machine, which removes the classic 'it works on my computer' problem.",
    ],
    author: "Bilal Ahmed",
    date: "2026-07-30",
    readTime: 6,
    tags: ["DevOps", "Docker"],
    image: "/images/docker-basics.png",
  },
  {
    id: "git-workflow",
    title: "A Simple Git Workflow for Group Projects",
    excerpt: "Branches, pull requests and clear commit messages keep a team project calm.",
    content: [
      "Give every feature its own branch so members do not overwrite each other's work. Keep the main branch always working.",
      "Write short commit messages that say what changed, for example 'Add search bar to posts page'.",
      "Open a pull request when a feature is ready and let a teammate review it before merging.",
    ],
    author: "Sara Malik",
    date: "2026-07-21",
    readTime: 5,
    tags: ["Git", "DevOps"],
    image: "/images/git-workflow.png",
  },
  {
    id: "linux-commands",
    title: "15 Linux Commands Every Student Should Know",
    excerpt: "From ls to grep, the commands that make the terminal feel less scary.",
    content: [
      "Commands like ls, cd and pwd help you move around the file system. mkdir, cp, mv and rm let you create and manage files.",
      "grep searches inside files, and piping its output with | lets you chain small commands into powerful one-liners.",
      "chmod and chown control permissions, which is important on servers where many users share the same machine.",
    ],
    author: "Usman Tariq",
    date: "2026-07-08",
    readTime: 6,
    tags: ["Linux", "DevOps"],
    image: "/images/linux-commands.png",
  },
  {
    id: "password-security",
    title: "How Passwords Are Stored Safely",
    excerpt: "Why websites hash passwords and what salting adds to the picture.",
    content: [
      "A good website never stores your password as plain text. It stores a hash, which is a one-way fingerprint of the password.",
      "A salt is a random value added to each password before hashing, so two users with the same password still get different hashes.",
      "Slow hashing algorithms like bcrypt and Argon2 make brute-force attacks much more expensive for attackers.",
    ],
    author: "Hira Javed",
    date: "2026-06-25",
    readTime: 7,
    tags: ["Security"],
    image: "/images/password-security.png",
  },
  {
    id: "network-basics",
    title: "Networking Basics: IP, DNS and Ports",
    excerpt: "What really happens when you type a website address into your browser.",
    content: [
      "Every device on a network has an IP address. DNS turns a name like example.com into that address.",
      "Ports let one machine run many services at once. Websites usually use port 443 for HTTPS.",
      "Tools like ping, traceroute and nslookup help you see each step and find where a connection fails.",
    ],
    author: "Hira Javed",
    date: "2026-06-12",
    readTime: 6,
    tags: ["Networking", "Security"],
    image: "/images/network-basics.png",
  },
  {
    id: "sql-joins",
    title: "SQL Joins Explained with Simple Examples",
    excerpt: "Inner, left and right joins explained with two small tables.",
    content: [
      "A join combines rows from two tables using a related column, such as a student id.",
      "An inner join returns only rows that match in both tables, while a left join keeps every row from the left table even when there is no match.",
      "Drawing the two tables on paper before writing the query is the easiest way to pick the right join.",
    ],
    author: "Ayesha Khan",
    date: "2026-05-29",
    readTime: 5,
    tags: ["Databases", "SQL"],
    image: "/images/sql-joins.png",
  },
  {
    id: "rest-vs-graphql",
    title: "REST vs GraphQL: Which One to Choose",
    excerpt: "Two popular ways to build APIs and when each one makes sense.",
    content: [
      "REST uses separate URLs for each resource and standard HTTP methods like GET and POST. It is simple and works well with caching.",
      "GraphQL uses a single endpoint where the client asks for exactly the fields it needs, which avoids over-fetching.",
      "For small projects REST is usually enough. GraphQL shines when many different clients need different shapes of the same data.",
    ],
    author: "Bilal Ahmed",
    date: "2026-05-15",
    readTime: 7,
    tags: ["APIs", "JavaScript"],
    image: "/images/rest-vs-graphql.png",
  },
  {
    id: "intro-to-llms",
    title: "A Gentle Introduction to Large Language Models",
    excerpt: "How LLMs predict the next word and why prompts matter.",
    content: [
      "A large language model is trained on a huge amount of text to predict the next token in a sentence.",
      "Because it learns patterns rather than facts, a clear prompt with examples usually gives much better answers.",
      "LLMs are useful for drafting, summarising and coding help, but their answers should always be checked.",
    ],
    author: "Sara Malik",
    date: "2026-05-02",
    readTime: 8,
    tags: ["AI", "Python"],
    image: "/images/intro-to-llms.png",
  },
  {
    id: "css-grid-guide",
    title: "CSS Grid in 10 Minutes",
    excerpt: "Build two-dimensional layouts with rows and columns in a few lines.",
    content: [
      "CSS Grid lets you define rows and columns on a parent element and place children inside them.",
      "grid-template-columns with repeat and fr units creates flexible columns that share the available space.",
      "Combine Grid with media queries to change the number of columns on tablets and phones.",
    ],
    author: "Ayesha Khan",
    date: "2026-04-18",
    readTime: 4,
    tags: ["CSS"],
    image: "/images/css-grid-guide.png",
  },
  {
    id: "web-performance",
    title: "Simple Ways to Make Your Website Faster",
    excerpt: "Optimised images, fewer scripts and caching can cut load time in half.",
    content: [
      "Images are often the heaviest part of a page. Serve them in modern formats and the right size for each screen.",
      "Load only the JavaScript a page needs and keep static content rendered on the server.",
      "Use browser caching and a CDN so repeat visitors load the site almost instantly.",
    ],
    author: "Usman Tariq",
    date: "2026-04-04",
    readTime: 5,
    tags: ["Performance", "Next.js"],
    image: "/images/web-performance.png",
  },
  {
    id: "cloud-deploy",
    title: "Deploying Your First App to the Cloud",
    excerpt: "Push your code to GitHub and get a live link in a few minutes.",
    content: [
      "Platforms like Vercel connect to your GitHub repository and build your app on every push.",
      "Environment variables keep secrets such as API keys out of your source code.",
      "Preview deployments give every branch its own link, which makes reviewing changes with your team easy.",
    ],
    author: "Hira Javed",
    date: "2026-03-20",
    readTime: 5,
    tags: ["Cloud", "DevOps"],
    image: "/images/cloud-deploy.png",
  },
];

export function getPostById(id: string): Post | undefined {
  return posts.find((post) => post.id === id);
}

export function getAllTags(): string[] {
  const tags: string[] = [];
  for (const post of posts) {
    for (const tag of post.tags) {
      if (!tags.includes(tag)) {
        tags.push(tag);
      }
    }
  }
  return tags.sort();
}
