import React from 'react';
import { Location, Email, Phone } from '@/data/icons/contact-us-icons';

const ContactsIcons = {
  location: Location,
  email: Email,
  phone: Phone,
};

export type Kind = keyof typeof ContactsIcons;

interface ContactsProps {
  kind: Kind;
  children: React.ReactNode;
  className?: string;
  href: string;
}

const Contacts = ({ kind, children, className, href = '/' }: ContactsProps) => {
  const ContactSvg = ContactsIcons[kind];

  if (!ContactSvg) {
    return null;
  }

  return (
    <div
      className={`flex items-center justify-between gap-4 text-lg text-white md:text-black ${className}`}
    >
      <ContactSvg />
      <a href={href} className='text-primary underline hover:text-amber-800'>
        {children}
      </a>
    </div>
  );
};

export default Contacts;
