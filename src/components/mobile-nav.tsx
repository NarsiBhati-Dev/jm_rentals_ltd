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

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

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

  return (
    <>
      {/* Sidebar closed */}
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className='relative z-50 flex items-center justify-center md:hidden'
        aria-label='Toggle Menu'
      >
        <SidebarOpen />
      </button>

      {/* Sidebar open */}
      <aside
        className={clsx(
          isOpen ? 'translate-x-0' : 'translate-x-full',
          'fixed inset-0 z-50 flex flex-col bg-black px-2 text-white transition-transform duration-500',
        )}
        ref={navRef}
      >
        <div className='border-jmb-red flex items-center justify-between border-b-4 px-4 py-10 pb-10'>
          <Logo />
          <button onClick={() => setIsOpen(false)} aria-label='Close Menu'>
            <SidebarClose />
          </button>
        </div>

        {/* Nav Items */}
        <nav className='mt-6 flex flex-col gap-4 px-4 text-lg'>
          {navLinks.map(link => (
            <Link
              key={link.title}
              href={link.path}
              className={
                'flex items-center justify-start gap-4 text-3xl font-extrabold'
              }
              onClick={onToggleNav}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default MobileNav;
