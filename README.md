Deploy problem on Vercel (Failed to compile: `’` can be escaped with `&apos;`, `&lsquo;`, `'`, `&rsquo;) solved by: 

{
  "extends": "next/core-web-vitals",
  "rules": { "react/no-unescaped-entities": 0 }
} in eslintrc.json