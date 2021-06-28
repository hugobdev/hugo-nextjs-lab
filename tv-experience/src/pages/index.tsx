import Head from 'next/head';
import {styled} from '@/theme.config';

let Menubar = styled('nav', {});

let MenubarList = styled('ul', {
  background: 'hsla(222, 36%, 11%, 0.7)',
  borderRadius: 100,
  backdropFilter: 'blur(15px);',
  display: 'grid',
  gridAutoFlow: 'column',
  gridAutoColumns: 'max-content',
  gap: 20,
  padding: 5,
  width: 'max-content',

  listStyleType: 'none',
  margin: 0,
});

let MenubarItem = styled('li', {});

let MenubarButton = styled('a', {
  display: 'inline-block',
  padding: '5px 30px',
  background: 'hsla(219, 9%, 65%, 1)',
  color: 'white',
  borderRadius: 100,
});

function Header() {
  return (
    <header>
      <div />
      <Menubar>
        <MenubarList>
          <MenubarItem>
            <MenubarButton href='#'>Most Visited</MenubarButton>
          </MenubarItem>
          <MenubarItem>
            <MenubarButton href='#'>Biggest</MenubarButton>
          </MenubarItem>
          <MenubarItem>
            <MenubarButton href='#'>By State</MenubarButton>
          </MenubarItem>
          <MenubarItem>
            <MenubarButton href='#'>Search</MenubarButton>
          </MenubarItem>
          <MenubarItem>
            <MenubarButton href='#'>Settings</MenubarButton>
          </MenubarItem>
        </MenubarList>
      </Menubar>
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
