import SignupPage from "@/components/SignupPage";
// TODO(tim): 5/7/2023 - fix import to be @/utils (typescript thingy not figuring out modules correctly)
import { dbConnect, getCurrentUser } from "@/utils/index";


function Signup() {
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