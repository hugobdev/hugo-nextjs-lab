import {styled} from '@/theme.config';
import Image from 'next/image';

import * as Menubar from '@/components/Menubar';

let Root = styled('header', {
  display: 'grid',
  width: '100%',
  gridTemplateColumns: '1fr 3fr 1fr',
  alignItems: 'center',
  padding: '$large',
});

export default function Header() {
  return (
    <Root>
      <Image src='/logo.svg' width={188} height={58} layout='fixed' />
      <Menubar.Root css={{justifySelf: 'center'}}>
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
    </Root>
  );
}
