import PostCard from './PostCard';

const Posts = ({ posts }) => {
  // console.log(posts);
  return (
    <div className='mt-12'>
      <h2 className='text-2xl font-bold mb-4'>All Posts</h2>
      <ul className='flex flex-col gap-2'>
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
};

export default Posts;
