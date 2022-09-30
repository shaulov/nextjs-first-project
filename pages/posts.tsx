import Head from 'next/head';
import Heading from "../components/heading";

function Posts () {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Heading tag={'h1'} text={'Posts list:'} />
    </>
  );
}

export default Posts;