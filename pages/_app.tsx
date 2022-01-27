import Layout from '../components/Layout';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import DexStateProvider from '../context';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <DexStateProvider>
        <Component {...pageProps} />
      </DexStateProvider>
    </Layout>
  );
}

export default MyApp;
