import { allBlogs } from "contentlayer/generated";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
// import { allProjects } from "contentlayer/generated";

import Link from "@/app/components/Link";
import PostList from "@/app/blog/components/PostList";
// import ProjectList from "@/app/projects/components/ProjectList";

export default function Home() {
  const blogs = allBlogs
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .filter((_, i) => i < 3);

  // const projects = allProjects.sort(
  //   (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  // );

  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div className="flex flex-col gap-8">
        <div className="space-y-4">
          <h1 className="animate-in text-3xl font-semibold tracking-tight text-primary">
            hey, Yordi here!
          </h1>
          <p
            className="max-w-lg animate-in text-secondary"
            style={{ "--index": 1 } as React.CSSProperties}
          >
            I&apos;m a Software engineer based in Santo Domingo, specialized in backend and infrastructure. I design, build, 
            and operate scalable and reliable platforms, with experience in distributed systems. 
            I have also worked in full-stack development when the project requires it.
          </p>
        </div>
        <div
          className="flex animate-in gap-3 text-sm"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <Link
            href="https://github.com/YordiMarte"
            className="flex w-fit items-center rounded-full bg-secondary px-3 py-1 no-underline hover:bg-tertiary"
          >
            Github
            <ArrowUpRightIcon className="h-4 w-4 text-tertiary" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/yordimarte/"
            className="flex w-fit items-center rounded-full bg-secondary px-3 py-1 no-underline hover:bg-tertiary"
          >
            LinkedIn
            <ArrowUpRightIcon className="h-4 w-4 text-tertiary" />
          </Link>
          <Link
            className="flex w-fit items-center rounded-full bg-secondary px-3 py-1 no-underline hover:bg-tertiary"
            href="partners@yordymartegacia"
          >
            Collab
            <ArrowUpRightIcon className="h-4 w-4 text-tertiary" />
          </Link>
        </div>
      </div>

      <div
        className="flex animate-in flex-col gap-8"
        style={{ "--index": 4 } as React.CSSProperties}
      >
        <p className="tracking-tight text-secondary">Pinned</p>
        <div className="flex flex-col gap-4">
          {[
            {
              title: "Software Engineer",
              summary: "HackerRank role certification",
              url: "https://www.hackerrank.com/certificates/0de116df66dd",
            },
            {
              title: "Python (Basic)",
              summary: "HackerRank skill certification",
              url: "https://www.hackerrank.com/certificates/0e0fe468cc28",
            },
          ].map((cert) => (
            <Link
              key={cert.url}
              href={cert.url}
              className="flex items-center justify-between rounded-lg bg-secondary px-4 py-3 no-underline hover:bg-tertiary"
            >
              <div>
                <p className="font-medium text-primary">{cert.title}</p>
                <p className="text-sm text-secondary">{cert.summary}</p>
              </div>
              <ArrowUpRightIcon className="h-5 w-5 text-tertiary" />
            </Link>
          ))}
        </div>
      </div>

<div
  className="flex animate-in flex-col gap-6"
  style={{ "--index": 3 } as React.CSSProperties}
>
  {[
    {
      category: "Languages",
      items: [
        { name: "Go", color: "bg-cyan-600 text-cyan-100" },
        { name: "TypeScript", color: "bg-blue-600 text-blue-100" },
        { name: "Python", color: "bg-yellow-500 text-white" },
        { name: "JavaScript", color: "bg-yellow-400 text-slate-900" },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "NestJS", color: "bg-pink-700 text-red-100" },
        { name: "Redis", color: "bg-red-700 text-red-100" },
        { name: "PostgreSQL", color: "bg-blue-900 text-blue-100" },
        { name: "Kafka", color: "bg-gray-800 text-gray-100" },
        { name: "Prisma", color: "bg-violet-500 text-slate-100" },
        { name: "Supabase", color: "bg-emerald-600 text-emerald-100" },
        { name: "Node.js", color: "bg-lime-600 text-slate-950" },
        { name: "Django", color: "bg-green-900 text-green-100" },
        { name: "GraphQL", color: "bg-fuchsia-600 text-white" },
      ],
    },
    {
      category: "Infra",
      items: [
        { name: "AWS", color: "bg-slate-600 text-yellow-500" },
        { name: "Kubernetes", color: "bg-blue-500 text-blue-100" },
        { name: "Terraform", color: "bg-violet-700 text-black" },
        { name: "Docker", color: "bg-blue-700 text-blue-100" },
        { name: "Helm", color: "bg-blue-200 text-blue-500" },
      ],
    },
    {
      category: "Observability",
      items: [
        { name: "OpenTelemetry", color: "bg-yellow-600 text-blue-300" },
        { name: "Prometheus", color: "bg-orange-600 text-orange-100" },
        { name: "Grafana", color: "bg-orange-500 text-orange-950" },
      ],
    },
    {
      category: "Frontend",
      items: [
        { name: "Next.js", color: "bg-black text-gray-100" },
        { name: "Tailwind", color: "bg-cyan-500 text-cyan-950" },
        { name: "shadcn/ui", color: "bg-zinc-700 text-zinc-100" },
        { name: "React.js", color: "bg-sky-500 text-slate-950" },
      ],
    },
    {
      category: "Tooling & AI",
      items: [
        { name: "GitHub Actions", color: "bg-blue-900 text-gray-900" },
        { name: "Turborepo", color: "bg-pink-500 text-gray-100" },
        { name: "PNPM", color: "bg-yellow-500 text-gray-900" },
        { name: "NPM", color: "bg-red-600 text-white" },
        { name: "Git", color: "bg-slate-800 text-white" },
        { name: "Claude", color: "bg-orange-800 text-orange-450" },
        { name: "GitHub Copilot", color: "bg-purple-600 text-purple-100" },
      ],
    },
  ].map(({ category, items }) => (
    <div key={category} className="flex items-start gap-4">
      <p className="w-32 shrink-0 text-lx text-tertiary">{category}</p>
      <div className="flex flex-wrap gap-2">
        {items.map(({ name, color }) => (
          <span key={name} className={`${color} text-xs px-4 py-2 rounded-full`}>
            {name}
          </span>
        ))}
      </div>
    </div>
  ))}
</div>

      <div
        className="flex animate-in flex-col gap-8"
        style={{ "--index": 4 } as React.CSSProperties}
      >
        <div className="space-y-4">
          <Link
            className="group flex items-center gap-2 tracking-tight text-secondary"
            href="/blog"
          >
            Latest blogs
            <ArrowUpRightIcon className="h-5 w-5 text-tertiary transition-all group-hover:text-primary" />
          </Link>
          <p className="max-w-lg text-tertiary text-pretty">
            I occasionally write about programming, productivity, and more.
          </p>
        </div>
        <PostList posts={blogs} />
      </div>
    </div>
  );
}