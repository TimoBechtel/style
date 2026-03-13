# Style 🛼

> Roll in style.

Highly opinionated configuration files for typescript projects.

> [!TIP]
> Let your agent set this up for you:
>
> ```
> Read https://raw.githubusercontent.com/TimoBechtel/style/main/skills/setup-style/SKILL.md and configure.
> ```

## Usage

> Make sure to first commit your code before running the following commands. This allows you to revert changes easily.

```bash
npm i -D @timobechtel/style typescript
```

Install gh-get to make it easier to download the template files:

```bash
gh extension install timobechtel/gh-get
```

### [Oxfmt](https://oxc.rs/docs/guide/usage/formatter.html)

> Code formatter, replaces Prettier.

```bash
npm i -D oxfmt
```

```bash
gh get timobechtel/style templates/.oxfmtrc.json
```

- [oxfmt template](https://github.com/TimoBechtel/style/blob/main/templates/.oxfmtrc.json)

### [Oxlint](https://oxc.rs/docs/guide/usage/linter.html)

> Faster ESLint alternative. 5x faster in personal testing.

```bash
npm i -D oxlint
```

Core:

```bash
gh get timobechtel/style templates/.oxlintrc.jsonc
```

- [oxlint core template](https://github.com/TimoBechtel/style/blob/main/templates/.oxlintrc.jsonc)

React:

```bash
gh get timobechtel/style templates/react/.oxlintrc.jsonc
```

- [oxlint react template](https://github.com/TimoBechtel/style/blob/main/templates/react/.oxlintrc.jsonc)

<details>
  <summary>Migrating to Oxlint? - `File '@timobechtel/style/tsconfig/core' not found.`</summary>

  When migrating from ESLint to Oxlint, you might need to update the `tsconfig.json` file:

  ```diff
  - "extends": ["@timobechtel/style/tsconfig/core"]
  + "extends": ["@timobechtel/style/tsconfig/core.json"]
  ```

  ```diff
  - "extends": ["@timobechtel/style/tsconfig/react"]
  + "extends": ["@timobechtel/style/tsconfig/react.json"]
  ```

  > tsgolint requires a file extension to resolve the config file.

</details>

### Typescript

> Pre-configured tsconfig files.

#### Existing tsconfig

For existing projects or templates, I recomment leaving the config as-is and adding this preset to the extends array.

```json
{
  "extends": ["@timobechtel/style/tsconfig/core.json"]
}
```

#### New tsconfig

```bash
gh get timobechtel/style templates/tsconfig.json
```

- [tsconfig core template](https://github.com/TimoBechtel/style/blob/main/templates/tsconfig.json)

#### Or with React

```bash
gh get timobechtel/style templates/react/tsconfig.json
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

### Prettier

> Prettier config will not be updated anymore. I recommend using [Oxfmt](#oxfmt) instead.
> oxfmt has been configured to match prettier rules, however this might drift in future versions.

<details>
  <summary>Setup prettier anyways</summary>

```bash
npm i -D prettier
```

```bash
gh get timobechtel/style templates/.prettierrc
```

- [prettier template](https://github.com/TimoBechtel/style/blob/main/templates/.prettierrc)

<details>
  <summary>Extend / customize config</summary>

Need to extend the config, e.g. adding plugins?

```bash
gh get timobechtel/style templates/.prettierrc.mjs
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
</details>

### Eslint

> Eslint config will be removed in a future version. Use [Oxlint](#oxlint) instead.
> oxlint has been configured to match existing eslint rules, however this might drift in future versions.

<details>
  <summary>Setup eslint anyways</summary>

```bash
npm i -D eslint
```

```bash
gh get timobechtel/style templates/eslint.config.js
```

- [eslint core template](https://github.com/TimoBechtel/style/blob/main/templates/eslint.config.js)

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
gh get timobechtel/style templates/react/eslint.config.js
```

- [eslint react template](https://github.com/TimoBechtel/style/blob/main/templates/react/eslint.config.js)

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

</details>

### semantic-release

This repo also contains a [semantic-release](https://github.com/semantic-release/semantic-release) configuration.

```bash
npm i -D semantic-release @semantic-release/changelog @semantic-release/git
```

```bash
gh get timobechtel/style templates/.releaserc.json
```

- [semantic-release template](https://github.com/TimoBechtel/style/blob/main/templates/.releaserc.json)

### Agent Skills

```bash
npx skills add timobechtel/style@setup-style
```
