import SignupPage from "@/src/features/SignupPage";
import { dbConnect, getCurrentUser } from "@/utils";


export default function Signup() {
  return <SignupPage />
}

export async function getServerSideProps({ req, res}: any) {
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