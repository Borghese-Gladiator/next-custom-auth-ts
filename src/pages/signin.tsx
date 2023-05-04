import SigninPage from "../components/SigninPage";

function Signin() {
  return <SigninPage />
}

export async function getServerSideProps({ req, res }) {
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