 # Next.js demo pro Digitální akademii Web

## Vytvoření projektu

Podle návodu na https://nextjs.org:

```bash
npx create-next-app@latest
```


## Lokální vývoj

Spuštění vývojového serveru:

```bash
npm run dev
```

Aplikace je po spuštění dostupná na http://localhost:3000.

## Podpora pro MDX (Markdown)

Instalace knihoven:

```bash
npm install @next/mdx @mdx-js/loader @mdx-js/react next-mdx-remote
```

Vytvořit soubor `/mdx-components.jsx` s obsahem:

```jsx
export const useMDXComponents = (components) => {
  return {
    ...components,
  }
}
```

Soubor `/next.config.js` přepsat následujícím obsahem:

```js
const withMDX = require('@next/mdx')()
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
}
 
module.exports = withMDX(nextConfig)
```

## Administrace

Postup zprovoznění: https://www.staticcms.org/docs/add-to-your-site-cdn

Spuštění lokálního backendu:
```bash
npx @staticcms/proxy-server
```
