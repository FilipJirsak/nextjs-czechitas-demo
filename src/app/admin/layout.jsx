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
