import '@/styles/globals.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app'
import { toast } from 'react-toastify';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={queryClient}>
      <ToastContainer position={toast.POSITION.TOP_CENTER} />
			<Component {...pageProps} />
		</QueryClientProvider>
	);
}
