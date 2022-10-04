import Head from 'next/head';
import Link from 'next/link';
import api from '../../services/api';
import Heading from "../../components/heading";
import { UserData } from '../../types/user-data';

type ContactsProps = {
  users: UserData[];
}

export const getStaticProps = async () => {
  const { fetchUsers } = api();
  const data = await fetchUsers();

  if (!data) {
    return {
      notFound: true,
    }
  }
  
  return {
    props: { users: data },
  }
};

function Contacts ({ users }: ContactsProps) {
  return (
    <div>
      <Head>
        <title>Contacts</title>
      </Head>
      <Heading tag={'h1'} text={'Contacts list:'} />
      <ul>
        {users && users.map(({ id, name }) => (
          <li key={id}>
            <Link href={`/contacts/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Contacts;