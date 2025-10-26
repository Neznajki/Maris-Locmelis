# __tests__ folder (mirrors src structure)

This bundle adds tests under a **single `__tests__` folder** that mirrors your `src` structure.

Place the folder at:
`front/my-page/__tests__`

## Run

```bash
pnpm test
# or
npm test
```

> Tests import `@testing-library/jest-dom` directly, so no changes to your Vitest setupFiles are required.
