import Head from 'next/head';
import { useState, useEffect } from 'react';
import api from '../../services/api';
import Heading from "../../components/heading";
import { UserData } from '../../types/user-data';

function Contacts () {
  const [users, setUsers] = useState<UserData[] | null>(null);

  const { fetchUsers } = api();

  useEffect(() => {
    fetchUsers()
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <Head>
        <title>Contacts</title>
      </Head>
      <Heading tag={'h1'} text={'Contacts list:'} />
      <ul>
        {users && users.map(({ id, name, email }) => (
          <li key={id}><strong>{name}</strong>: {email}</li>
        ))}
      </ul>
    </div>
  );
}

export default Contacts;