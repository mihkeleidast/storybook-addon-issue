import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    './inline-addon',
    '@storybook/addon-actions',
    '@storybook/addon-measure',
    '@storybook/addon-outline',
    '@storybook/addon-docs',
    '@storybook/addon-controls',
  ],
  "framework": {
    name: "@storybook/react-vite",
    options: {}
  },
  "features": {
    "storyStoreV7": true
  },
  docs: {
    autodocs: true
  }
};
export default config;