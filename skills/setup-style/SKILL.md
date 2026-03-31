---
name: setup-style
description: Set up @timobechtel/style in a project — configures oxfmt, oxlint, and TypeScript presets. Use when the user asks to configure linting/formatting, add oxlint/oxfmt/tsconfig, or mentions "@timobechtel/style".
---

# Setup @timobechtel/style

Docs: <https://raw.githubusercontent.com/TimoBechtel/style/main/README.md>

Base URL for templates: `https://raw.githubusercontent.com/TimoBechtel/style/main/templates`

## Step 0: Verify clean git state

- Not a git repo → **stop**, ask user to initialize first
- Dirty working tree → **stop**, ask user to commit or stash first

## Step 1: Detect project context

Read `package.json`:

1. **Package manager** — detect from lock file
2. **React** — `react` in `dependencies` or `devDependencies`
3. **Expo** — `expo` in `dependencies`
4. **Existing configs** — check for `.oxfmtrc.json`, `.oxlintrc.jsonc`, `tsconfig.json`
5. **Legacy tooling** — prettier/eslint config files or packages in `devDependencies`

## Step 2: Remove legacy tooling

If prettier or eslint detected, remove their packages (including eslint plugins/configs), config files, and related scripts from `package.json`. Tell user what was removed.

## Step 3: Install dependencies

```bash
<pm> add -D @timobechtel/style typescript oxfmt oxlint
```

## Step 4: Set up oxfmt

- **No `.oxfmtrc.json`:** `curl -fsSL <base>/templates/.oxfmtrc.json -o .oxfmtrc.json`
- **Exists:** ask user before overwriting

## Step 5: Set up oxlint

**No `.oxlintrc.jsonc`** — download template:

- React: `curl -fsSL <base>/templates/react/.oxlintrc.jsonc -o .oxlintrc.jsonc`
- Non-React: `curl -fsSL <base>/templates/.oxlintrc.jsonc -o .oxlintrc.jsonc`

**`.oxlintrc.jsonc` exists** — add style preset to `extends`, keep existing config intact:

- React: `./node_modules/@timobechtel/style/oxlint/react.jsonc`
- Non-React: `./node_modules/@timobechtel/style/oxlint/core.jsonc`

Add to `extends` array. Create the array if it doesn't exist.

## Step 6: Set up TypeScript config

**No `tsconfig.json`** — download template:

- React: `curl -fsSL <base>/templates/react/tsconfig.json -o tsconfig.json`
- Non-React: `curl -fsSL <base>/templates/tsconfig.json -o tsconfig.json`

**`tsconfig.json` exists** — add preset to `extends`, don't overwrite:

- React: `@timobechtel/style/tsconfig/react.json`
- Non-React: `@timobechtel/style/tsconfig/core.json`

Handle these cases:

- `extends` is a string → convert to array, keep existing value, add preset
- `extends` is an array → append preset if not already present
- `extends` is missing → add `"extends": ["<preset path>"]`

**Expo projects:** also set `compilerOptions.moduleResolution` to `"bundler"` (see [README](https://github.com/TimoBechtel/style/blob/main/README.md#expo)).

## Step 7: Add npm scripts

Add/update in `package.json`:

```json
{
  "scripts": {
    "lint": "oxlint",
    "lint:fix": "oxlint --fix",
    "format": "oxfmt --write .",
    "format:check": "oxfmt --check .",
    "typecheck": "tsc --noEmit"
  }
}
```

## Summary

Tell user what was installed/configured and which files were created vs modified.
