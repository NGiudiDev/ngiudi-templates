import React from "react";

import { ThemeProvider } from "../src/components/ThemeProvider/ThemeProvider";
import { Box } from "../src/components/Box/Box";

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Box padding="b-32 t-24 x-24">
          <Story />
        </Box>
      </ThemeProvider>
    ),
  ],

  parameters: {
    backgrounds: {},
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    layout: "fullscreen",
    status: {
      statuses: {
        //? add custom statuses.
      },
    },
  },

  initialGlobals: {
    backgrounds: {
      value: "light"
    }
  }
};

export default preview;