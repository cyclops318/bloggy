import Head from 'next/head';
import NavBar from './NavBar';
import Footer from './Footer';

const Page = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title + ' - Bloggy'}</title>
      </Head>
      <header>
        <NavBar />
      </header>
      <main className='px-4 mx-auto max-w-screen-md mt-12 md:p-0'>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Page;
