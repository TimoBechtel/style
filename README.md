# Style 🛼

> Roll in style.

Highly opinionated configuration files for typescript projects. Inspired by [@vercel/style-guide](https://github.com/vercel/style-guide)

> [!WARNING]  
> Make sure to first commit your code before running the following commands. To allow you to easily revert the changes.

## Usage

```bash
npm i -D @timobechtel/style prettier "eslint@^8.57.1" typescript
```

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
  }
  ```
  
</details>

### Typescript

#### Existing tsconfig

For existing projects or templates, I recomment leaving the config as-is and adding this preset to the extends array.

```json
{
  "extends": ["@timobechtel/style/tsconfig/core"]
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
    "extends": ["expo/tsconfig.base", "@timobechtel/style/tsconfig/core"],
    "compilerOptions": {
      "moduleResolution": "bundler", // <-- this is important
      "strict": true,
      "paths": {
        "@/*": [
          "./*"
        ]
      }
    },
    "include": [
      "**/*.ts",
      "**/*.tsx",
      ".expo/types/**/*.ts",
      "expo-env.d.ts"
    ]
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
    "extends": "@timobechtel/style/tsconfig/react"
  }
  ```

  </details>

### Eslint

```bash
curl -O https://raw.githubusercontent.com/TimoBechtel/style/refs/heads/main/templates/eslint/core/.eslintrc.cjs
```

#### Fix Parsing errors for config files

You may get a `Parsing error: <FILE> was not found by the project service.` for config files like .eslintrc.cjs when not included in the tsconfig.

To fix, either add to tsconfig or add them to the eslint config:

```diff
  //...
  parserOptions: {
+    projectService: {
+      allowDefaultProject: ['.eslintrc.cjs'],
+    },
    //...
  },
  //...
```


<details>
  <summary>Or manually</summary>

  Copy the following to a `.eslintrc.cjs`:

  ```js
  const { resolve } = require('node:path');

  const project = resolve(process.cwd(), 'tsconfig.json');

  module.exports = {
    root: true,
    extends: [require.resolve('@timobechtel/style/eslint/core.cjs')],
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
  ```

</details>

#### React

```bash
curl -O https://raw.githubusercontent.com/TimoBechtel/style/refs/heads/main/templates/eslint/react/.eslintrc.cjs
```

<details>
  <summary>Or manually</summary>
  
  Also add `require.resolve('@timobechtel/style/eslint/react.cjs')` to the `extends` array.

  Example config:
  <https://raw.githubusercontent.com/TimoBechtel/style/refs/heads/main/templates/eslint/react/.eslintrc.cjs>
</details>

#### VSCode

Note: You should disable `source.organizeImports` in your VSCode config, as this collides with the `import/order` rule.

Add the following to your VSCode config, e.g. `.vscode/settings.json`

```json
{
  "editor.codeActionsOnSave": {
    // use eslint import/order instead
    "source.sortImports": "never"
  }
}
```

### semantic-release

This repo also contains a [semantic-release](https://github.com/semantic-release/semantic-release) configuration.

```bash
npm i -D semantic-release
```

```bash
echo '{ "extends": "@timobechtel/style/semantic-release/index.cjs" }' > .releaserc.json
```
