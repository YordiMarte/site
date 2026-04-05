"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { motion } from "framer-motion";

import ThemeSwitcher from "@/app/components/ThemeSwitcher";

const links = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/blog",
    title: "Blog",
  },
  {
    path: "/gear",
    title: "Gear",
  },
] as const;

export default function Navigation() {
  const pathname = `/${usePathname().split("/")[1]}`;

  return (
    <header className="md:mt-6">
      <nav className="mx-auto flex max-w-[700px] items-center justify-between gap-3 px-4 py-3 md:px-6">
        <Link href="/" className="hidden shrink-0 text-primary md:block">
          <img 
            src="/LogoYorditt.png" 
            alt="Yordi" 
            width={40}
            height={38}
            />
        </Link>

        <div className="flex gap-1">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`${
                pathname === link.path ? "text-primary" : "text-secondary"
              } relative rounded-lg px-3 py-1.5 text-sm transition-colors`}
              style={{
                WebkitTapHighlightColor: "transparent",
              }}
            >
              {pathname === link.path && (
                <motion.span
                  layoutId="bubble"
                  className="absolute inset-0 -z-10 rounded-lg bg-tertiary"
                  // style={{ borderRadius: 9999 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {link.title}
            </Link>
          ))}
        </div>

        <div className="flex h-8 w-8 items-center justify-center">
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
}