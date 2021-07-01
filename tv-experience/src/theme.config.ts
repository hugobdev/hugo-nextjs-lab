import {createCss} from '@stitches/react';
import {grayDark, greenDark, blackA, whiteA} from '@radix-ui/colors';

export const {styled, css, global, keyframes, getCssString, theme} = createCss({
  theme: {
    colors: {
      ...grayDark,
      ...greenDark,
      ...blackA,
      ...whiteA,
    },
    fonts: {
      sans: 'Inter, -apple-system, system-ui, sans-serif',
    },
    fontSizes: {
      medium: '24px',
      large: '36px',
      'x-large': '48px',
      'xx-large': '72px',
    },
    fontWeights: {
      medium: 500,
      bold: 700,
    },
    space: {
      'x-small': '5px',
      small: '10px',
      medium: '20px',
      large: '30px',
    },
  },
});
