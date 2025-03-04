'use client';

import { navLinks } from '@/data/navLinks';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React, { useState } from 'react';
import clsx from 'clsx';
import MobileNav from './mobile-nav';

const Nav = () => {
  // Get current route
  const pathname = usePathname();

  const [isRentalsOpen, setIsRentalsOpen] = useState(false);

  const toggleRentalsDropdown = () => setIsRentalsOpen(prev => !prev);

  return (
    <nav className='flex justify-between text-white'>
      <ul className='hidden items-center justify-between gap-10 text-xl font-extrabold md:flex'>
        {navLinks.map((link, index) => (
          <li key={index} className='relative flex items-center'>
            <Link
              href={link.path}
              className={clsx(
                'hover:text-primary-dark cursor-pointer',
                pathname === link.path && 'text-primary underline',
              )}
            >
              {link.title}
            </Link>

            {link.title === 'RENTALS' && (
              <button
                onClick={toggleRentalsDropdown}
                className='ml-2 flex items-center justify-center focus:outline-none'
              >
                <span className={clsx(isRentalsOpen ? 'rotate-180' : '')}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='hover:text-primary-dark h-5 w-5'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5'
                    />
                  </svg>
                </span>
              </button>
            )}

            {link.title === 'RENTALS' && isRentalsOpen && pathname && (
              <ul className='bg-background absolute top-full left-0 mt-4 w-80 -translate-x-32 space-y-4 rounded-md p-4 tracking-tighter text-white'>
                {link.subroutes &&
                  link.subroutes.map((subroute, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        href={subroute.path}
                        onClick={() => setIsRentalsOpen(false)}
                        className={clsx(
                          'hover:text-primary-dark cursor-pointer',
                          pathname === subroute.path &&
                            'text-primary underline',
                        )}
                      >
                        {subroute.title}
                      </Link>
                    </li>
                  ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <MobileNav />
    </nav>
  );
};

export default Nav;
