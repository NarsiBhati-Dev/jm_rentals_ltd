import Link from "next/link";

const Logo = () => (
  <Link
    href="/"
    className={"text-4xl md:text-5xl flex justify-center items-center"}
    aria-label="J&M Rentals"
  >
    <span className="italic font-extralight tracking-wide -skew-x-10">J&M</span>
    <span className="px-3 py-0.5 ml-0.5 bg-amber-800 text-3xl rounded-3xl font-extrabold">
      Rentals
    </span>
  </Link>
);

export default Logo;
