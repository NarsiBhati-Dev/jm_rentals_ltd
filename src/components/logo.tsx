import Link from 'next/link';

const Logo = () => (
  <Link
    href='/'
    className={'flex items-center justify-center text-4xl md:text-5xl'}
    aria-label='J&M Rentals'
  >
    <span className='-skew-x-10 font-extralight tracking-wide italic'>J&M</span>
    <span className='ml-0.5 rounded-3xl bg-amber-800 px-2 py-0.5 text-lg font-extrabold'>
      Rentals
    </span>
  </Link>
);

export default Logo;
