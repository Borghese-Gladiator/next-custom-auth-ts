import Head from 'next/head'

import { dbConnect, getUser } from '@/utils';

export default function Home() {
  return <HomePage />
}

export async function getServerSideProps({ req, res}: any) {
  // Redirect user if unauthenticated
  await dbConnect();
  const user = await getUser(req, res);
  if (!user) {
    return {
      redirect: {
        permanent: false,
        destination: "/signin",
      },
      props: {},
    };
  }
  return {
    props: {
      user,
    },
  };
}