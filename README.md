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

## Administrace (správa obsahu)

Postup zprovoznění: https://www.staticcms.org/docs/add-to-your-site-cdn

Soubor `inedx.html` se nahraje do složky `/public/admin/`. V souboru se inicializace CMS nahradí následujícím kódem:
```html
<script type="module">
      import config from "/admin/config.js";
      window.CMS.init({ config });
</script>
```

V souboru `/public/admin/config.js` je uložena konfigurace StaticCMS.

Přesměrování z adresy `/admin` na `/admin/index.html` je v konfiguraci [`next.config.js`](https://github.com/FilipJirsak/nextjs-czechitas-demo/blob/b1aa8b9305107b6a873c627c40d11f1c80392479/next.config.js#L8-L16).

Spuštění lokálního backendu:
```bash
npx @staticcms/proxy-server
```
