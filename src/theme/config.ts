import { Viewport } from '../types';

export const desktop: Viewport = {
  width: 1280,
  height: 670,
};

export const mobile = {
  width: 320,
  height: 600,
};

export const mobileBreakpoint = {
  width: 768,
};

export const fontSizeMultiplier = 10;

export const media = {
  mobile: `@media(max-width: ${mobileBreakpoint.width - 1}px)`,
  desktop: `@media(min-width: ${mobileBreakpoint.width}px)`,
};
