# Test Bundle (no package.json changes)

This ZIP only adds tests/configs without touching your existing dependencies or versions.

## Install & run

From `front/my-page`:

```bash
pnpm install   # uses your existing package.json
pnpm test
pnpm test:cov
```

End-to-end:

```bash
pnpm build
npx serve -s dist -l 5173 &
pnpm e2e
```

If selectors in e2e don’t match your markup, tweak them in `e2e/navigation.spec.ts`.
