import {styled} from '@/theme.config';

let Root = styled('div', {
  position: 'fixed',
  zIndex: '$min',
  top: 0,
  left: 0,
  right: 0,
  bottom: '15%',
  background: '$gray1',
  backgroundSize: 'cover',
});

let BottomOverlay = styled('div', {
  position: 'absolute',
  top: '60%',
  bottom: 0,
  left: 0,
  right: 0,
  background:
    'linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.125) 6.4%, rgba(0, 0, 0, 0.24) 11.3%, rgba(0, 0, 0, 0.34) 15.1%, rgba(0, 0, 0, 0.435) 18.2%, rgba(0, 0, 0, 0.518) 20.8%, rgba(0, 0, 0, 0.596) 23.4%, rgba(0, 0, 0, 0.663) 26.2%, rgba(0, 0, 0, 0.725) 29.7%, rgba(0, 0, 0, 0.78) 34.1%, rgba(0, 0, 0, 0.85) 39.9%, rgba(0, 0, 0, 0.89) 47.2%, rgba(0, 0, 0, 0.99) 56.6%, rgb(0, 0, 0) 68.3%, rgb(0, 0, 0) 82.6%, rgb(0, 0, 0) 100%)',
});

type HeroImageProps = {
  backgroundUrl: string;
};

export default function HeroImage({backgroundUrl}: HeroImageProps) {
  return (
    <Root css={{backgroundImage: `url(${backgroundUrl})`}}>
      <BottomOverlay />
    </Root>
  );
}
