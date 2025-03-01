import React from "react";
import Nav from "./nav";
import Logo from "./logo";

const Header = () => {
  return (
    <header className="py-4 px-6 fixed z-50 inset-x-0 top-0">
      <section className="max-w-7xl mx-auto flex justify-between items-center text-white md:flex-row flex-col">
        <Logo />
        <Nav />
      </section>
    </header>
  );
};

export default Header;
