import Head from 'next/head';
import { GetServerSideProps } from 'next'
import ContactInfo from '../../components/contact-info';
import api from '../../services/api';
import { UserData } from '../../types/user-data';

type ContactProps = {
  user: UserData,
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const { fetchUser } = api();
  
  if (typeof id === 'string') {
    const data = id ? await fetchUser(id) : null;

    if (!data) {
      return {
        notFound: true,
      }
    }
    
    return {
      props: { user: data },
    }
  } else {
    return {
      notFound: true,
    }
  }
};

function Contact ({ user }: ContactProps) {
  return (
    <div>
      <Head>
        <title>Contact</title>
      </Head>
      <ContactInfo contact={user} />
    </div>
  );
}

export default Contact;