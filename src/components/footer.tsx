import React from "react";
import Logo from "./logo"; // Ensure it's correctly capitalized
import siteMetadata from "@/data/siteMetadata";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 flex flex-col items-center text-center">
      <Logo />
      <p className="mt-6 text-xs text-gray-300 sm:text-sm flex items-center justify-center">
        Developed with ❤️ by{" "}
        <span className="font-semibold ml-1">{siteMetadata.developer}</span>
      </p>
    </footer>
  );
};

export default Footer;
