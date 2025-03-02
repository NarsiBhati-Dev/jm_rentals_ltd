import Link from 'next/link';
import React from 'react';

interface CtaButtonProps {
  children: React.ReactNode;
  href: string;
}

const CtaButton = ({ children, href }: CtaButtonProps) => {
  return (
    <Link
      href={href}
      className='bg-primary hover:bg-primary-dark w-full rounded-b-md px-6 py-3 text-xl font-extrabold text-white transition-all'
    >
      {children}
    </Link>
  );
};

export default CtaButton;
