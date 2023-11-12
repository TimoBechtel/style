# Style 🛼

> Roll in style.

Highly opinionated configuration files for typescript projects. Inspired by [@vercel/style-guide](https://github.com/vercel/style-guide)

## Usage

```bash
npm i -D @timobechtel/style prettier eslint typescript
```

### Prettier

```bash
echo '"@timobechtel/style/prettier/index.mjs"' > .prettierrc
```

### Typescript

```bash
echo '{ "extends": "@timobechtel/style/tsconfig/core" }' > tsconfig.json
```

### Eslint

```bash
echo 'const{resolve}=require("node:path");const project=resolve(process.cwd(),"tsconfig.json");module.exports={root:true,extends:[require.resolve("@timobechtel/style/eslint/core.cjs")],parserOptions:{project},settings:{"import/resolver":{typescript:{project}}}};' > .eslintrc.cjs
```

Or copy the following to a `.eslintrc.cjs` manually:

```js
const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

module.exports = {
  root: true,
  extends: [require.resolve('@timobechtel/style/eslint/core.cjs')],
  parserOptions: {
    project,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
};
```

### semantic-release

This repo also contains a [semantic-release](https://github.com/semantic-release/semantic-release) configuration.

```bash
npm i -D semantic-release
```

```bash
echo '{ "extends": "@timobechtel/style/semantic-release/index.cjs" }' > .releaserc.json
```
