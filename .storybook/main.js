/** @type {import('@storybook/react-webpack5').StorybookConfig} */
const config = {
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-essentials',
  ],
  // Set base path for GitHub Pages deployment
  // If STORYBOOK_BASE_PATH environment variable is set, use it; otherwise use empty string (root)
  base: process.env.STORYBOOK_BASE_PATH || '',
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
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: async (config) => {
    // Ensure TypeScript files are processed with babel-loader
    config.module = config.module || {};
    config.module.rules = config.module.rules || [];
    
    // Add explicit babel-loader rule for TypeScript files BEFORE other rules
    // This ensures TS files are transpiled before Storybook's CSF plugin processes them
    config.module.rules.unshift({
      test: /\.(ts|tsx)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            presets: [
              ['@babel/preset-env', { targets: { node: 'current' } }],
              ['@babel/preset-react', { runtime: 'automatic' }],
              '@babel/preset-typescript',
            ],
          },
        },
      ],
    });
    
    // Function to recursively find and update rules
    const updateRules = (rules) => {
      if (!Array.isArray(rules)) return;
      
      rules.forEach((rule) => {
        if (!rule || typeof rule !== 'object') return;
        
        // Handle oneOf rules
        if (rule.oneOf && Array.isArray(rule.oneOf)) {
          updateRules(rule.oneOf);
        }
        
        // Skip if no test
        if (!rule.test) return;
        
        const testStr = rule.test.toString();
        const useArray = Array.isArray(rule.use) ? rule.use : rule.use ? [rule.use] : [];
        
        // Check if this rule uses babel-loader
        const hasBabelLoader = useArray.some((loader) => {
          if (typeof loader === 'string') return loader.includes('babel-loader');
          if (typeof loader === 'object' && loader.loader) {
            return loader.loader.includes('babel-loader');
          }
          return false;
        });
        
        // If it's a JS rule with babel-loader, extend to TypeScript
        if (hasBabelLoader && (testStr.includes('jsx?') || testStr.includes('\\.js')) && 
            !testStr.includes('tsx?') && !testStr.includes('\\.ts')) {
          if (rule.test instanceof RegExp) {
            rule.test = /\.(mjs|jsx?|tsx?)$/;
          }
        }
      });
    };
    
    // Update all rules recursively
    updateRules(config.module.rules);
    
    // Ensure PostCSS is configured correctly for Tailwind CSS
    // PostCSS should come AFTER css-loader but BEFORE style-loader
    const findAndUpdateCssRule = (rules) => {
      if (!Array.isArray(rules)) return;
      
      rules.forEach((rule) => {
        if (!rule || typeof rule !== 'object') return;
        
        if (rule.oneOf && Array.isArray(rule.oneOf)) {
          findAndUpdateCssRule(rule.oneOf);
        }
        
        if (!rule.test) return;
        
        const testStr = rule.test.toString();
        if (testStr.includes('css') && !testStr.includes('module')) {
          const useArray = Array.isArray(rule.use) ? rule.use : rule.use ? [rule.use] : [];
          
          // Check if PostCSS already exists
          const hasPostCSS = useArray.some((loader) => {
            if (typeof loader === 'string') return loader.includes('postcss');
            if (typeof loader === 'object' && loader.loader) {
              return loader.loader.includes('postcss');
            }
            return false;
          });
          
          // Find css-loader index
          const cssLoaderIndex = useArray.findIndex((loader) => {
            if (typeof loader === 'string') return loader.includes('css-loader');
            if (typeof loader === 'object' && loader.loader) {
              return loader.loader.includes('css-loader');
            }
            return false;
          });
          
          // Find style-loader index
          const styleLoaderIndex = useArray.findIndex((loader) => {
            if (typeof loader === 'string') return loader.includes('style-loader');
            if (typeof loader === 'object' && loader.loader) {
              return loader.loader.includes('style-loader');
            }
            return false;
          });
          
          if (!hasPostCSS && cssLoaderIndex !== -1) {
            const postcssLoader = {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [
                    require('@tailwindcss/postcss'),
                    require('autoprefixer'),
                  ],
                },
              },
            };
            
            // Insert PostCSS after css-loader but before style-loader
            if (styleLoaderIndex !== -1 && styleLoaderIndex > cssLoaderIndex) {
              useArray.splice(styleLoaderIndex, 0, postcssLoader);
            } else {
              // Insert after css-loader
              useArray.splice(cssLoaderIndex + 1, 0, postcssLoader);
            }
            
            rule.use = useArray;
          }
        }
      });
    };
    
    findAndUpdateCssRule(config.module.rules);
    
    return config;
  },
};

module.exports = config;

