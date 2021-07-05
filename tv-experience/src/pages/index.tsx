import Head from 'next/head';
import Header from '@/components/Header';
import HeroImage from '@/components/HeroImage';
import Image from 'next/image';
import * as NormalList from '@/components/NormalList';
import {styled} from '@/theme.config';

let ContentSafeArea = styled('main', {
  position: 'relative',
  zIndex: '$1',
  marginTop: '50vh',
});

function HeroImageList() {
  let images = [
    {
      id: '1',
      url: '/images/grand-canyon/alan-carrillo-OJFI4qUmKWU-unsplash.jpg',
    },
    {
      id: '2',
      url: '/images/grand-canyon/ameer-basheer-gV6taBJuBTk-unsplash.jpg',
    },
    {
      id: '3',
      url: '/images/grand-canyon/ameer-basheer-Xrx3WWyrwes-unsplash.jpg',
    },
    {id: '4', url: '/images/grand-canyon/cara-fuller-9_x5jYJw2VQ-unsplash.jpg'},
    {id: '5', url: '/images/grand-canyon/gert-boers-qQC8tyG_JVA-unsplash.jpg'},
    {
      id: '6',
      url: '/images/grand-canyon/mike-swigunski-ijaivmvmSKQ-unsplash.jpg',
    },
    {
      id: '7',
      url: '/images/grand-canyon/mike-swigunski-JG35vcXkeMU-unsplash.jpg',
    },
  ];

  return (
    <NormalList.Root>
      <NormalList.Title>Great Smoky Mountains</NormalList.Title>
      <NormalList.List>
        {images.map((image) => (
          <NormalList.Item key={image.id}>
            <Image src={image.url} layout='fill' objectFit='cover' />
          </NormalList.Item>
        ))}
      </NormalList.List>
    </NormalList.Root>
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
      <Header />
      <HeroImage backgroundUrl='/images/grand-canyon/gert-boers-qQC8tyG_JVA-unsplash.jpg' />
      <ContentSafeArea>
        <HeroImageList />
      </ContentSafeArea>
    </div>
  );
}
