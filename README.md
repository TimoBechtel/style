# Style 🛼

> Roll in style.

Highly opinionated configuration files for typescript projects. Inspired by [@vercel/style-guide](https://github.com/vercel/style-guide)

> [!WARNING]  
> Make sure to first commit your code before running the following commands. To allow you to easily revert the changes.

## Usage

```bash
npm i -D @timobechtel/style prettier "eslint@^9" typescript
```

### Oxfmt

```bash
curl -O https://raw.githubusercontent.com/TimoBechtel/style/refs/heads/main/templates/.oxfmtrc.json
```

### Oxlint

Core:

```bash
curl -o .oxlintrc.jsonc https://raw.githubusercontent.com/TimoBechtel/style/refs/heads/main/templates/oxlint/core/.oxlintrc.jsonc
```

React:

```bash
curl -o .oxlintrc.jsonc https://raw.githubusercontent.com/TimoBechtel/style/refs/heads/main/templates/oxlint/react/.oxlintrc.jsonc
```

Note: The preset enables type-aware rules by default and ships the required tsgolint runtime as a dependency.

### Prettier

```bash
curl -O https://raw.githubusercontent.com/TimoBechtel/style/refs/heads/main/templates/.prettierrc
```

<details>
  <summary>Extend / customize config</summary>

Need to extend the config, e.g. adding plugins?

```bash
curl -O https://raw.githubusercontent.com/TimoBechtel/style/refs/heads/main/templates/.prettierrc.mjs
```

Create a .prettierrc.mjs file and import the config, like this:

```js
import config from '@timobechtel/style/prettier/index.mjs';

/**
 * @type {import("prettier").Config}
 */
export default {
  ...config,
  // your config
};
```

</details>

### Typescript

#### Existing tsconfig

For existing projects or templates, I recomment leaving the config as-is and adding this preset to the extends array.

```json
{
  "extends": ["@timobechtel/style/tsconfig/core.json"]
}
```

#### New tsconfig

```bash
curl -O https://raw.githubusercontent.com/TimoBechtel/style/refs/heads/main/templates/tsconfig/core/tsconfig.json
```

#### Expo

With expo make sure to add `"moduleResolution": "bundler"` to the `compilerOptions`, otherwise certain routing types might break.

<details>
  <summary>Example</summary>

Copy to `tsconfig.json`:

```json
{
  "extends": ["expo/tsconfig.base", "@timobechtel/style/tsconfig/core.json"],
  "compilerOptions": {
    "moduleResolution": "bundler", // <-- this is important
    "strict": true,
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["**/*.ts", "**/*.tsx", ".expo/types/**/*.ts", "expo-env.d.ts"]
}
```

  </details>

#### Or with React

```bash
curl -O https://raw.githubusercontent.com/TimoBechtel/style/refs/heads/main/templates/tsconfig/react/tsconfig.json
```

<details>
  <summary>Or manually</summary>

Copy to `tsconfig.json`:

```json
{
  "extends": "@timobechtel/style/tsconfig/react.json"
}
```

  </details>

### Eslint

```bash
curl -O https://raw.githubusercontent.com/TimoBechtel/style/refs/heads/main/templates/eslint/core/eslint.config.js
```

Note: If your project is not ESM (no `"type": "module"` in `package.json`), rename the file to `eslint.config.mjs`.

<details>
  <summary>Or manually</summary>

Copy the following to an `eslint.config.js`:

```js
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'eslint/config';
import styleCore from '@timobechtel/style/eslint/core.js';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
import { createNodeResolver } from 'eslint-plugin-import-x';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig([
  ...styleCore,
  {
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: __dirname,
      },
    },
    settings: {
      'import-x/resolver-next': [
        createTypeScriptImportResolver({
          project: path.resolve(__dirname, 'tsconfig.json'),
        }),
        createNodeResolver(),
      ],
    },
  },
]);
```

</details>

#### React

```bash
curl -O https://raw.githubusercontent.com/TimoBechtel/style/refs/heads/main/templates/eslint/react/eslint.config.js
```

<details>
  <summary>Or manually</summary>
  
  Also spread `styleReact` from `@timobechtel/style/eslint/react.js`:

```js
import styleCore from '@timobechtel/style/eslint/core.js';
import styleReact from '@timobechtel/style/eslint/react.js';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  ...styleCore,
  ...styleReact,
  // ... your config
]);
```

Example config:
<https://raw.githubusercontent.com/TimoBechtel/style/refs/heads/main/templates/eslint/react/eslint.config.js>

</details>

#### Migration from v1.x

If you're upgrading from v1.x, you'll need to:

1. Upgrade to ESLint v9+
2. Replace `.eslintrc.cjs` with `eslint.config.js`
3. Update imports to use `.js` extension (e.g., `@timobechtel/style/eslint/core.js`)
4. Note: Import plugin rules now use `import-x/` prefix instead of `import/`

#### VSCode

Note: You should disable `source.organizeImports` in your VSCode config, as this collides with the `import-x/order` rule.

Add the following to your VSCode config, e.g. `.vscode/settings.json`

```json
{
  "editor.codeActionsOnSave": {
    // use eslint import-x/order instead
    "source.sortImports": "never"
  }
}
```

### semantic-release

This repo also contains a [semantic-release](https://github.com/semantic-release/semantic-release) configuration.

```bash
npm i -D semantic-release @semantic-release/changelog @semantic-release/git
```

```bash
echo '{ "extends": "@timobechtel/style/semantic-release/index.cjs" }' > .releaserc.json
```
