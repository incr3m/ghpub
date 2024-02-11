import { dirname, join } from "path";
import { mergeConfig } from "vite";

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}

const config = {
  async viteFinal(...args) {
    const [config, { configType }] = args;
    // // optimize memory usage
    if (config.build) config.build.sourcemap = false;

    // return the customized config
    return mergeConfig(config, {
      // sync vite.config.ts plugins here
      resolve: {
        alias: {
          // https://github.com/aws-amplify/amplify-ui/issues/268#issuecomment-953375909
          "./runtimeConfig": "./runtimeConfig.browser",
        },
      },
      plugins: [],
    });
  },
  // logLevel: 'debug',
  stories: ["../src/modules/**/stories/**/*.stories.@(js|jsx|ts|tsx)"],

  addons: [
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-jest"),
    getAbsolutePath("@storybook/addon-interactions"),
  ],

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
