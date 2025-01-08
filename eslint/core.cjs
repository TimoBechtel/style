// @ts-check
const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'prettier',
    'plugin:no-template-curly-in-string-fix/recommended',
    require.resolve('./rules/base.cjs'),
    require.resolve('./rules/import.cjs'),
    require.resolve('./rules/unicorn.cjs'),
  ],
  parser: '@typescript-eslint/parser',
  plugins: [],
  env: {
    es2021: true,
    node: true,
    browser: true,
  },
  // Report unused `eslint-disable` comments.
  reportUnusedDisableDirectives: true,
  // Tell ESLint not to ignore dot-files, which are ignored by default.
  ignorePatterns: ['!.*.js'],
  // Global settings used by all overrides.
  settings: {
    // Use the Node resolver by default.
    'import/resolver': { node: {} },
  },
  // Global parser options.
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    projectService: true,
  },
  overrides: [
    {
      files: ['*.ts?(x)'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-type-checked',
        'plugin:@typescript-eslint/strict',
        'plugin:@typescript-eslint/strict-type-checked',
        'plugin:@typescript-eslint/stylistic',
        'plugin:@typescript-eslint/stylistic-type-checked',
        'plugin:import/typescript',
        'prettier',
        require.resolve('./rules/typescript.cjs'),
      ],
    },
    {
      files: ['*.test.ts?(x)', '*.spec.ts?(x)'],
      rules: {
        // ts-expect-error makes sense for tests
        '@typescript-eslint/ban-ts-comment': [
          'off',
          { 'ts-expect-error': 'off' },
        ],
      },
    },
  ],
});
