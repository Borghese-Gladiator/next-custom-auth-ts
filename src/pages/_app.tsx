import Head from 'next/head';
import type { AppContext, AppProps } from 'next/app';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer, toast } from 'react-toastify';

import Layout from '@/components/Layout';
import { getAllUsers } from '@/utils';
import App from 'next/app';

const queryClient = new QueryClient();

console.log('b');

const CustomApp = ({ Component, pageProps, userList }: TProps) => {
	return (
    <div>
      <Head>
        <title>Next Custom Authentication</title>
        <meta name="description" content="Wrote out basic signin/signup and some hella clean frontend code with stuff I've learned over the past year working at Rewst." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToastContainer position={toast.POSITION.TOP_CENTER} />
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </div>
	);
}

CustomApp.getInitialProps = async (context: AppContext) => {
  const ctx: any = await App.getInitialProps(context);
  const userList = await getAllUsers();
  return { ...ctx, userList };
}

export default CustomApp;