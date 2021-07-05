import {styled} from '@/theme.config';

export let Root = styled('li', {
  display: 'grid',
  gap: '$medium',
});

export let ImageWrapper = styled('div', {
  width: 380,
  height: 240,
  position: 'relative',
  borderRadius: '$large',
  overflow: 'hidden',
});

export let Title = styled('div', {
  color: '$gray12',
  fontSize: '$medium',
  fontWeight: '$medium',
  textAlign: 'center',
});
