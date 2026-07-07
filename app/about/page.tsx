import Image from "next/image";
import { Metadata } from "next";

import Link from "@/app/components/Link";
import Section from "@/app/components/Section";
import ConnectLinks from "@/app/components/ConnectLinks";
import Workplaces from "@/app/about/components/Workplaces";
import Gallery from "@/app/about/components/Gallery";

import unicaribeLogo from "public/work/unicaribe.svg";
import hackrankLogo from "public/work/Hack.svg";
import kivoffLogo from "public/work/KivoffIco.svg";


import colorado from "public/gallery/colorado.jpg";
import NYC from "public/gallery/nyc.jpg";
import Greeting from "./components/Greeting";

async function getYoutubeStats() {
  try {
    const response = await fetch(
      `${process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000"}/api/youtube`,
      {
        next: { revalidate: 86400 }, // 24 hours
        headers: {
          Accept: "application/json",
        },
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return parseInt(data.subscribers) || 0;
  } catch (error) {
    console.error("Error fetching YouTube stats:", error);
    return 81600; // Use your current subscriber count as fallback
  }
}

export const metadata: Metadata = {
  title: "About | Yordi Marte",
  description:
    "I'm a Software engineer based in Santo Domingo, specialized in backend and infrastructure. I design, build, and operate scalable and reliable platforms, with experience in distributed systems.",
};

export default async function About() {
  const subscribers = await getYoutubeStats();

  // Format the number only once
  const formattedSubscribers = new Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumSignificantDigits: 3,
  }).format(subscribers);

  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div>
        <h1 className="animate-in text-3xl font-bold tracking-tight text-primary">
          About
        </h1>
        <p
          className="animate-in text-secondary"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          A glimpse into me.
        </p>
      </div>
      <div className="mb-8 md:hidden">
        <div
          className="animate-in"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          <Image
            src={NYC}
            alt={"me and lily"}
            width={324}
            height={139}
            className="pointer-events-none relative inset-0 h-52 w-60 -rotate-6 rounded-xl bg-neutral-400 object-cover object-right shadow-md"
            priority
          />
        </div>

        <div
          className="animate-in"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <Image
            src={colorado}
            alt={"Downtown New York"}
            width={220}
            height={260}
            className="pointer-events-none absolute inset-0 -top-44 left-[40%] w-48 rotate-6 rounded-xl bg-neutral-400 object-cover shadow-md md:left-[60%] md:w-56"
            priority
          />
        </div>
      </div>
      <div className="hidden md:block">
        <Gallery />
      </div>
      <div
        className="flex animate-in flex-col gap-16 md:gap-24"
        style={{ "--index": 3 } as React.CSSProperties}
      >
<Section heading="Projects" headingAlignment="left">
  <div className="flex flex-col gap-6">

    {/* Project */}


    {/* Ky*/}
    <div className="flex items-start justify-between gap-8">

      <div className="flex flex-col gap-2">
        <a href="https://github.com/YordiMarte/Ky" target="_blank" rel="noopener noreferrer" className="no-underline">
          <h3 className="font-semibold text-white transition">
            Ky
          </h3>
        <p className="text-gray-400 max-w-xs leading-relaxed">
          An MCP native intregration for x402 using the AI SDK
        </p>
        </a>
      </div>

      <div className="flex flex-wrap gap-2 max-w-[180px] justify-end">
        <span className="bg-blue-600 text-blue-100 text-xs px-3 py-1 rounded-full">TypeScript</span>
        <span className="bg-lime-600 text-cyan-100 text-xs px-3 py-1 rounded-full">Node.Js</span>
        <span className="bg-gray-700 text-gray-200 text-xs px-3 py-1 rounded-full">AI SDK</span>
        <span className="bg-pink-500 text-green-100 text-xs px-3 py-1 rounded-full">Turborepo</span>
        <span className="bg-red-600 text-yellow-100 text-xs px-3 py-1 rounded-full">PNPM</span>
        <span className="bg-black text-purple-100 text-xs px-3 py-1 rounded-full">Vercel</span>
      </div>
    </div>

    {/* Kivoff */}
    <div className="flex items-start justify-between gap-8">

      <div className="flex flex-col gap-2">
        <a href="https://github.com/YordiMarte/Kivoff" target="_blank" rel="noopener noreferrer" className="no-underline">
          <h3 className="font-semibold text-white transition">
            Kivoff
          </h3>
        <p className="text-gray-400 max-w-xs leading-relaxed">
          Build the tools. Deploy the future. Powered by AI. Creators of Infera.js,
          Veftro, Oryze, Fforve and Ky.
        </p>
        </a>
      </div>

      <div className="flex flex-wrap gap-2 max-w-[180px] justify-end">
        <span className="bg-blue-600 text-blue-100 text-xs px-3 py-1 rounded-full">TypeScript</span>
        <span className="bg-sky-500 text-slate-950 text-xs px-3 py-1 rounded-full">React</span>
        <span className="bg-black text-gray-100 text-xs px-3 py-1 rounded-full">Next.js</span>
        <span className="bg-lime-600 text-cyan-100 text-xs px-3 py-1 rounded-full">Node.js</span>
        <span className="bg-blue-700 text-blue-100 text-xs px-3 py-1 rounded-full">Docker</span>
        <span className="bg-blue-900 text-blue-100 text-xs px-3 py-1 rounded-full">PostgreSQL</span>
      </div>
    </div>

    {/* Site */}
    <div className="flex items-start justify-between gap-8">

      <div className="flex flex-col gap-2">
        <a href="https://github.com/YordiMarte/site" target="_blank" rel="noopener noreferrer" className="no-underline">
          <h3 className="font-semibold text-white transition">
            Site
          </h3>
        <p className="text-gray-400 max-w-xs leading-relaxed">
          My personal website
        </p>
        </a>
      </div>

      <div className="flex flex-wrap gap-2 max-w-[180px] justify-end">
        <span className="bg-blue-600 text-blue-100 text-xs px-3 py-1 rounded-full">TypeScript</span>
        <span className="bg-sky-500 text-slate-950 text-xs px-3 py-1 rounded-full">React</span>
        <span className="bg-black text-gray-100 text-xs px-3 py-1 rounded-full">Next.js</span>
        <span className="bg-cyan-500 text-cyan-950 text-xs px-3 py-1 rounded-full">Tailwind CSS</span>

        <span className="bg-fuchsia-600 text-white text-xs px-3 py-1 rounded-full">Framer Motion</span>
        <span className="bg-amber-400 text-slate-900 text-xs px-3 py-1 rounded-full">MDX</span>
        <span className="bg-emerald-600 text-white text-xs px-3 py-1 rounded-full">Contentlayer</span>
        <span className="bg-black text-white text-xs px-3 py-1 rounded-full">Vercel</span>
      </div>
    </div>

    {/* score-solution */}
    <div className="flex items-start justify-between gap-8">

      <div className="flex flex-col gap-2">
        <a href="https://github.com/YordiMarte/score-solution" target="_blank" rel="noopener noreferrer" className="no-underline">
          <h3 className="font-semibold text-white transition">
            Score-solution
          </h3>
        <p className="text-gray-400 max-w-xs leading-relaxed">
          Private Customer Management System.
        </p>
        </a>
      </div>

      <div className="flex flex-wrap gap-2 max-w-[180px] justify-end">
        <span className="bg-black text-gray-100 text-xs px-3 py-1 rounded-full">Next.js</span>
        <span className="bg-blue-600 text-blue-100 text-xs px-3 py-1 rounded-full">TypeScript</span>
        <span className="bg-sky-500 text-slate-950 text-xs px-3 py-1 rounded-full">React</span>
        <span className="bg-cyan-500 text-cyan-950 text-xs px-3 py-1 rounded-full">Tailwind CSS</span>
        <span className="bg-emerald-600 text-white text-xs px-3 py-1 rounded-full">Supabase</span>
        <span className="bg-blue-900 text-blue-100 text-xs px-3 py-1 rounded-full">PostgreSQL</span>
        <span className="bg-teal-600 text-white text-xs px-3 py-1 rounded-full">Supabase Auth</span>
        <span className="bg-black text-white text-xs px-3 py-1 rounded-full">Vercel</span>
      </div>
    </div>

    {/* Effectis */}
    <div className="flex items-start justify-between gap-8">

      <div className="flex flex-col gap-2">
        <a href="https://github.com/YordiMarte/effectis" target="_blank" rel="noopener noreferrer" className="no-underline">
          <h3 className="font-semibold text-white transition">
            Effectis
          </h3>
        <p className="text-gray-400 max-w-xs leading-relaxed">
          It is a Redis clone made in TypeScript but using an advanced functional model.
        </p>
        </a>
      </div>

      <div className="flex flex-wrap gap-2 max-w-[180px] justify-end">
        <span className="bg-blue-600 text-blue-100 text-xs px-3 py-1 rounded-full">TypeScript</span>
        <span className="bg-purple-600 text-white text-xs px-3 py-1 rounded-full">Effect</span>
        <span className="bg-red-700 text-red-100 text-xs px-3 py-1 rounded-full">Redis</span>
        <span className="bg-amber-600 text-white text-xs px-3 py-1 rounded-full">RESP Protocol</span>
        <span className="bg-yellow-500 text-black text-xs px-3 py-1 rounded-full">Bun</span>
        <span className="bg-lime-600 text-cyan-100 text-xs px-3 py-1 rounded-full">Node.js</span>
        <span className="bg-teal-600 text-white text-xs px-3 py-1 rounded-full">Vitest</span>
        <span className="bg-blue-700 text-blue-100 text-xs px-3 py-1 rounded-full">Docker</span>
      </div>
    </div>

    {/* effect-distributed */}
    <div className="flex items-start justify-between gap-8">

      <div className="flex flex-col gap-2">
        <a href="https://github.com/YordiMarte/effect-distributed" target="_blank" rel="noopener noreferrer" className="no-underline">
          <h3 className="font-semibold text-white transition">
            effect-distributed
          </h3>
        <p className="text-gray-400 max-w-xs leading-relaxed">
          Distributed semaphore library for Effect with pluggable backends and automatic TTL refresh.
        </p>
        </a>
      </div>

      <div className="flex flex-wrap gap-2 max-w-[180px] justify-end">
        <span className="bg-blue-600 text-blue-100 text-xs px-3 py-1 rounded-full">TypeScript</span>
        <span className="bg-purple-600 text-white text-xs px-3 py-1 rounded-full">Effect</span>
        <span className="bg-red-700 text-red-100 text-xs px-3 py-1 rounded-full">Redis</span>
        <span className="bg-orange-600 text-white text-xs px-3 py-1 rounded-full">ioredis</span>
        <span className="bg-slate-700 text-white text-xs px-3 py-1 rounded-full">Distributed Systems</span>
        <span className="bg-lime-600 text-cyan-100 text-xs px-3 py-1 rounded-full">Node.js</span>
        <span className="bg-yellow-500 text-black text-xs px-3 py-1 rounded-full">Bun</span>
        <span className="bg-teal-600 text-white text-xs px-3 py-1 rounded-full">Vitest</span>
        <span className="bg-blue-900 text-gray-900 text-xs px-3 py-1 rounded-full">GitHub Actions</span>
        <span className="bg-green-700 text-white text-xs px-3 py-1 rounded-full">Changesets</span>
        <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-full">npm</span>
      </div>
    </div>

    {/* Infera */}
    <div className="flex items-start justify-between gap-8">

      <div className="flex flex-col gap-2">
        <a href="https://github.com/YordiMarte/infera" target="_blank" rel="noopener noreferrer" className="no-underline">
          <h3 className="font-semibold text-white transition">
            Infera
          </h3>
        <p className="text-gray-400 max-w-xs leading-relaxed">
          AI Inference Gateway with rate limiting, caching, token billing and observability.
        </p>
        </a>
      </div>

      <div className="flex flex-wrap gap-2 max-w-[180px] justify-end">
        <span className="bg-cyan-600 text-cyan-100 text-xs px-3 py-1 rounded-full">Go</span>
        <span className="bg-pink-700 text-red-100 text-xs px-3 py-1 rounded-full">NestJS</span>
        <span className="bg-red-700 text-red-100 text-xs px-3 py-1 rounded-full">Redis</span>
        <span className="bg-blue-900 text-blue-100 text-xs px-3 py-1 rounded-full">PostgreSQL</span>
        <span className="bg-blue-700 text-blue-100 text-xs px-3 py-1 rounded-full">Docker</span>
        <span className="bg-blue-500 text-blue-100 text-xs px-3 py-1 rounded-full">Kubernetes</span>
        <span className="bg-violet-700 text-black text-xs px-3 py-1 rounded-full">Terraform</span>
        <span className="bg-blue-200 text-blue-500 text-xs px-3 py-1 rounded-full">Helm</span>
        <span className="bg-yellow-600 text-blue-300 text-xs px-3 py-1 rounded-full">OpenTelemetry</span>
        <span className="bg-orange-600 text-orange-100 text-xs px-3 py-1 rounded-full">Prometheus</span>
        <span className="bg-slate-600 text-yellow-500 text-xs px-3 py-1 rounded-full">AWS</span>
      </div>
    </div>
  </div>

        </Section>
        <Section heading="Connect" headingAlignment="left">
          <ul className="animated-list grid flex-grow grid-cols-1 gap-3 md:grid-cols-2">
            {ConnectLinks.map((link) => (
              <li className="col-span-1 transition-opacity" key={link.label}>
                <Link
                  href={link.href}
                  className="inline-grid w-full rounded-lg bg-secondary p-4 no-underline transition-opacity "
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{link.icon}</span>
                    {link.label}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="ml-auto h-5 w-5 text-secondary"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
        <Section heading="Work" headingAlignment="left">
          <div className="flex w-full flex-col gap-8">
            <p>
              I specialize in Python & TypeScript, Infrastructure, Backend, web development,
              UI/UX, and product design, My main focus is designing, building, 
              and operating scalable and reliable backend platforms. But I am always learning new things.
              Here are some of the places I have worked.
            </p>
            <Workplaces items={workplaces} />
          </div>
        </Section>
      </div>
    </div>
  );
}

const workplaces = [
  {
    title: "Founder & Software Engineer",
    company: "Kivoff",
    date: "2024 - Now",
    imageSrc: kivoffLogo,
    link: "https://www.linkedin.com/company/kivoff/",
  },
  {
    title: "Jr. Software Engineer",
    company: "HackerRank",
    date: "2024",
    imageSrc: hackrankLogo,
    link: "https://www.hackerrank.com/certificates/iframe/0de116df66dd",
  },
  {
    title: "Coding Camp Engineer",
    company: "University of Caribe",
    date: "2023 - 2024",
    imageSrc: unicaribeLogo,
    link: "https://unicaribe.edu.do/",
  },
];