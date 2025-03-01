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
        'flex items-center justify-center bg-black py-20 text-6xl font-bold text-white',
        className,
      )}
    >
      {children}
    </main>
  );
};

export default MainContainer;
