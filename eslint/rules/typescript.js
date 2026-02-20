import { defineConfig } from 'eslint/config';
import baseRules from './base.js';

const noUnusedVarsConfig = baseRules[0]?.rules?.['no-unused-vars'];

export default defineConfig({
  rules: {
    '@typescript-eslint/consistent-type-exports': [
      'error',
      { fixMixedExportsWithInlineTypeSpecifier: true },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
        fixStyle: 'inline-type-imports',
      },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        format: ['PascalCase'],
        selector: ['typeLike', 'enumMember'],
      },
      {
        custom: {
          match: false,
          regex: '^I[A-Z]|^(Interface|Props|State)$',
        },
        format: ['PascalCase'],
        selector: 'interface',
      },
    ],
    '@typescript-eslint/no-redundant-type-constituents': 'error',
    '@typescript-eslint/prefer-regexp-exec': 'warn',
    '@typescript-eslint/require-array-sort-compare': [
      'error',
      { ignoreStringArrays: true },
    ],
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': 'error',
    'no-loop-func': 'off',
    '@typescript-eslint/no-loop-func': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': noUnusedVarsConfig,
    'import-x/default': 'off',
    'import-x/export': 'off',
    'import-x/namespace': 'off',
    'import-x/no-unresolved': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false,
      },
    ],
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/method-signature-style': 'off',
    '@typescript-eslint/consistent-indexed-object-style': 'off',
    '@typescript-eslint/no-import-type-side-effects': 'error',
  },
});
