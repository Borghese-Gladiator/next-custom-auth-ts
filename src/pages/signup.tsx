import SignupPage from "@/components/SignupPage";
import { dbConnect, getUser } from "@/utils";

function Signup() {
  return <SignupPage />
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