# ThankYouNext 🖤

This Next.js starter template is meant to be _easy to use_, _fun to work with_ and _very performant_. It was bootstrapped with [create-next-app](https://nextjs.org/docs#setup) and has the following features, among others:

- [Next.js 12](https://nextjs.org/)
- [Preact](https://preactjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Pre-commit Git hook](https://typicode.github.io/husky/#/)
- [ESLint](https://nextjs.org/docs/basic-features/eslint) and [Prettier](https://prettier.io/docs/en/configuration.html) configuration
- [Absolute imports](https://nextjs.org/docs/advanced-features/module-path-aliases)
- [React strict mode](https://nextjs.org/docs/api-reference/next.config.js/react-strict-mode)
- Ready-to-use-SEO setup
- [Security headers](https://nextjs.org/docs/advanced-features/security-headers)

## Table of contents

- [General](#1.-General)
- [Styling](#2.-Styling)
- [Performance](#3.-Performance)
- [Security](#4.-Security)
- [SEO](#5.-SEO)

## 1. General

It's all pretty straightforward and comes with features I would expect from a modern [Jamstack](https://jamstack.org/) website. I also added a few measures to ensure good code hygiene. Therefore, besides **TypeScript** and **React strict mode**, this template includes a **Git hook** that executes `yarn lint && yarn tsc` before the commit.

## 2. Styling

**Tailwind CSS** is hotly and controversially discussed in the developer scene, which is why it caught my interest. However, you should have basic knowledge of CSS to be able to use it easily and quickly. For this I can highly recommend [Learn CSS](https://web.dev/learn/css/)! I personally write less CSS code and can implement things faster with **Tailwind CSS**, but if you don't like it, you can always switch to classic [CSS](https://nextjs.org/docs/basic-features/built-in-css-support), respectively [SASS](https://sass-lang.com/).

## 3. Performance

If you like the component-based approach of **React** but want to build fast, simple static websites, there's an interesting feature in Next.js:

```javascript
export const config = {
  unstable_runtimeJS: false,
}
```

This code snippet must be used on the respective page in the `pages` folder to disable client-side JavaScript. Disadvantage: Features like [React Hooks](https://reactjs.org/docs/hooks-intro.html) or [next/image](https://nextjs.org/docs/basic-features/image-optimization) won't work then!

This template also uses Preact, which has the same features but a smaller file size than React. If you prefer to use **React**, remove the following line of code in `next.config.js`:

```javascript
const withPreact = require('next-plugin-preact')
```

Next, the `withPreact` wrapper must be removed from module.exports:

```javascript
// With Preact:
module.exports = withPreact({
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
})

// Without Preact:
module.exports = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
}
```

## 4. Security

I have added a few security headers according to the [Next.js documentation](https://nextjs.org/docs/advanced-features/security-headers). `Content-Security-Policy` is a bit tricky to configure, which is why I didn't add it so you can adjust it to your liking.

## 5. SEO

The `Meta` component contains all the content needed for great SEO results. It has predefined props which you can configure anyway you want.
