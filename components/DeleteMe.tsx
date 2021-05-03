import React from 'react';
import Image from 'next/image';
import ExtLink from '@utils/ExternalLink';

export default function DeleteMe() {
  return (
    <div id="delete-me-wrapper">
      <section id="hero">
        <h1>ThankYouNext 🖤</h1>
        <p>A highly performant and accessible Next.js starter template</p>
      </section>
      <section id="intro" className="stack">
        <p>
          This <strong>Next.js</strong> starter template is meant to be <em>easy to use</em>,{' '}
          <em>fun to work with</em> and <em>very performant</em>. It was bootstrapped with{' '}
          <ExtLink
            url="https://nextjs.org/docs/api-reference/create-next-app"
            content="create-next-app"
          />{' '}
          and has the following
        </p>
        <h2>Features</h2>
        <ul>
          <li>
            <ExtLink url="https://www.typescriptlang.org/" content="TypeScript" />
          </li>
          <li>
            <ExtLink url="https://sass-lang.com/" content="Sass" />
          </li>
          <li>
            <ExtLink url="https://eslint.org/" content="ESLint configuration" />
          </li>
          <li>
            <ExtLink url="https://prettier.io/" content="Prettier configuration" />
          </li>
          <li>
            <ExtLink
              url="https://piccalil.li/blog/a-modern-css-reset"
              content="CSS reset by Andy Bell"
            />
          </li>
          <li>
            <ExtLink
              url="https://nextjs.org/docs/advanced-features/module-path-aliases"
              content="Absolute imports"
            />
          </li>
          <li>
            <ExtLink
              url="https://nextjs.org/docs/api-reference/next.config.js/react-strict-mode"
              content="React strict mode"
            />
          </li>
          <li>Ready-to-use SEO setup</li>
          <li>All necessary security headers</li>
        </ul>
        <p>
          If possible, I recommend deploying it via{' '}
          <ExtLink url="https://vercel.com/" content="Vercel" />, as it's a pain free process and
          gets you up and running within minutes (hint: This template was deployed via Vercel). More
          features are:
        </p>
        <ul>
          <li>
            <ExtLink
              url="https://lighthouse-dot-webdotdevsite.appspot.com//lh/html?url=https%3A%2F%2Fthankyounext.vercel.app%2F"
              content="A perfect Google Lighthouse score"
            />
          </li>
          <li>
            <ExtLink
              url="https://wave.webaim.org/report#/https://thankyounext.vercel.app/"
              content="No accessibility violations"
            />
          </li>
          <li>
            <ExtLink
              url="https://estimator.dev/#https://thankyounext.vercel.app/"
              content="Ships with zero byte of JavaScript"
            />
          </li>
          <li>
            <ExtLink
              url="https://validator.w3.org/nu/?doc=https%3A%2F%2Fthankyounext.vercel.app%2F"
              content="No HTML warnings or errors"
            />
          </li>
          <li>
            <ExtLink
              url="https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fthankyounext.vercel.app%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en"
              content="No CSS errors"
            />
          </li>
        </ul>
      </section>
      <main id="main">
        <hr />
        <section id="table-of-contents" className="stack">
          <h2>Table of contents</h2>
          <ol>
            <li>
              <a href="#setup">Setup ⚙️</a>
            </li>
            <li>
              <a href="#performance">Perfomance 🏃‍♀️</a>
            </li>
            <li>
              <a href="#accessibility">Accessibility (A11y) 🌍</a>
            </li>
            <li>
              <a href="#security">Security 🔒</a>
            </li>
            <li>
              <a href="#styling">Styling 💅</a>
            </li>
            <li>
              <a href="#seo">Search engine optimization (SEO) 🔍</a>
            </li>
            <li>
              <a href="#behalf">On my own behalf 🙇‍♂️</a>
            </li>
          </ol>
        </section>
        <hr />
        {/* SETUP */}
        <section className="stack">
          <div className="section-header">
            <h2 id="setup">1. Setup</h2>
            <a href="#setup" aria-label="Link to Setup">
              ⚙️
            </a>
          </div>
          <p>
            First run <code>npm install</code> and then <code>npm run dev</code> to start h4ck1ng.
            👾
          </p>
          <h3>1.1 TypeScript</h3>
          <p>
            If you don't feel comfortable using <strong>TypeScript</strong> or simply don't need it,
            just rename all <code>.tsx</code> files in the pages folder to <code>js</code> and in
            the components folder to <code>.jsx</code>. Then run{' '}
            <code>npm uninstall typescript</code> to remove it from your project. You should use it
            though, especially when working on more complex projects. It's painful at first, but
            very rewarding once you get the hang of it.
          </p>
          <h3>1.2 Preact</h3>
          <p>
            This template runs with <ExtLink url="https://preactjs.com/" content="Preact" /> instead
            of <strong>React</strong>, which results in a smaller build and the same developer
            experience.{' '}
            <ExtLink
              url="https://preactjs.com/guide/v8/differences-to-react/"
              content="More info about the differences to React."
            />
            Want to switch back to <strong>React</strong>? Easy as cake, just delete or comment out
            the following in <code>next.config.js</code>:
          </p>
          <img
            src="/code-2-min.png"
            alt="Code in next.config.js for Preact"
            width="1178"
            height="744"
          />
          <p>
            If you want to clean up your project, run{' '}
            <code>npm uninstall preact preact-compat</code> to uninstall it.
          </p>
        </section>
        <hr />
        {/* PERFORMANCE */}
        <section className="stack">
          <div className="section-header">
            <h2 id="performance">2. Performance</h2>
            <a href="#performance" aria-label="Link to Performance">
              🏃‍♀️
            </a>
          </div>
          <p>
            Inspired by this post from Lee Robinson -{' '}
            <ExtLink url="https://leerob.io/blog/fonts" content="Web Fonts in 2021" /> - I'm using
            the following web safe fonts to increase performance for this template:
          </p>
          <code>font-family: Georgia, 'Times New Roman', Times, serif;</code>
          <p>
            This template also ships with zero byte of client-side JavaScript, thanks to the
            following lines of code:
          </p>
          <img
            src="/code-1-min.png"
            alt="Code showing how to deactivate run time JavaScript in Next.js"
            width="1544"
            height="968"
          />
          <p>
            If you want to use things like <strong>next/image</strong> or{' '}
            <strong>React hooks</strong> though, you will have to remove it, otherwise they will not
            work.
          </p>
        </section>
        <hr />
        {/* ACCESSIBILITY */}
        <section className="stack">
          <div className="section-header">
            <h2 id="accessibility">Accessibility (A11y)</h2>
            <a href="#accessibility" aria-label="Link to Accessibility">
              🌍
            </a>
          </div>
          <p>
            It is your responsibility as a developer to make sure your website or application can be
            used by any human being. If you're not familiar with this topic, here are some resources
            you can check out:
          </p>
          <ul>
            <li>
              <ExtLink
                url="https://www.w3.org/WAI/standards-guidelines/wcag/"
                content="Web Content Accessibility Guidelines (WCAG)"
              />
            </li>
            <li>
              <ExtLink
                url="https://developer.mozilla.org/en-US/docs/Web/Accessibility"
                content="MDN Web Docs - Accessibility"
              />
            </li>
            <li>
              <ExtLink url="https://webaim.org/resources/" content="WebAIM resources" />
            </li>
            <li>
              <ExtLink
                url="https://moz.com/blog/accessibility-seo-1"
                content="What you should know about accessibility and SEO"
              />
            </li>
            <li>
              <ExtLink
                url="http://motherfuckingwebsite.com/"
                content="Motherf*cking website (NSFW)"
              />
            </li>
            <li>
              <ExtLink url="https://webaim.org/resources/" content="Inclusive components" />
            </li>
            <li>
              <ExtLink url="https://briefs.video/" content="Webbed briefs" />
            </li>
          </ul>
          <p>
            This template already includes some elements that will improve the accessibility of your
            project, like a <mark>skip link</mark>, an <mark>external link component</mark>,{' '}
            <mark>keyboard focus</mark> (working in all major browsers) and a{' '}
            <mark>proper, flexible font size</mark>.
          </p>
        </section>
        <hr />
        {/* SECURITY */}
        <section className="stack">
          <div className="section-header">
            <h2 id="security">4. Security</h2>
            <a href="#security" aria-label="Link to Security">
              🔒
            </a>
          </div>
          <p>
            Thanks to{' '}
            <ExtLink
              url="https://twitter.com/leeerob/status/1381605537742254082"
              content="Lee Robinson's tweet about security headers"
            />
            , I became aware that my standard <strong>Next.js</strong> project was missing a bunch
            of them and only ranked D at{' '}
            <ExtLink url="https://securityheaders.com/" content="securityheaders.com" />. I followed
            his configuration with some slight adjustments, but please configure them according to
            your project purpose. In <code>next.config.js</code> you will find the following seven
            security headers:
          </p>
          <ol>
            <li>
              <ExtLink
                url="https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP"
                content="Content Security Policy"
              />
            </li>
            <li>
              <ExtLink
                url="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy"
                content="Referrer-Policy"
              />
            </li>
            <li>
              <ExtLink
                url="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options"
                content="X-Frame-Options"
              />
            </li>
            <li>
              <ExtLink
                url="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options"
                content="X-Content-Type-Options"
              />
            </li>
            <li>
              <ExtLink
                url="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control"
                content="X-DNS-Prefetch-Control"
              />
            </li>
            <li>
              <ExtLink
                url="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security"
                content="Strict-Transport-Security"
              />
            </li>
            <li>
              <ExtLink
                url="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy"
                content="Permissions Policy (formerly known as Feature Policy)"
              />
            </li>
          </ol>
        </section>
        <hr />
        {/* STYLING */}
        <section className="stack">
          <div className="section-header">
            <h2 id="styling">5. Styling</h2>
            <a href="#styling" aria-label="Link to Styling">
              💅
            </a>
          </div>
          <p>
            You have a lot of options to style your project, I just went with good ol'{' '}
            <strong>Sass</strong>. If it gets more complex, you could also use{' '}
            <strong>Sass modules</strong> for individual components. Use whatever works best for
            you, for example:
          </p>
          <ul>
            <li>
              <ExtLink
                url="https://nextjs.org/docs/basic-features/built-in-css-support#adding-a-global-stylesheet"
                content="A global stylesheet"
              />
            </li>
            <li>
              <ExtLink
                url="https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css"
                content="CSS (or Sass) Modules"
              />
            </li>
            <li>
              <ExtLink
                url="https://nextjs.org/docs/basic-features/built-in-css-support#css-in-js"
                content="CSS-in-JS"
              />
            </li>
            <li>
              <ExtLink url="https://styled-components.com/" content="styled-components" />
            </li>
            <li>
              <ExtLink url="https://tailwindcss.com/" content="Tailwind CSS" />
            </li>
            <li>
              <ExtLink
                url="https://duckduckgo.com/?t=ffab&q=css+sucks&ia=web"
                content="No CSS at all"
              />
            </li>
          </ul>
        </section>
        <hr />
        {/* SEO */}
        <section className="stack">
          <div className="section-header">
            <h2 id="seo">6. Search engine optimization (SEO)</h2>
            <a href="#seo" aria-label="Link to SEO">
              🔍
            </a>
          </div>
          <p>
            I've created a <code>Meta.tsx</code> component which does all the heavy lifting
            regarding SEO. You can setup default props or feed it dynamically with data, depending
            on the context.
          </p>
        </section>
        <hr />
        {/* ON MY OWN BEHALF */}
        <section id="behalf" className="stack">
          <div className="section-header">
            <h2>7. On my own behalf</h2>
            <a href="#behalf" aria-label="Link to On my own behalf">
              🙇‍♂️
            </a>
          </div>
          <p>
            The main reason to create this template was to get started right away when creating a
            website, instead of copy and pasting from previous projects. The layout was somewhat
            inspired by one of my favorite records and album artworks, "Sunbather" by Deafheaven:
          </p>
          <picture>
            <img
              src="/sunbather.jpg"
              alt="Sunbather artwork by Deafheaven"
              width="1200"
              height="1200"
              loading="lazy"
            />
          </picture>

          <p>
            I will do my best to keep this project up-to-date, especially the security headers, as
            they seem to change every few years. I would also like to thank a bunch of people (I
            know and don't know personally), who helped me on my coding journey. In no particular
            order:
          </p>
          <ul>
            <li>
              <ExtLink url="https://www.spiced-academy.com/" content="Everyone at Spiced Academy" />
            </li>
            <li>
              <ExtLink url="https://deynfisk.de/" content="deynfisk" />
            </li>
            <li>
              <ExtLink url="https://leerob.io/" content="Lee Robinson" />
            </li>
            <li>
              <ExtLink url="https://cassidoo.co/" content="Cassidy Williams" />
            </li>
            <li>
              <ExtLink url="https://www.traversymedia.com/" content="Traversy Media" />
            </li>
            <li>
              <ExtLink url="https://www.freecodecamp.org/" content="freeCodeCamp" />
            </li>
          </ul>
        </section>
        {/* FOOTER */}
        <footer>
          <p>© 2021 Steve Frenzel</p>
        </footer>
      </main>
    </div>
  );
}
