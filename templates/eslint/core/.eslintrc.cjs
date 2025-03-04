const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

module.exports = {
  root: true,
  extends: [
    require.resolve('@timobechtel/style/eslint/core.cjs')
  ],
  parserOptions: {
    tsconfigRootDir: process.cwd(),
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
};