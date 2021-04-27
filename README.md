# ThankYouNext 🖤

This Next.js starter template is meant to be easy to use, fun to work with and very performant. It was bootstrapped with [create-next-app](https://nextjs.org/docs/api-reference/create-next-app) and has the following features:

- [TypeScript](https://www.typescriptlang.org/)
- [Sass](https://sass-lang.com/)
- [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/) configuration
- [CSS reset by Andy Bell](https://piccalil.li/blog/a-modern-css-reset)
- [Absolute imports](https://nextjs.org/docs/advanced-features/module-path-aliases)
- [React strict mode](https://nextjs.org/docs/api-reference/next.config.js/react-strict-mode)
- Ready-to-use SEO setup
- All necessary securtity headers

If possible, I recommend deploying it via [Vercel](https://vercel.com/), as it's a pain free process and gets you up and running within minutes (hint: This template was deployed via **Vercel**). More features are:

- [A perfect Google Lighthouse score](https://lighthouse-dot-webdotdevsite.appspot.com//lh/html?url=https%3A%2F%2Fthankyounext.vercel.app%2F)
- [No accessibility violations](https://wave.webaim.org/report#/https://thankyounext.vercel.app/)
- [Ships with zero byte of JavaScript](https://estimator.dev/#https://thankyounext.vercel.app/)
- [No HTML warnings or errors](https://validator.w3.org/nu/?doc=https%3A%2F%2Fthankyounext.vercel.app%2F)
- [No CSS errors](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fthankyounext.vercel.app%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

## Table of contents

1. [Setup ⚙️](#1.-Setup-⚙️)
2. [Performance 🏃‍♀️](#2.-Performance-🏃‍♀️)
3. [Accessibility 🌍](#3.-Accessibility-🌍)
4. [Security 🔒](#4.-Security-🔒)
5. [Styling 💅](#5.-Styling-💅)
6. [Search engine optimization 🔍](#6.-Search-engine-optimization-🔍)
7. [On my own behalf 🙇‍♂️](#7.-On-my-own-behalf-🙇‍♂️)

## 1. Setup ⚙️

First run `npm install` and then `npm run dev` to start h4ck1ng. 👾

### 1.1 TypeScript

If you don't feel comfortable using **TypeScript** or simply don't need it, just rename all `.tsx` files in the pages folder to `js` and in the components folder to `.jsx`. Then run `npm uninstall typescript` to remove it from your project. You should use it though, especially when working on more complex projects. It's painful at first, but very rewarding once you get the hang of it.

### 1.2 Preact

This template runs with [Preact](https://preactjs.com/) instead of **React**, which results in a smaller build and the same developer experience. [More info about the differences to React](https://preactjs.com/guide/v8/differences-to-react/). Want to switch back to **React**? Easy as cake, just delete or comment out the following in `next.config.js`:

```javascript
webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      });
    }
    return config;
  },
```

If you want to clean up your project, run `npm uninstall preact preact-compat` to uninstall it.

## 2. Performance 🏃‍♀️

Inspired by this post from Lee Robinson - [Web Fonts in 2021](https://leerob.io/blog/fonts) - I'm using the following web safe fonts to increase performance for this template:

```css
font-family: Georgia, 'Times New Roman', Times, serif;
```

This template also ships with zero byte of client-side JavaScript, thanks to the following lines of code:

```javascript
export const config = {
  unstable_runtimeJS: false,
};
```

If you want to use things like **next/image** or **React hooks** though, you will have to remove it, otherwise they will not work.

## 3. Accessibility 🌍

It is your responsibility as a developer to make sure your website or application can be used by any human being. If you're not familiar with this topic, here are some resources you can check out:

- [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/)
- [MDN Web Docs - Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [WebAIM resources](https://webaim.org/resources/)
- [What you should know about accessibility and SEO](https://moz.com/blog/accessibility-seo-1)
- [Motherf\*cking website (NSFW)](http://motherfuckingwebsite.com/)
- [Inclusive components](https://webaim.org/resources/)
- [Webbed briefs](https://briefs.video/)

This template already includes some elements that will improve the accessibility of your project, like a **skip link**, an **external link component**, **keyboard focus** (working in all major browsers) and a **proper, flexible font size**.

## 4. Security 🔒

Thanks to [Lee Robinson's tweet about security headers](https://twitter.com/leeerob/status/1381605537742254082), I became aware that my standard **Next.js** project was missing a bunch of them and only ranked D at [securityheaders.com](https://securityheaders.com/). I followed his configuration with some slight adjustments, but please configure them according to your project purpose. In `next.config.js` you will find the following seven security headers:

1. [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
2. [Referrer-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy)
3. [X-Frame-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options)
4. [X-Content-Type-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options)
5. [X-DNS-Prefetch-Control](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control)
6. [Strict-Transport-Security](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security)
7. [Permissions Policy (formerly known as Feature Policy)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy)

## 5. Styling 💅

You have a lot of options to style your project, I just went with good ol' **Sass**. If it gets more complex, you could also use **Sass modules** for individual components. Use whatever works best for you, for example:

- [A global stylesheet](https://nextjs.org/docs/basic-features/built-in-css-support#adding-a-global-stylesheet)
- [CSS (or Sass) Modules](https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css)
- [CSS-in-JS](https://nextjs.org/docs/basic-features/built-in-css-support#css-in-js)
- [styled-components](https://styled-components.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [No CSS at all](https://duckduckgo.com/?t=ffab&q=css+sucks&ia=web)

## 6. Search engine optimization 🔍

I've created a `Meta.tsx` component which does all the heavy lifting regarding SEO. You can setup default props or feed it dynamically with data, depending on the context.

## 7. On my own behalf 🙇‍♂️

The main reason to create this template was to get started right away when creating a website, instead of copy and pasting from previous projects. The layout was somewhat inspired by one of my favorite records and album artworks, "Sunbather" by Deafheaven:

![Sunbather artwork by Deafheaven](https://thankyounext.vercel.app/sunbather.jpg)

I will do my best to keep this project up-to-date, especially the security headers, as they seem to change every few years. I would also like to thank a bunch of people (I know and don't know personally), who helped me on my coding journey. In no particular order:

- [Everyone at Spiced Academy](https://www.spiced-academy.com/)
- [deynfisk](https://deynfisk.de/)
- [Lee Robinson](https://leerob.io/)
- [Cassidy Williams](https://cassidoo.co/)
- [Traversy Media](https://www.traversymedia.com/)
- [freeCodeCamp](https://www.freecodecamp.org/)

## To Do

- [ ] Add favicon with background color
- [ ] Add a preset for cookies
- [x] Use Preact instead of React
- [x] Create documentation
