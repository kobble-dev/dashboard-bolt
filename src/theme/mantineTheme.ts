import { createTheme } from '@mantine/core';

export const theme = createTheme({
  primaryColor: 'blue',
  primaryShade: 6,
  colors: {
    // Custom color palettes for status badges
    green: [
      '#E7F5EF',
      '#C2E5D3',
      '#9DD5B7',
      '#78C59B',
      '#53B57F',
      '#2EA563',
      '#00875A', // Primary shade
      '#006644',
      '#00442E',
      '#002218'
    ],
    blue: [
      '#E6F6FF',
      '#BAE3FF',
      '#7CC1FF',
      '#3E9BFF',
      '#0079FF',
      '#0066FF',
      '#0052CC', // Primary shade
      '#0047B3',
      '#003D99',
      '#003380'
    ],
    red: [
      '#FFE6E6',
      '#FFB3B3',
      '#FF8080',
      '#FF4D4D',
      '#FF1A1A',
      '#E60000',
      '#CC0000', // Primary shade
      '#B30000',
      '#990000',
      '#800000'
    ],
    gray: [
      '#F5F5F5',
      '#E5E5E5',
      '#D4D4D4',
      '#A3A3A3',
      '#737373',
      '#525252',
      '#404040', // Primary shade
      '#262626',
      '#171717',
      '#0A0A0A'
    ],
    dark: [
      '#C1C2C5',
      '#A6A7AB',
      '#909296',
      '#5C5F66',
      '#373A40',
      '#2C2E33',
      '#25262B', // Primary shade
      '#1A1B1E',
      '#141517',
      '#101113'
    ],
    violet: [
      '#F5E6FF',
      '#E5B3FF',
      '#D580FF',
      '#C64DFF',
      '#B61AFF',
      '#A600E6',
      '#9500CC', // Primary shade
      '#8400B3',
      '#730099',
      '#610080'
    ]
  }
});