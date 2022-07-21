import Image from 'next/image'
import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import { Router, useRouter } from 'next/router';
import { PostCard } from '../components/PostCard';

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
  const router = useRouter();
  return (
    <div className='flex flex-col items-center md:grid-cols-2 lg:grid-cols-2 p-4 md:p-0 justify-center'>
      {posts.map(({ slug, frontmatter }) => (
        <PostCard slug={slug} content={frontmatter} />
      ))}     
    </div>
  );
}