import UserPage from "@/src/features/UserPage";
import { dbConnect, getCurrentUser } from "@/src/utils";

export default function User() {
  return <UserPage />
}

export async function getServerSideProps({ req, res }: any) {
  await dbConnect();

  // Redirect user if already authenticated
  const id = 123;
  const user = await getCurrentUser({ id });
  if (user) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
      props: {},
    };
  }
  return {
    props: {},
  };
}