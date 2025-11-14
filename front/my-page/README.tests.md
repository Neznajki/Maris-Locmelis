# Test Bundle (no package.json changes)

This ZIP only adds tests/configs without touching your existing dependencies or versions.

## Install & run

From `front/my-page`:

```bash
npm install   # uses your existing package.json
npm test
npm test:cov
```

If selectors in e2e don’t match your markup, tweak them in `e2e/navigation.spec.ts`.
