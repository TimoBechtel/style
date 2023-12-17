// @ts-check
const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  rules: {
    // Disallow non-import statements appearing before import statements.
    'import/first': 'error',
    // Require a newline after the last import/require.
    'import/newline-after-import': 'warn',
    //  Disallow a module from importing itself.
    'import/no-self-import': 'error',
    // Ensures that there are no useless path segments.
    'import/no-useless-path-segments': ['error'],
    // Enforce a module import order convention.
    'import/order': [
      'warn',
      {
        groups: [
          'builtin', // Node.js built-in modules
          'external', // Packages
          'internal', // Aliased modules
          'parent', // Relative parent
          'sibling', // Relative sibling
          'index', // Relative index
        ],
      },
    ],
    // allow default exports
    'import/no-default-export': 'off',
    /**
     * These are enabled by `import/recommended`, but are better handled by
     * TypeScript and @typescript-eslint.
     */
    'import/default': 'off',
    'import/export': 'off',
    'import/namespace': 'off',
    'import/no-unresolved': 'off',
  },
});
