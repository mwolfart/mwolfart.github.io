export const breakpoints = {
  xs: 350,
  sm: 576,
  md: 768,
  lg: 976,
  xl: 1180,
  "2xl": 1440,
  "3xl": 1680,
};

export const mediaQueries = {
  sm: `(min-width: ${breakpoints.xs}px)`,
  md: `(min-width: ${breakpoints.sm}px)`,
  lg: `(min-width: ${breakpoints.md}px)`,
  xl: `(min-width: ${breakpoints.lg}px)`,
  "2xl": `(min-width: ${breakpoints.xl}px)`,
  "3xl": `(min-width: ${breakpoints["2xl"]}px)`,
};
