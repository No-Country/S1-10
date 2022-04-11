import {
  extendTheme,
  theme as base,
  withDefaultColorScheme,
} from "@chakra-ui/react";

/* const fonts = {
  heading: `Barlow, ${base.fonts?.heading}`,
  body: `Barlow, sans-serif,MuseoModerno, cursive,${base.fonts?.body}`,
};

const colors = {
  brand: {
    50: "#f5fee5",
    100: "#e1fbb2",
    200: "#cdf781",
    300: "#b8ee56",
    400: "#a2e032",
    500: "#8ac919",
    600: "#71ab09",
    700: "#578602",
    800: "#3c5e00",
    900: "#203300",
  },
};

const overrides = {
  //...chakraTheme,
  fonts,
  colors,
}; */

const customTheme = extendTheme(
  {
    colors: {
      brand: {
        50: "#f5fee5",
        100: "#e1fbb2",
        200: "#cdf781",
        300: "#b8ee56",
        400: "#a2e032",
        500: "#8ac919",
        600: "#71ab09",
        700: "#578602",
        800: "#3c5e00",
        900: "#203300",
      },
    },
    fonts: {
      heading: `Barlow, ${base.fonts?.heading}`,
      body: `Barlow, sans-serif,MuseoModerno, cursive,${base.fonts?.body}`,
    },
  },
  withDefaultColorScheme({
    colorScheme: "brand",
    components: ["Checkbox"],
  })
);

export default customTheme;
