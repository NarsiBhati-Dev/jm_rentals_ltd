import clsx from 'clsx';
import React from 'react';

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
}

const SectionContainer = ({ children, className }: SectionContainerProps) => {
  return (
    <main
      className={clsx(
        'mx-auto my-auto mt-20 max-w-7xl md:max-h-[90vh]',
        className,
      )}
    >
      {children}
    </main>
  );
};

export default SectionContainer;
