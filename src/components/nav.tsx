'use client';

import { navLinks } from '@/data/navLinks';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React from 'react';
import clsx from 'clsx';

const Nav = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className='text-white'>
      <ul className='hidden items-center justify-between gap-10 text-xl font-extrabold md:flex'>
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link
              href={link.path}
              className={clsx(
                'cursor-pointer hover:text-amber-800',
                pathname === link.path && 'text-primary underline',
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
