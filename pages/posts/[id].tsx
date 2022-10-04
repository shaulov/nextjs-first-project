import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring'
import api from '../../services/api';
import PostInfo from '../../components/post-info';
import { PostData } from '../../types/post-data';

type PostProps = {
  post: PostData,
}

interface IParams extends ParsedUrlQuery {
  id: string
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { fetchPosts } = api();
  const data: PostData[] = await fetchPosts();

  const paths = data.map(({ id }) => ({
    params: { id: id.toString() },
  }));

  return {
    paths,
    fallback: false,
  }
};

export const getStaticProps: GetStaticProps = async (context) => {
  console.log(context)
  const { id } = context.params as IParams;
  const { fetchPost } = api();
  const data = await fetchPost(id);

  if (!data) {
    return {
      notFound: true,
    }
  }
  
  return {
    props: { post: data },
  }
};

function Post ({ post }: PostProps) {
  return (
    <div>
      <Head>
        <title>Contact</title>
      </Head>
      <PostInfo post={post} />
    </div>
  );
}

export default Post;