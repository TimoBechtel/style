// @ts-check
const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  rules: {
    // We should prefer TypeScript over prop-types.
    'react/prop-types': 'off',
    // Disable requiring React to be imported, as this is no longer required.
    'react/react-in-jsx-scope': 'off',
    /**
     * Require an explicit type when using button elements. Prevents common mistakes where `type="button"` is omitted on `<button>` elements.
     */
    'react/button-has-type': 'error',
    /**
     * Require consistent function type for function components.
     */
    'react/function-component-definition': 'warn',
    /**
     * Require destructuring and symmetric naming of `useState` hook value and setter variables.
     */
    'react/hook-use-state': 'warn',
    /**
     * Require consistent boolean attributes notation in JSX.
     */
    'react/jsx-boolean-value': 'warn',
    /**
     * Disallow unnecessary curly braces in JSX props and children.
     */
    'react/jsx-curly-brace-presence': [
      'warn',
      {
        props: 'never',
        children: 'ignore',
        propElementValues: 'always',
      },
    ],
    /**
     * Require using shorthand form for React fragments, unless required.
     */
    'react/jsx-fragments': 'warn',
    /**
     * Prevent problematic leaked values from being rendered.
     */
    'react/jsx-no-leaked-render': 'error',
    /**
     * Prevents usage of unsafe `target='_blank'`.
     *
     * This rule is a part of `react/recommended`, but modified to
     * enable allowReferrer.
     */
    'react/jsx-no-target-blank': [
      'error',
      {
        allowReferrer: true,
      },
    ],
    /**
     * Disallow empty React fragments.
     */
    'react/jsx-no-useless-fragment': ['warn', { allowExpressions: true }],
    /**
     * Require the use of PascalCase for user-defined JSX components.
     */
    'react/jsx-pascal-case': 'warn',
    /**
     * Require props to be sorted alphabetically.
     */
    'react/jsx-sort-props': [
      'warn',
      {
        // list callbacks after all other props
        callbacksLast: true,
      },
    ],
    /**
     * Disallow creating unstable components inside components.
     */
    'react/no-unstable-nested-components': 'error',
    /**
     * Disallow closing tags for components without children.
     */
    'react/self-closing-comp': 'warn',
    /**
     * Enforce exhaustive dependencies in `useEffect` and `useCallback` hooks.
     */
    'react-hooks/exhaustive-deps': 'error',
    // prefer destructuring props
    'react/destructuring-assignment': ['warn', 'always'],
  },
});
