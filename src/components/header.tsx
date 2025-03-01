import React from 'react';
import Nav from './nav';
import Logo from './logo';

const Header = () => {
  return (
    <header className='fixed inset-x-0 top-0 z-50 bg-black px-6 py-4'>
      <section className='mx-auto flex max-w-7xl flex-col items-center justify-between text-white md:flex-row'>
        <Logo />
        <Nav />
      </section>
    </header>
  );
};

export default Header;
