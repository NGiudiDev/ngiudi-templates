import React from "react";

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
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