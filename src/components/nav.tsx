"use client";

import { navLinks } from "@/data/navLinks";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import clsx from "clsx";

const Nav = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="text-white">
      <ul className="hidden md:flex justify-between items-center gap-10 font-extrabold text-xl">
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link
              href={link.path}
              className={clsx(
                "hover:text-primary cursor-pointer",
                pathname === link.path && "text-primary"
              )}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
