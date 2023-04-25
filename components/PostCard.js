import Image from 'next/image';
import Link from 'next/link';

const PostCard = ({ post }) => {
  return (
    <Link href={`/posts/${post.slug}`}>
      <li className='rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all ease-in-out'>
        <Image
          className='object-cover h-48 w-full rounded-md'
          src={post.coverPhoto.url}
          alt='cover image'
          width={760}
          height={360}
        />
        <div className='flex items-center justify-between py-4'>
          <div className='flex items-center justify-start gap-3'>
            <Image
              className='h-8 w-8 rounded-full'
              src={post.author.avatar.url}
              alt='author avatar'
              width={60}
              height={60}
            />
            <span className='text-sm text-zinc-600'>{post.author.name}</span>
          </div>
          <p className='text-sm text-zinc-400'>{post.datePublished}</p>
        </div>

        <h3 className='text-xl font-bold'>{post.title}</h3>

        <p className='text-base mt-4 line-clamp-3'>{post.description}</p>
      </li>
    </Link>
  );
};

export default PostCard;
