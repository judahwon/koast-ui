import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-docs",
    "@storybook/addon-controls",
    "@storybook/addon-actions",
    "@storybook/addon-viewport",
    "@storybook/addon-a11y",
  ],
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
  "docs": {
    "autodocs": true
  },
  // "viteFinal": async (config) => {
  //   config.base = "/koast-ui/"; // GitHub Pages에서 올바른 base 경로 설정
  //   return config;
  // },
  "typescript": {
    "reactDocgen": "react-docgen-typescript",
    "reactDocgenTypescriptOptions": {
      "compilerOptions": {
        "allowSyntheticDefaultImports": false,
        "esModuleInterop": false,
      },
      "propFilter": (prop) => {
        if (prop.parent) {
          return !prop.parent.fileName.includes('node_modules/@types/react');
        }
        return true;
      },
      "shouldExtractLiteralValuesFromEnum": true,
      "shouldRemoveUndefinedFromOptional": true,
    },
  }
};
export default config;