import Head from 'next/head';
import Header from '@/components/Header';
import {styled} from '@/theme.config';

let BackgroundImageRoot = styled('div', {
  position: 'fixed',
  zIndex: '$min',
  top: 0,
  left: 0,
  right: 0,
  bottom: '25%',
  background: '$gray1',
  backgroundSize: 'cover',
});

type BackgroundImageProps = {
  backgroundImage: string;
};

function BackgroundImage({backgroundImage}: BackgroundImageProps) {
  return (
    <BackgroundImageRoot css={{backgroundImage: `url(${backgroundImage})`}} />
  );
}

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
      <BackgroundImage backgroundImage='/images/grand-canyon/gert-boers-qQC8tyG_JVA-unsplash.jpg' />
      <Header />
    </div>
  );
}
