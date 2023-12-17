// @ts-check
const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/react',
    'prettier',
    require.resolve('./rules/react.cjs'),
  ],
  settings: {
    react: {
      version: 'detect',
    },
    linkComponents: [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      'Link',
    ],
  },
});
