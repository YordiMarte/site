import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gear | Yordi Marte",
  description: "My toolbox. This is gear I actually own and recommend.",
  openGraph: {
    title: "Gear | Yordi Marte",
    description: "My toolbox. This is gear I actually own and recommend.",
    type: "website",
    url: "https://b-r.io/blog/gear",
    images: [{ url: "https://b-r.io/api/og?title=Gear", alt: "gear" }],
  },
};

interface ItemProps {
  title: string;
  description: string;
  image: string;
  link: string;
  sponsored?: boolean;
}

const Item = ({ title, description, image, link, sponsored }: ItemProps) => (
  <li className="col-span-1 row-span-1 flex snap-start items-center gap-4 transition-opacity">
    <a
      className="relative aspect-square h-[4rem] w-[4rem] min-w-[4rem] overflow-hidden rounded-xl border border-primary bg-tertiary"
      href={link}
      target="_blank"
    >
      <Image
        src={image}
        alt={title}
        className="h-full w-full overflow-hidden rounded-xl object-cover object-center"
        fill
      />
    </a>
    <div className="flex grow items-center justify-between gap-2">
      <div className="space-y-1">
        <h3 className="line-clamp-2 font-medium leading-tight text-primary">
          {title}
        </h3>
        <p className="line-clamp-3 text-sm leading-tight text-secondary">
          {description}
        </p>
      </div>
      <div>
        <a
          className="ml-auto h-fit rounded-full bg-tertiary px-4 py-2 text-sm"
          href={link}
          target="_blank"
        >
          Get
        </a>
        {sponsored && (
          <p className="mt-1 text-center text-xs text-tertiary">Sponsored</p>
        )}
      </div>
    </div>
  </li>
);

export default function Gear() {
  const categories = gear.reduce((acc, item) => {
    if (!acc.includes(item.category)) {
      acc.push(item.category);
    }
    return acc;
  }, [] as string[]);

  categories.sort();

  return (
    <>
      <div className="flex flex-col gap-16 md:gap-24">
        <div className="flex animate-in flex-col gap-8">
          <div>
            <h1 className="animate-in text-3xl font-bold tracking-tight">
              Gear
            </h1>
            <p
              className="animate-in text-secondary"
              style={{ "--index": 1 } as React.CSSProperties}
            >
              My toolbox.
            </p>
          </div>
          <p
            className="max-w-lg animate-in text-pretty text-secondary"
            style={{ "--index": 2 } as React.CSSProperties}
          >
            List of tools I actually own and enjoy using. Using the affiliate
            links help support my content creation. 
          </p>
        </div>

        {categories.map((category, index) => (
          <section
            className="flex animate-in flex-col gap-8"
            key={index}
            style={{ "--index": 3 } as React.CSSProperties}
          >
            <h2 className="text-secondary">{category}</h2>
            <ul className="animated-list -mx-6 grid snap-x snap-mandatory scroll-pl-6 auto-cols-[100%] grid-flow-col grid-rows-3 flex-nowrap gap-x-3 gap-y-8 overflow-x-scroll px-6 md:grid md:grid-flow-row md:grid-cols-2 md:grid-rows-none md:gap-x-6 md:overflow-auto">
              {gear.map((item, index) => {
                if (item.category === category) {
                  return (
                    <Item
                      key={index}
                      title={item.name}
                      description={item.description}
                      image={item.image}
                      link={item.link}
                      sponsored={item.sponsored}
                    />
                  );
                } else {
                  return null;
                }
              })}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}

const gear = [
  {
    name: "Visual Studio Code",
    category: "Apps",
    image: "/gear/VisualStudioCode.png",
    description: "The best code editor for Full-stack development. I use it daily.",
    link: "https://code.visualstudio.com/",
  },
  {
    name: "Notion",
    category: "Apps",
    description:
      "The best all-in-one workspace for notes, tasks, and projects. I use it daily.",
    image: "/gear/Notion.png",
    link: "https://www.notion.com/",
  },
  {
    name: "Warp",
    category: "Apps",
    image: "/gear/Warp.png",
    description:
      "Warp is a modern terminal for developers. I use it daily for my development work.",
    link: "https://www.warp.dev/blog/warp-is-now-open-source",
  },
  {
    name: "Claude",
    category: "Apps",
    image: "/gear/Claude.png",
    description:
      "Claude is a next-generation AI assistant that helps me with coding, writing, and research. I use it daily for my projects.",
    link: "https://www.anthropic.com/claude",
  },
  {
    name: "GitHub",
    category: "Apps",
    description:
      "GitHub is a web-based platform used for version control and collaborative software development. I use it daily for my projects.",
    image: "/gear/github.png",
    link: "https://github.com/",
  },
];