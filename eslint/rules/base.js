import { defineConfig } from 'eslint/config';

export default defineConfig({
  rules: {
    'prefer-arrow-callback': [
      'warn',
      {
        allowNamedFunctions: true,
        allowUnboundThis: true,
      },
    ],
    'no-console': [
      'error',
      {
        allow: ['warn', 'error', 'clear', 'info'],
      },
    ],
    'max-depth': ['warn', 4],
    'no-restricted-globals': ['error', 'event', 'name'],
    curly: ['warn', 'multi-line'],
    'default-case-last': 'error',
    eqeqeq: 'error',
    'no-alert': 'error',
    'no-useless-rename': 'warn',
    'no-var': 'error',
    'object-shorthand': 'warn',
    'prefer-const': 'warn',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'warn',
    'no-promise-executor-return': 'error',
    'no-unreachable-loop': 'error',
    'new-cap': ['error', { capIsNew: false }],
    'new-parens': 'warn',
    'no-lonely-if': 'warn',
    'no-unneeded-ternary': 'error',
    'prefer-object-spread': 'warn',
    'no-label-var': 'error',
    'no-undef-init': 'warn',
    'no-unused-vars': [
      'error',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: false,
        vars: 'all',
        varsIgnorePattern: '^_',
      },
    ],
    'no-constant-binary-expression': 'error',
  },
});
