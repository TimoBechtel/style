import { defineConfig } from 'eslint/config';

export default defineConfig({
  rules: {
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'react',
            importNames: ['default', '*'],
            allowTypeImports: true,
            message: 'Use named React imports.',
          },
          {
            name: 'react',
            importNames: ['forwardRef'],
            allowTypeImports: true,
            message: 'Pass ref as a prop instead of using forwardRef.',
          },
        ],
      },
    ],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/button-has-type': 'error',
    'react/function-component-definition': 'warn',
    'react/hook-use-state': 'warn',
    'react/jsx-boolean-value': 'warn',
    'react/jsx-curly-brace-presence': [
      'warn',
      {
        props: 'never',
        children: 'ignore',
        propElementValues: 'always',
      },
    ],
    'react/jsx-fragments': 'warn',
    'react/jsx-no-leaked-render': 'error',
    'react/jsx-no-target-blank': [
      'error',
      {
        allowReferrer: true,
      },
    ],
    'react/jsx-no-useless-fragment': ['warn', { allowExpressions: true }],
    'react/jsx-pascal-case': 'warn',
    'react/jsx-sort-props': [
      'warn',
      {
        callbacksLast: true,
      },
    ],
    'react/no-unstable-nested-components': 'error',
    'react/self-closing-comp': 'warn',
    'react-hooks/exhaustive-deps': 'error',
    'react/destructuring-assignment': ['warn', 'always'],
    'style-react/prefer-no-use-effect': 'warn',
  },
});
