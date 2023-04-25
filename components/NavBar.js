import Link from 'next/link';
import React from 'react';

const NavBar = () => {
  return (
    <nav className='sticky px-4 flex items-center justify-between max-w-screen-md mx-auto py-4 md:px-0'>
      <Link href='/' className='text-2xl font-bold'>
        Bloggy
      </Link>
      <Link href='/'>Home</Link>
    </nav>
  );
};

export default NavBar;
