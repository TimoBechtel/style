import { defineConfig } from 'eslint/config';

export default defineConfig({
  rules: {
    'import-x/first': 'error',
    'import-x/newline-after-import': 'warn',
    'import-x/no-self-import': 'error',
    'import-x/no-useless-path-segments': ['error'],
    'import-x/order': [
      'warn',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
      },
    ],
    'import-x/no-default-export': 'off',
    'import-x/default': 'off',
    'import-x/export': 'off',
    'import-x/namespace': 'off',
    'import-x/no-unresolved': 'off',
  },
});
