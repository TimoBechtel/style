// @ts-check
const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  plugins: ['unicorn'],
  rules: {
    // Use destructured variables over properties.
    'unicorn/consistent-destructuring': 'warn',
    // Move function definitions to the highest possible scope.
    'unicorn/consistent-function-scoping': [
      'warn',
      {
        checkArrowFunctions: false,
      },
    ],
    //  Enforce passing a message value when creating a built-in error.
    'unicorn/error-message': 'error',
    //  Require escape sequences to use uppercase values.
    'unicorn/escape-case': 'warn',
    // Disallow empty files.
    'unicorn/no-empty-file': 'error',
    // Do not use a for loop that can be replaced with a for-of loop.
    'unicorn/no-for-loop': 'warn',
    // Require Array.isArray() instead of instanceof Array.
    'unicorn/no-instanceof-array': 'error',
    // Prevent calling EventTarget#removeEventListener() with the result of an expression.
    'unicorn/no-invalid-remove-event-listener': 'error',
    // Disallow the use of objects as default parameters.
    'unicorn/no-object-as-default-parameter': 'error',
    // Disallow then property.
    'unicorn/no-thenable': 'error',
    //  Disallow awaiting non-promise values.
    'unicorn/no-unnecessary-await': 'error',
    // Disallow unreadable IIFEs.
    'unicorn/no-unreadable-iife': 'warn',
    // Disallow useless fallback when spreading in object literals.
    'unicorn/no-useless-fallback-in-spread': 'warn',
    // Disallow useless array length check.
    'unicorn/no-useless-length-check': 'warn',
    // Disallow returning/yielding Promise.resolve/reject() in async functions or promise callbacks
    'unicorn/no-useless-promise-resolve-reject': 'error',
    // Disallow unnecessary spread.
    'unicorn/no-useless-spread': 'error',
    // Disallow number literals with zero fractions or dangling dots.
    'unicorn/no-zero-fractions': 'warn',
    // Enforce the style of numeric separators by correctly grouping digits.
    'unicorn/numeric-separators-style': 'error',
    // Prefer .addEventListener() and .removeEventListener() over on-functions.
    'unicorn/prefer-add-event-listener': 'error',
    // Prefer .find(…) and .findLast(…) over the first or last element from .filter(…).
    'unicorn/prefer-array-find': 'error',
    // Prefer Array#flat() over legacy techniques to flatten arrays.
    'unicorn/prefer-array-flat': 'error',
    // Prefer .flatMap(…) over .map(…).flat().
    'unicorn/prefer-array-flat-map': 'error',
    // Prefer Array#{indexOf,lastIndexOf}() over Array#{findIndex,findLastIndex}() when looking for the index of an item.
    'unicorn/prefer-array-index-of': 'error',
    // Prefer .some(…) over .filter(…).length check and .{find,findLast}(…).
    'unicorn/prefer-array-some': 'error',
    // Prefer .at() method for index access and String#charAt().
    'unicorn/prefer-at': 'error',
    // Prefer Blob#arrayBuffer() over FileReader#readAsArrayBuffer(…) and Blob#text() over FileReader#readAsText(…).
    'unicorn/prefer-blob-reading-methods': 'error',
    // Prefer Date.now() to get the number of milliseconds since the Unix Epoch.
    'unicorn/prefer-date-now': 'error',
    // Prefer default parameters over reassignment.
    'unicorn/prefer-default-parameters': 'warn',
    // Prefer Node#append() over Node#appendChild().
    'unicorn/prefer-dom-node-append': 'error',
    // Prefer using .dataset on DOM elements over calling attribute methods.
    'unicorn/prefer-dom-node-dataset': 'error',
    // Prefer childNode.remove() over parentNode.removeChild(childNode).
    'unicorn/prefer-dom-node-remove': 'error',
    // Prefer EventTarget over EventEmitter.
    'unicorn/prefer-event-target': 'warn',
    // Prefer export…from when re-exporting.
    'unicorn/prefer-export-from': [
      'warn',
      {
        ignoreUsedVariables: true,
      },
    ],
    // Prefer .includes() over .indexOf() and Array#some() when checking for existence or non-existence.
    'unicorn/prefer-includes': 'error',
    // Prefer KeyboardEvent#key over KeyboardEvent#keyCode.
    'unicorn/prefer-keyboard-event-key': 'error',
    // Prefer using a logical operator over a ternary.
    'unicorn/prefer-logical-operator-over-ternary': 'error',
    // Enforce the use of Math.trunc instead of bitwise operators.
    'unicorn/prefer-math-trunc': 'error',
    // Prefer .before() over .insertBefore(), .replaceWith() over .replaceChild(), prefer one of .before(), .after(), .append() or .prepend() over insertAdjacentText() and insertAdjacentElement().
    'unicorn/prefer-modern-dom-apis': 'error',
    // Prefer modern Math APIs over legacy patterns.
    'unicorn/prefer-modern-math-apis': 'error',
    // Prefer negative index over .length - index when possible.
    'unicorn/prefer-negative-index': 'error',
    // Require using the `node:` protocol when importing Node.js built-in modules.
    'unicorn/prefer-node-protocol': 'error',
    // Prefer Number static properties over global ones.
    'unicorn/prefer-number-properties': ['error', { checkInfinity: false }],
    // Prefer using Object.fromEntries(…) to transform a list of key-value pairs into an object.
    'unicorn/prefer-object-from-entries': 'error',
    // Prefer Reflect.apply() over Function#apply().
    'unicorn/prefer-reflect-apply': 'error',
    // using RegExp.test() is faster than string.match()
    // note: you should not use the global flag /g with RegExp.test() though!
    'unicorn/prefer-regexp-test': 'error',
    // Prefer Set#has() over Array#includes() when checking for existence or non-existence.
    'unicorn/prefer-set-has': 'error',
    // Prefer using Set#size instead of Array#length.
    'unicorn/prefer-set-size': 'error',
    // Prefer the spread operator over Array.from().
    'unicorn/prefer-spread': 'error',
    // Prefer String#replaceAll() over regex searches with the global flag.
    'unicorn/prefer-string-replace-all': 'error',
    // Prefer String#slice() over String#substr() and String#substring().
    'unicorn/prefer-string-slice': 'error',
    // Prefer String#startsWith() & String#endsWith() over RegExp#test().
    'unicorn/prefer-string-starts-ends-with': 'error',
    // Prefer ternary expressions over simple if-else statements.
    'unicorn/prefer-ternary': ['warn', 'only-single-line'],
    // Prefer top-level await over top-level promises and async function calls.
    'unicorn/prefer-top-level-await': 'error',
    // Enforce using the separator argument with Array#join().
    'unicorn/require-array-join-separator': 'error',
    // Enforce consistent brace style for case clauses.
    'unicorn/switch-case-braces': 'error',
  },
});
