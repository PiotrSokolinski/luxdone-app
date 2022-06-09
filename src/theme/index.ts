import { DefaultTheme } from 'styled-components';

import colors from './colors';
import fonts from './fonts';
import layout from './layout';
import helpers from './helpers';
import { media } from './config';

type ThemeType = DefaultTheme & {
  colors: Record<string, string>;
  fonts: Record<string, any>;
  media: Record<string, string>;
  layout: Record<string, any>;
  helpers: Record<string, (...args: any) => any>;
};
const theme: ThemeType = { colors, fonts, media, layout, helpers };

export type { ThemeType };
export default theme;
