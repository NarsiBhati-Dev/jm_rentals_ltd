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
  href: string;
  title: string;
  className?: string;
}

const Contacts = ({ kind, href, title, className }: ContactsProps) => {
  const ContactSvg = ContactsIcons[kind];

  if (!ContactSvg) {
    return null;
  }

  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className={`flex items-center gap-6 rounded-lg bg-gradient-to-r from-gray-100 to-gray-200 px-4 py-3 shadow-md transition-all duration-300 hover:from-gray-200 hover:to-gray-300 hover:shadow-xl ${className}`}
    >
      <ContactSvg />
      <span className='decoration-primary truncate text-sm font-bold text-gray-900 underline transition-all duration-300 hover:translate-x-1 md:text-lg'>
        {title}
      </span>
    </a>
  );
};

export default Contacts;
