import {ComponentType, lazy} from 'react'

type Module<P = any> = { default: ComponentType<P> };

const pages = import.meta.glob("@/pages/**/*.tsx") as Record<
    string,
    () => Promise<Module>
>;


export function lazyPage(name: string) {
  return lazy(async () => {
    const path = `/src/pages/${name}Page.tsx`;

    const loader = pages[path];
    if (!loader) {
      let message = `Failed to lazy import page '${path}'`;
      console.error(message)
      throw new Error(message)
    }

    return await loader();
  })
}
