// theme.ts (tsx file with usage of StyleFunctions, see 4.)
import { extendTheme } from "@chakra-ui/react";
import { StyleFunctionProps } from "@chakra-ui/styled-system";
import { Progress } from "@chakra-ui/react";

const customTheme = extendTheme({
  components: {
    Progress: {
      baseStyle: {
        filledTrack: {
          bg: "#de816eda",
        },
      },
    },
  },
  colors: {
    primary: {
      100: "#de806e",
    },
  },
});

export default customTheme;
