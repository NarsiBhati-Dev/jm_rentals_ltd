'use client';

import { useState, useEffect, useRef } from 'react';
import { SidebarClose, SidebarOpen } from '@/data/icons/sidebar-icons';
import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from 'body-scroll-lock';

import clsx from 'clsx';
import { navLinks } from '@/data/navLinks';
import Link from 'next/link';
import Logo from './logo';
import { usePathname } from 'next/navigation';

const MobileNav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  // Track if the "RENTALS" dropdown is open
  const [isRentalsOpen, setIsRentalsOpen] = useState(false);

  const onToggleNav = () => {
    setIsOpen(status => {
      if (navRef.current) {
        if (status) {
          enableBodyScroll(navRef.current);
        } else {
          // Prevent scrolling
          disableBodyScroll(navRef.current);
        }
      }
      return !status;
    });
  };

  useEffect(() => {
    return clearAllBodyScrollLocks();
  }, []);

  const handleRentalsClick = () => {
    setIsRentalsOpen(prev => !prev);
    if (isRentalsOpen) {
      setIsOpen(false);
    }
  };

  const handleSubrouteClick = () => {
    setIsRentalsOpen(false);
    setIsOpen(false);
  };

  return (
    <>
      {/* Sidebar Toggle Button */}
      <button
        onClick={onToggleNav}
        className='relative z-50 flex items-center justify-center md:hidden'
        aria-label='Toggle Menu'
      >
        <SidebarOpen />
      </button>

      {/* Sidebar */}
      <aside
        className={clsx(
          isOpen ? 'translate-x-0' : 'translate-x-full',
          'fixed inset-0 z-50 flex flex-col bg-black px-2 text-white transition-transform duration-500',
        )}
        ref={navRef}
      >
        <div className='border-jmb-red flex items-center justify-between border-b-4 border-dashed px-4 py-10'>
          <Logo />
          <button onClick={() => setIsOpen(false)} aria-label='Close Menu'>
            <SidebarClose />
          </button>
        </div>

        {/* Nav Items */}
        <nav className='mt-6 flex flex-col gap-4 px-4 text-lg'>
          {navLinks.map(link => (
            <div key={link.title} className='flex flex-col'>
              {/* RENTALS Dropdown */}
              {link.title === 'RENTALS' ? (
                <>
                  <button
                    onClick={handleRentalsClick}
                    className='flex w-full items-center text-3xl font-extrabold'
                  >
                    {link.title}
                    {/* Dropdown Icon */}
                    <span
                      onClick={e => {
                        e.stopPropagation(); // Prevent parent button from triggering
                        setIsRentalsOpen(prev => !prev);
                      }}
                      className='ml-2 flex cursor-pointer items-center justify-center'
                    >
                      <span className={clsx(isRentalsOpen ? 'rotate-180' : '')}>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth={1.5}
                          stroke='currentColor'
                          className='hover:text-primary-dark ml-2 h-5 w-5'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5'
                          />
                        </svg>
                      </span>
                    </span>
                  </button>

                  {/* Show the dropdown */}
                  {isRentalsOpen && (
                    <ul className='mt-2 w-80 space-y-4 rounded-md p-4 tracking-tighter text-white transition-all duration-300'>
                      {link.subroutes &&
                        link.subroutes.map((subroute, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              href={subroute.path}
                              onClick={handleSubrouteClick}
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
                </>
              ) : (
                <Link
                  href={link.path}
                  className='flex items-center justify-start gap-4 text-3xl font-extrabold'
                  onClick={onToggleNav}
                >
                  {link.title}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default MobileNav;
