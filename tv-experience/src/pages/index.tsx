import Head from 'next/head';
import Header from '@/components/Header';
import HeroImage from '@/components/HeroImage';
import {styled} from '@/theme.config';

let ContentSafeArea = styled('main', {
  position: 'relative',
  zIndex: '$1',
  marginTop: '40vh',
});

let Root = styled('section', {
  display: 'grid',
  gap: '$large',
  position: 'relative',
  padding: '$large',
  zIndex: '$1',
});

let Title = styled('h2', {
  fontWeight: '$bold',
  fontSize: '$x-large',
  color: '$gray12',
  margin: 0,
});

let List = styled('ul', {
  display: 'grid',
});
let Item = styled('li', {});

function HeroImageList() {
  // let images = [{url: ''}];
  return (
    <Root>
      <Title>Great Smoky Mountains</Title>
      <List>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </List>
    </Root>
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
