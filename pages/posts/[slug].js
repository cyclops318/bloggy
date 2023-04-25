import Page from '@/components/Page';
import { PostContent } from '@/components/PostContent';
import { GET_SINGLE_POST, GET_SLUG_LIST, graphcms } from '@/graphql/query';
import Image from 'next/image';

export const getStaticPaths = async () => {
  const { posts } = await graphcms.request(GET_SLUG_LIST);
  return {
    paths: posts.map(post => ({
      params: { slug: post.slug },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const { posts } = await graphcms.request(GET_SINGLE_POST, { slug });
  const [post] = posts;
  return {
    props: { post },
    revalidate: 10,
  };
};

const BlogPage = ({ post }) => {
  return (
    <Page title={post.title}>
      <Image
        className='object-cover h-52 w-full rounded-md'
        src={post.coverPhoto.url}
        alt='cover image'
        width={760}
        height={360}
      />

      <h1 className='text-4xl font-bold py-6'>{post.title}</h1>
      <div className='flex items-center justify-between py-6'>
        <div className='flex items-center justify-start gap-4'>
          <Image
            className='h-8 w-8 rounded-full'
            src={post.author.avatar.url}
            alt='author avatar'
            width={60}
            height={60}
          />
          <span className='text-base text-zinc-600'>{post.author.name}</span>
        </div>
        <span className='text-sm text-zinc-400'>{post.datePublished}</span>
      </div>
      <PostContent content={post.content.markdown} />
    </Page>
  );
};

export default BlogPage;
