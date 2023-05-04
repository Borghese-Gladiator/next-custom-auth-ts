import SigninPage from "@/components/SigninPage";
import { dbConnect, getUser } from "@/utils";

export default function Signin() {
  return <SigninPage />
}

export async function getServerSideProps({ req, res}: any) {
  await dbConnect();

  // Redirect user if already authenticated
  const user = await getUser(req, res);
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