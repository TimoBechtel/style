// @ts-check
const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  rules: {
    // prefer arrow functions for callbacks
    'prefer-arrow-callback': [
      'warn',
      {
        allowNamedFunctions: true,
        allowUnboundThis: true,
      },
    ],
    // console logs other than error and warn are only needed for debugging, so they should be removed before merging
    'no-console': [
      'error',
      {
        allow: [
          'warn',
          'error',
          'clear',
          // sometimes we really need to log something, even in production, so info is allowed in edge cases
          'info',
        ],
      },
    ],
    'max-depth': ['warn', 4],
    // some globals, like "name" might be similar to the name of a variable, so we prevent them from being used
    'no-restricted-globals': ['error', 'event', 'name'],
    // Require curly braces for multiline blocks.
    curly: ['warn', 'multi-line'],
    // Require default clauses in switch statements to be last (if used).
    'default-case-last': 'error',
    // Require triple equals (`===` and `!==`).
    eqeqeq: 'error',
    //  disallow the use of `alert()`
    'no-alert': 'error',
    // Disallow renaming import, export, and destructured assignments to the same name.
    'no-useless-rename': 'warn',
    //  Require `let` or `const` instead of `var`.
    'no-var': 'error',
    // Require object literal shorthand syntax.
    'object-shorthand': 'warn',
    // Require default to `const` instead of `let`.
    'prefer-const': 'warn',
    // Require rest parameters instead of `arguments`.
    'prefer-rest-params': 'error',
    // Require spread syntax instead of `.apply()`.
    'prefer-spread': 'error',
    // Require template literals instead of string concatenation.
    'prefer-template': 'warn',
    // Disallow returning values from Promise executor functions.
    'no-promise-executor-return': 'error',
    // Disallow loops with a body that allows only one iteration.
    'no-unreachable-loop': 'error',
    // Require a capital letter for constructors.
    'new-cap': ['error', { capIsNew: false }],
    //  Disallow the omission of parentheses when invoking a constructor with no arguments.
    'new-parens': 'warn',
    // Disallow if as the only statement in an else block.
    'no-lonely-if': 'warn',
    // Disallow ternary operators when simpler alternatives exist.
    'no-unneeded-ternary': 'error',
    // Require use of an object spread over Object.assign.
    'prefer-object-spread': 'warn',
    // Disallow labels that share a name with a variable.
    'no-label-var': 'error',
    // Disallow initializing variables to `undefined`.
    'no-undef-init': 'warn',
    // Disallow unused variables.
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
  },
});
