const { defineConfig } = require('eslint-define-config');
const noUnusedVarsConfig = require('./base.cjs').rules['no-unused-vars'];

// @ts-check
module.exports = defineConfig({
  rules: {
    // Require consistent usage of type exports.
    '@typescript-eslint/consistent-type-exports': [
      'error',
      { fixMixedExportsWithInlineTypeSpecifier: true },
    ],
    // Require consistent usage of type imports.
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
        fixStyle: 'inline-type-imports',
      },
    ],
    /**
     * Require using function property types in method signatures.
     * These have enhanced typechecking, whereas method signatures do not.
     */
    '@typescript-eslint/method-signature-style': 'error',
    /**
     * Require consistent naming conventions.
     * Improves IntelliSense suggestions and avoids name collisions.
     */
    '@typescript-eslint/naming-convention': [
      'error',
      // Anything type-like should be written in PascalCase.
      {
        format: ['PascalCase'],
        selector: ['typeLike', 'enumMember'],
      },
      // Interfaces cannot be prefixed with `I`, or have restricted names.
      {
        custom: {
          match: false,
          regex: '^I[A-Z]|^(Interface|Props|State)$',
        },
        format: ['PascalCase'],
        selector: 'interface',
      },
    ],
    // Disallow members of unions and intersections that do nothing or override type information.
    '@typescript-eslint/no-redundant-type-constituents': 'error',
    // Require using `RegExp.exec()` over `String.match()` for consistency.
    '@typescript-eslint/prefer-regexp-exec': 'warn',
    //
    '@typescript-eslint/require-array-sort-compare': [
      'error',
      { ignoreStringArrays: true },
    ],
    /**
     * Require exhaustive checks when using union types in switch statements.
     * This ensures cases are considered when items are later added to a union.
     */
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    // Require default parameters to be last.
    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': 'error',
    // Disallow creation of functions within loops.
    'no-loop-func': 'off',
    '@typescript-eslint/no-loop-func': 'error',
    // Disallow unused variables.
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': noUnusedVarsConfig,

    /**
     * These are enabled by `import/recommended`, but are better handled by
     * TypeScript and @typescript-eslint.
     */
    'import/default': 'off',
    'import/export': 'off',
    'import/namespace': 'off',
    'import/no-unresolved': 'off',

    // This is disabled as I feel that checking empty strings is a valid use
    // of `||` over `??`.
    '@typescript-eslint/prefer-nullish-coalescing': 'off',

    // Disallow Promises in places not designed to handle them.
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        // Disabled as I feel that passing a async callback to a function expecting
        // a void callback is a valid use case.
        // e.g. fn.on('event', async () => {})
        // Strictly requiring to return 'undefined' does not have a functional benefit,
        // but makes the code more verbose.
        checksVoidReturn: false,
      },
    ],
  },
});
