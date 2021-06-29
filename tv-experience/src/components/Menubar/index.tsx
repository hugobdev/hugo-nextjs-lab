import {styled} from '@/theme.config';

export let Root = styled('nav', {});

export let List = styled('ul', {
  background: '$coolgray900-7',
  borderRadius: 100,
  backdropFilter: 'blur(15px)',
  display: 'grid',
  gridAutoFlow: 'column',
  gridAutoColumns: 'max-content',
  gap: '$medium',
  padding: '$x-small',
  width: 'max-content',

  listStyleType: 'none',
  margin: 0,
});

export let Item = styled('li', {});

export let Button = styled('a', {
  display: 'inline-block',
  padding: '$x-small $large',
  background: '$coolgray400',
  color: '$coolgray50',
  borderRadius: 100,
  fontSize: '$medium',
  fontWeight: '$bold',
  textDecoration: 'none',
});
