import Head from 'next/head';
import Header from '@/components/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Parks - A US National Parks TV Experience</title>
        <meta
          name='description'
          content='A TV-like experience built with Next.js highlighting US National Parks'
        />
      </Head>
      <Header />
    </div>
  );
}
