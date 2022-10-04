import Head from 'next/head';
import Link from 'next/link';
import api from '../../services/api';
import Heading from "../../components/heading";
import { PostData } from '../../types/post-data';

type ContactsProps = {
  posts: PostData[];
}

export const getStaticProps = async () => {
  const { fetchPosts } = api();
  const data = await fetchPosts();

  if (!data) {
    return {
      notFound: true,
    }
  }
  
  return {
    props: { posts: data },
  }
};

function Posts ({ posts }: ContactsProps) {
  return (
    <div>
      <Head>
        <title>Posts</title>
      </Head>
      <Heading tag={'h1'} text={'Contacts list:'} />
      <ul>
        {posts && posts.map(({ id, title }) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;