import Head from 'next/head';
import * as Menubar from '@/components/Menubar';

function Header() {
  return (
    <header>
      <div />
      <Menubar.Root>
        <Menubar.List>
          <Menubar.Item>
            <Menubar.Button href='#'>Most Visited</Menubar.Button>
          </Menubar.Item>
          <Menubar.Item>
            <Menubar.Button href='#'>Biggest</Menubar.Button>
          </Menubar.Item>
          <Menubar.Item>
            <Menubar.Button href='#'>By State</Menubar.Button>
          </Menubar.Item>
          <Menubar.Item>
            <Menubar.Button href='#'>Search</Menubar.Button>
          </Menubar.Item>
          <Menubar.Item>
            <Menubar.Button href='#'>Settings</Menubar.Button>
          </Menubar.Item>
        </Menubar.List>
      </Menubar.Root>
    </header>
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
    </div>
  );
}
