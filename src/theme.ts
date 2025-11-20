import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        // ---------- PRIMARY ----------
        orange: { value: "hsl(26, 100%, 55%)" },
        darkOrange: { value: "hsl(25, 100%, 40%)" },
        paleOrange: { value: "hsl(25, 100%, 94%)" },

        // ---------- NEUTRAL ----------
        veryDarkBlue: { value: "hsl(220, 13%, 13%)" },
        darkGrayishBlue: { value: "hsl(219, 9%, 45%)" },
        grayishBlue: { value: "hsl(220, 14%, 75%)" },
        lightGrayishBlue: { value: "hsl(223, 64%, 98%)" },
        white: { value: "hsl(0, 0%, 100%)" },
        black: { value: "hsl(0, 0%, 0%)" },
      },

      fonts: {
        body: { value: "'Kumbh Sans', sans-serif" },
        heading: { value: "'Kumbh Sans', sans-serif" },
      },

      fontSizes: {
        p: { value: "16px" },
      },
    },

    semanticTokens: {
      colors: {
        bg: {
          value: {
            base: "{colors.lightGrayishBlue}",
            _dark: "{colors.veryDarkBlue}",
          },
        },
        text: {
          value: {
            base: "{colors.veryDarkBlue}",
            _dark: "{colors.lightGrayishBlue}",
          },
        },
        subtext: {
          value: {
            base: "{colors.darkGrayishBlue}",
            _dark: "{colors.grayishBlue}",
          },
        },
        primary: {
          value: {
            base: "{colors.orange}",
            _dark: "{colors.darkOrange}",
          },
        },
        surface: {
          value: {
            base: "{colors.lightGrayishBlue}",
            _dark: "{colors.darkGrayishBlue}",
          },
        },
        border: {
          value: {
            base: "{colors.grayishBlue}",
            _dark: "{colors.lightGrayishBlue}",
          },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
