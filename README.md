##Debugging

1. Deploy problem on Vercel (Failed to compile: `’` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;) solved by: 

{
  "extends": "next/core-web-vitals",
  "rules": { "react/no-unescaped-entities": 0 }
} in eslintrc.json

2. Deploy-problem: Error: Command "npm run build" exited with 1

- CU = false (environment variables) first action
- check if there're errors in using components/ pages. F.e. page without 'export default'

3. Firebase not connecting

- Always restart dev server after changing the .env file
- For deploying environment variables need to be inserted in Vercel!

4. _document.js link needs to be crossOrigin instead of crossorigin from google fonts

5. Array of ingredients creates a document in firestore after each object that comes up in the array -> probably is this a problem of submitting on the form. So, onclick on the submit button instead of the submit on the form. And ..., in the component e.preventDefault() added to handleAddField.

6. Profile image is loading but show up only after rerendering -> forgot to 'await' the imageUpload in handleUpload in the ProfileImage component

7. Array of ingredients do not stay in the form when you go back or forward in the form. Use session storage? Or, adjust the code? !!!!!!!!!!!!!!!!! TO DO  


##Rendering

Choices between

- SSR
- SSG
- ISR -> loading all recipes
- CSR -> updating db? authentication?











- Largest Contentful Paint (LCP) --- warning ---
Zal wellicht opgelost worden door ssr