import {styled} from '@/theme.config';

export let Root = styled('section', {
  display: 'grid',
  gap: '$large',
  position: 'relative',
  zIndex: '$1',
});

export let Title = styled('h2', {
  fontWeight: '$bold',
  fontSize: '$x-large',
  padding: '0 $large',
  color: '$gray12',
  margin: 0,
});

export let List = styled('ul', {
  display: 'grid',
  gridAutoFlow: 'column',
  gap: '$large',
  listStyleType: 'none',
  margin: 0,
  width: '100%',
  padding: '0 $large',
  boxSizing: 'border-box',
  overflowX: 'scroll',
});

export let ImageItem = styled('li', {
  width: 380,
  height: 240,
  position: 'relative',
  borderRadius: '$large',
  overflow: 'hidden',
});
