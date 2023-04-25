import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className='sticky px-4 flex items-center justify-between max-w-screen-md mx-auto py-4 md:px-0 '>
      <Link href='/' className='text-2xl font-bold'>
        Bloggy
      </Link>
      <Link className='hover:text-cyan-700' href='/'>
        Home
      </Link>
    </nav>
  );
};

export default NavBar;
