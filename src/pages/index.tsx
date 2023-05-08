import HomePage from '../components/HomePage';

import { dbConnect, getCurrentUser } from "@/utils";


export default function Home() {
  return <HomePage />
}

export async function getServerSideProps({ req, res}: any) {
  // Redirect user if unauthenticated
  await dbConnect();
  const id = 123;
  const user = await getCurrentUser({ id });
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