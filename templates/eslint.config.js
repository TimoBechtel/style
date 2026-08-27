import path from 'node:path';

import styleCore from '@timobechtel/style/eslint/core.js';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
import { createNodeResolver } from 'eslint-plugin-import-x';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  ...styleCore,
  {
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: {
      'import-x/resolver-next': [
        createTypeScriptImportResolver({
          project: path.resolve(import.meta.dirname, 'tsconfig.json'),
        }),
        createNodeResolver(),
      ],
    },
  },
]);
