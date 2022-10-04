import Head from 'next/head';
import { useState, useEffect } from 'react';
import api from '../../services/api';
import Heading from "../../components/heading";

function Contacts () {
  const [users, setUsers] = useState(null);

  const { fetchUsers } = api();

  useEffect(() => {
    fetchUsers()
      .then((data) => setUsers(data));
  }, []);

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