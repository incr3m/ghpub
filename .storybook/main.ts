import { dirname, join } from "path";
import { mergeConfig } from "vite";
import { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  async viteFinal(...args) {
    const [config, { configType }] = args;
    // // optimize memory usage
    if (config.build) config.build.sourcemap = false;

    // return the customized config
    return mergeConfig(config, {
      // sync vite.config.ts plugins here
      plugins: [],
    });
  },
  // logLevel: 'debug',
  stories: ["../src/modules/**/stories/**/*.stories.@(js|jsx|ts|tsx)"],

  addons: [],

  typescript: {
    check: false,
    reactDocgen: false,
  },
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  core: {},
  features: {
    storyStoreV7: true,
  },
  docs: {
    autodocs: true,
  },
};

export default config;
