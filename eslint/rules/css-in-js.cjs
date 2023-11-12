// @ts-check
const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  rules: {
    'no-restricted-syntax': [
      'error',
      {
        // catches common mistakes when writing comments in CSS
        selector:
          'TemplateElement[value.cooked=/\\s+\\u002F\\u002F\\s*/], Literal[value=/\\s+\\u002F\\u002F\\s*/]',
        message: 'Invalid comment syntax. Use `/* */` instead of `//`.',
      },
    ],
  },
});
