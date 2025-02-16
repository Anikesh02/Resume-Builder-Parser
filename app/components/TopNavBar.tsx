"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cx } from "../lib/cx";

export const TopNavBar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <header
      aria-label="Site Header"
      className={cx(
        "flex h-[var(--top-nav-bar-height)] items-center border-b-2 border-gray-100 px-3 lg:px-12",
        isHomePage && "bg-dot"
      )}
    >
      <div className="flex h-10 w-full items-center justify-between p-6 ">
        <Link href="/">
          <div className="flex items-center justify-center gap-1">
            <Image
              src={"/assets/logo.png"}
              width={16}
              height={16}
              alt="logo"
              className="h-8 w-full"
              priority
            />
            <h1 className="text-xl whitespace-nowrap font-bold text-black">
              / OpportuNet
            </h1>
          </div>
        </Link>
        <nav
          aria-label="Site Nav Bar"
          className="flex items-center gap-2 text-md text-black font-medium"
        >
          {[
            ["/resume-builder", "Builder"],
            ["/resume-builder", "Builder"],

            ["/resume-builder", "Builder"],
            ["/resume-parser", "Parser"],
          ].map(([href, text]) => (
            <Link
              key={text}
              className="rounded-md px-1.5 py-2 text-gray-500 hover:bg-gray-100 focus-visible:bg-gray-100 lg:px-4"
              href={href}
            >
              {text}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
