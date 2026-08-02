import { allBlogs } from "contentlayer/generated";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
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
            I&apos;m a Software engineer based in Santo Domingo, specializing in backend platform engineering.
             I design, build, and operate scalable, reliable backend systems and cloud-native infrastructure,
            with experience in distributed systems. I also contribute to full-stack development when the 
            project requires it.
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
        className="flex animate-in flex-col gap-3"
        style={{ "--index": 4 } as React.CSSProperties}
      >
        {[
          {
            category: "Languages",
            color: "text-cyan-400",
            items: [
              { name: "Go", border: "border-cyan-600 text-cyan-400" },
              { name: "TypeScript", border: "border-blue-600 text-blue-400" },
              { name: "Python", border: "border-yellow-500 text-yellow-400" },
            ],
          },
          {
            category: "Backend",
            color: "text-pink-400",
            items: [
              { name: "NestJS", border: "border-pink-700 text-pink-400" },
              { name: "Redis", border: "border-red-700 text-red-400" },
              { name: "PostgreSQL", border: "border-blue-800 text-blue-400" },
              { name: "Kafka", border: "border-gray-700 text-gray-300" },
            ],
          },
          {
            category: "Infra",
            color: "text-sky-400",
            items: [
              { name: "AWS", border: "border-slate-600 text-yellow-500" },
              { name: "Kubernetes", border: "border-blue-500 text-blue-400" },
              { name: "Terraform", border: "border-violet-600 text-violet-400" },
              { name: "Docker", border: "border-blue-700 text-blue-400" },
            ],
          },
          {
            category: "Observability",
            color: "text-orange-400",
            items: [
              { name: "OpenTelemetry", border: "border-yellow-600 text-yellow-400" },
              { name: "Prometheus", border: "border-orange-600 text-orange-400" },
              { name: "Grafana", border: "border-orange-500 text-orange-400" },
            ],
          },
          {
            category: "Frontend",
            color: "text-teal-400",
            items: [
              { name: "Next.js", border: "border-gray-500 text-gray-200" },
              { name: "React.js", border: "border-sky-500 text-sky-400" },
            ],
          },
          {
            category: "Tooling & AI",
            color: "text-purple-400",
            items: [
              { name: "GitHub Actions", border: "border-blue-800 text-blue-400" },
              { name: "Turborepo", border: "border-pink-500 text-pink-400" },
              { name: "PNPM", border: "border-yellow-500 text-yellow-400" },
              { name: "Git", border: "border-slate-600 text-slate-300" },
              { name: "Claude", border: "border-orange-700 text-orange-400" },
              { name: "GitHub Copilot", border: "border-purple-600 text-purple-400" },
            ],
          },
        ].map((group) => (
          <div
            key={group.category}
            className="flex flex-col gap-3 rounded-xl border border-primary/10 px-5 py-4 sm:flex-row sm:items-center"
          >
            <p className={`w-32 shrink-0 text-sm font-medium ${group.color}`}>
              {group.category}
            </p>
            <div className="hidden h-6 w-px bg-primary/10 sm:block" />
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item.name}
                  className={`rounded-md border bg-transparent px-3 py-1 text-xs font-medium ${item.border}`}
                >
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div
        className="flex animate-in flex-col gap-8"
        style={{ "--index": 5 } as React.CSSProperties}
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