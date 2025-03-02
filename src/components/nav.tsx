'use client';

import { navLinks } from '@/data/navLinks';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React from 'react';
import clsx from 'clsx';
import MobileNav from './mobile-nav';

const Nav = () => {
  // get current route
  const pathname = usePathname();

  return (
    <nav className='flex justify-between text-white'>
      <ul className='hidden items-center justify-between gap-10 text-xl font-extrabold md:flex'>
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link
              href={link.path}
              className={clsx(
                'hover:text-primary-dark cursor-pointer',
                pathname === link.path && 'text-primary underline',
              )}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
      <MobileNav />
    </nav>
  );
};

export default Nav;
