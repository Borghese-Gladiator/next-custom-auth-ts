import HomePage from '../components/HomePage';
// TODO(tim): 5/7/2023 - fix import to be @/utils (typescript thingy not figuring out modules correctly)
import { dbConnect, getCurrentUser } from "@/utils/index";


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