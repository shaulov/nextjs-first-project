import Head from 'next/head';
import Heading from "../../components/heading";

function Contacts () {
  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <Heading tag={'h1'} text={'Contacts list:'} />
    </>
  );
}

export default Contacts;