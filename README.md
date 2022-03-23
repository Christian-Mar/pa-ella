##Debugs

1. Deploy problem on Vercel (Failed to compile: `’` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;) solved by: 

{
  "extends": "next/core-web-vitals",
  "rules": { "react/no-unescaped-entities": 0 }
} in eslintrc.json

2. Deploy-problem: Error: Command "npm run build" exited with 1

- CU = false (environment variables) first action
- check if there're errors in using components/ pages. F.e. page without 'export default'

3. Firebase not connecting

- Always restart dev server after changing the /env file
- For deploying environment variables need to be inserted in Vercel!

##Rendering

Choices between

- SSR
- SSG
- ISR -> loading all recipes
- CSR -> updating db? authentication?











- Largest Contentful Paint (LCP) --- warning ---
Zal wellicht opgelost worden door ssr