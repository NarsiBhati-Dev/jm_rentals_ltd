import clsx from 'clsx';
import React from 'react';

interface MainContainerProps {
  children: React.ReactNode;
  className?: string;
}

const MainContainer = ({ children, className }: MainContainerProps) => {
  return (
    <main
      className={clsx(
        'mt-18 flex items-center justify-center bg-black py-24 text-6xl font-bold text-white',
        className,
      )}
    >
      {children}
    </main>
  );
};

export default MainContainer;
