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

Instalace knihovny:
```bash
npm install @staticcms/core@latest
```

Vytvořit adresář `/src/app/admin` a do něj umístit následující soubory:

### layout.jsx
```jsx
import Script from "next/script";

export const metadata = {
  title: "Administrace",
};

export default ({ children }) => {
  return (
    <html lang="cs">
      <Script
        src="https://identity.netlify.com/v1/netlify-identity-widget.js"
        async
      />
      <body>{children}</body>
    </html>
  );
};
```

### page.jsx

```jsx
"use client";

import dynamic from "next/dynamic";

export default () => {
  const CMSPage = useMemo(
    () =>
      dynamic(() => import("@/components/cms/CMSPage"), {
        ssr: false,
      }),
    []
  );

  return useMemo(() => <CMSPage key="admin" />, [CMSPage]);
};
```

* přidat komponentu `cms/CMSPage.jsx`
* nakonfigurovat administraci v souboru `/src/config.js`
* spustit `npx @staticcms/proxy-server`