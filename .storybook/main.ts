import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-essentials',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  webpackFinal: async (config) => {
    // Add PostCSS loader for Tailwind CSS
    config.module = config.module || {};
    config.module.rules = config.module.rules || [];
    
    // Find the CSS rule and add PostCSS loader
    const cssRule = config.module.rules.find((rule: any) => 
      rule && typeof rule === 'object' && rule.test && rule.test.toString().includes('css')
    );
    
    if (cssRule && typeof cssRule === 'object') {
      const use = Array.isArray(cssRule.use) ? cssRule.use : [cssRule.use];
      cssRule.use = [
        ...use,
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
              ],
            },
          },
        },
      ];
    }
    
    return config;
  },
};

export default config;

