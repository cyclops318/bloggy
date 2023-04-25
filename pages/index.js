import Page from '@/components/Page';
import Posts from '@/components/Posts';
import Welcome from '@/components/Welcome';
import { GET_ALL_POSTS, graphcms } from '@/graphql/query';

export async function getStaticProps() {
  const { posts } = await graphcms.request(GET_ALL_POSTS);

  return {
    props: { posts },
    revalidate: 30,
  };
}

export default function Home({ posts }) {
  return (
    <Page title='Blogs'>
      <Welcome />
      <Posts posts={posts} />
    </Page>
  );
}
