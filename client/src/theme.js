import { theme } from "@chakra-ui/core";

// Let's say you want to add custom colors
export default {
  ...theme,
  colors: {
    ...theme.colors,
    brand: {
      900: "white",
      800: "white",
      700: "white",
    },
  },
};
