import type { NextPage } from 'next'
import Meta from 'components/Meta'
import SkipLink from 'components/SkipLink'
import ExternalLink from 'components/ExternalLink'
import Footer from 'components/Footer'

const Home: NextPage = () => {
  return (
    <div className="font-sans px-4 sm:px-6 pb-4 sm:pb-6 flex flex-col bg-gradient-to-b from-white to-rose-300 h-screen overflow-auto">
      <div className="max-w-3xl mx-auto">
        <Meta />
        {/* <SkipLink content="Skip to main content" /> */}
        <h1 className="text-5xl sm:text-6xl font-bold my-8 sm:my-12">
          Thank&shy;You&shy;Next 🖤
        </h1>
        <p className="text-3xl sm:text-4xl mb-6 leading-normal font-semibold">
          A highly performant and accessible{' '}
          <ExternalLink text="Next.js" url="https://nextjs.org/" /> starter
          template.
        </p>
        <main id="main" className="text-2xl sm:text-3xl">
          <p className="leading-normal mb-6">
            It&apos;s meant to be <em>easy to use</em>,{' '}
            <em>fun to work with</em> and <em>very performant</em>. It was
            bootstrapped with{' '}
            <ExternalLink
              text="Create Next App"
              url="https://nextjs.org/docs/api-reference/create-next-app"
            />{' '}
            and has the following features:
          </p>
          <ul className="list-disc list-inside leading-normal mb-6" role="list">
            <li>
              <ExternalLink
                text="TypeScript"
                url="https://www.typescriptlang.org/"
              />
            </li>
            <li>
              <ExternalLink
                text="Tailwind CSS"
                url="https://tailwindcss.com/"
              />
            </li>
            <li>
              <ExternalLink text="Preact" url="https://preactjs.com/" />
            </li>
            <li>
              <ExternalLink
                text="Security headers"
                url="https://nextjs.org/docs/advanced-features/security-headers"
              />
            </li>
            <li>Ready-to-use SEO setup</li>
            <li>
              <ExternalLink
                text="Prettier config"
                url="https://prettier.io/docs/en/configuration.html"
              />
            </li>
            <li>Dark mode</li>
          </ul>
          <p className="mb-6">
            You can find the GitHub repository here:{' '}
            <ExternalLink
              text="ThankYouNext at GitHub"
              url="https://github.com/stevefrenzel/thankyounext"
            />
          </p>
          <p className="mb-6">Click here to use the template right away:</p>
          <a
            className="bg-green-500 text-white p-3 rounded-md animate-bounce text-2xl drop-shadow-lg"
            href="https://github.com/stevefrenzel/thankyounext/generate"
            rel="noopener noreferrer"
          >
            Use this template
          </a>
        </main>
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default Home
