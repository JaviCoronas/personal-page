import Image from 'next/image'
import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';

export async function getStaticProps() {
  const files = fs.readdirSync('posts');

  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
  return (
    <div className='flex flex-col items-center md:grid-cols-1 lg:grid-cols-1 p-4 md:p-0 justify-center'>
      {posts.map(({ slug, frontmatter }) => (
        <div
          key={slug}
          className='flex flex-col w-screen items-center m-2 justify-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'
        >
          <Link href={`/post/${slug}`}>
              <Image
              className='object-cover h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg'
                width={650}
                height={340}
                alt={frontmatter.title}
                src={`/${frontmatter.socialImage}`}
              />
          </Link>

          <div className="flex flex-col p-4 w-96 h-48">
            <h5 class="mb-2 w-96 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{frontmatter.title}sdfsdfsdfsdfsdfds</h5>
            <p class="mb-3 w- 96 font-normal text-gray-700 dark:text-gray-400">{frontmatter.metaTitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}