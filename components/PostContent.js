import { marked } from 'marked';

export const PostContent = ({ content }) => {
  // console.log(marked(content));
  return (
    <article
      className='flex flex-col gap-8 mt-4 [&>p>a]:text-cyan-700 [&>h2]:text-2xl [&>h2]:font-bold [&>h3]:text-xl [&>h3]:font-bold [&>ul]:flex [&>ul]:flex-col [&>ul]:gap-1 [&>ul]:list-disc [&>ul]:ml-4 [&>ul>li>a]:text-cyan-700 [&>ol]:flex [&>ol]:flex-col [&>ol]:gap-1 [&>ol]:list-decimal [&>ol]:ml-4'
      dangerouslySetInnerHTML={{ __html: marked(content) }}
    />
  );
};
