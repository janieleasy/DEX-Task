import Head from 'next/head';

type Props = {
  title: string;
  keywords: string;
  description: string;
}

const Meta = ({ title, keywords, description }: Props) => {
  return (
    <Head>
      <meta charSet='utf-8' />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta name="theme-color" content="#ffffff" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}DeFi Scan - Native Decentralized Finance for Bitcoin</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: '',
  keywords: 'DeFi Scan',
  description: 'DeFi Blockchain, enabling decentralized finance with Bitcoin-grade security, strength and immutability.'
};

export default Meta;