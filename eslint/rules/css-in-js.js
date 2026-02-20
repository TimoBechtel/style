import { defineConfig } from 'eslint/config';

export default defineConfig({
  rules: {
    'no-restricted-syntax': [
      'error',
      {
        selector:
          'TemplateElement[value.cooked=/\\s+\\u002F\\u002F\\s*/], Literal[value=/\\s+\\u002F\\u002F\\s*/]',
        message: 'Invalid comment syntax. Use `/* */` instead of `//`.',
      },
    ],
  },
});
