/**
 * Some of Prettier's defaults can be overridden by an EditorConfig file. We
 * define those here to ensure that doesn't happen.
 *
 * See: https://github.com/prettier/prettier/blob/main/docs/configuration.md#editorconfig
 */
const overridableDefaults = {
  endOfLine: 'lf',
  tabWidth: 2,
  printWidth: 80,
  // Why I'd generally prefer tabs, as they are a lot more customizable,
  // I've found that in a lot of places, tabs are displayed as 8 spaces by default,
  // which makes it hard to read on mobile devices. (e.g. the GitHub app)
  useTabs: false,
};

/** @type {import("prettier").Config} */
export default {
  ...overridableDefaults,
  singleQuote: true,
};
