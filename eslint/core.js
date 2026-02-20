import js from '@eslint/js';
import timobechtelRulesPlugin from '@timobechtel/eslint-plugin-rules';
import prettierConfig from 'eslint-config-prettier/flat';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
import { createNodeResolver, importX } from 'eslint-plugin-import-x';
import unicornPlugin from 'eslint-plugin-unicorn';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import baseRules from './rules/base.js';
import importRules from './rules/import.js';
import typescriptRules from './rules/typescript.js';
import unicornRules from './rules/unicorn.js';

const mergeRules = (configs) =>
  Object.assign({}, ...configs.map((config) => config?.rules ?? {}));

export default defineConfig([
  js.configs.recommended,
  importX.flatConfigs.recommended,
  importX.flatConfigs.typescript,
  timobechtelRulesPlugin.configs['flat/all'],

  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    plugins: {
      unicorn: unicornPlugin,
    },
    rules: {
      ...mergeRules(baseRules),
      ...mergeRules(importRules),
      ...mergeRules(unicornRules),
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    settings: {
      'import-x/resolver-next': [
        createTypeScriptImportResolver(),
        createNodeResolver(),
      ],
    },
  },

  ...tseslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.strict,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylistic,
  ...tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  },
  {
    files: ['**/*.js'],
    extends: [tseslint.configs.disableTypeChecked],
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      ...mergeRules(typescriptRules),
    },
  },

  {
    files: ['**/*.test.ts', '**/*.test.tsx', '**/*.spec.ts', '**/*.spec.tsx'],
    rules: {
      '@typescript-eslint/ban-ts-comment': 'off',
    },
  },

  prettierConfig,
]);
