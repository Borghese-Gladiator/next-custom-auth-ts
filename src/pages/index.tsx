import Head from 'next/head'

export default function Home() {
  return (
    <>
      <main>
      </main>
    </>
  )
}

export async function getServerSideProps({ req, res }) {
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