import Link from 'next/link';

const Logo = () => (
  <Link
    href='/'
    className='flex items-baseline justify-center text-4xl font-light md:text-5xl'
    aria-label='J&M Rentals - Home'
  >
    <span className='-skew-x-10 tracking-wide italic'>J&M</span>
    <span className='relative -ml-1 -translate-y-1.5 rounded-2xl bg-amber-800 px-2 py-0.5 text-xs font-extrabold md:-ml-2 md:-translate-y-2 md:px-3 md:text-sm'>
      Rentals
    </span>
  </Link>
);

export default Logo;
