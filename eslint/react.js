import prettierConfig from 'eslint-config-prettier/flat';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import { defineConfig } from 'eslint/config';
import reactRules from './rules/react.js';

const mergeRules = (configs) =>
  Object.assign({}, ...configs.map((config) => config?.rules ?? {}));

export default defineConfig([
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],

  {
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
      linkComponents: ['Link'],
    },
    rules: {
      ...reactHooksPlugin.configs.flat.recommended.rules,
      ...mergeRules(reactRules),
    },
  },

  prettierConfig,
]);
