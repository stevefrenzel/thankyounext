import type { NextPage } from 'next'
import Meta from 'components/Meta'
import SkipLink from 'components/SkipLink'
import ExternalLink from 'components/ExternalLink'

const DeleteMe: NextPage = () => {
  return (
    <div
      className="
      font-sans
      p-4
      sm:p-12
      flex
      flex-col
      bg-gradient-to-b
      from-white
      to-rose-300
      h-screen
      overflow-auto"
    >
      <SkipLink content="Skip to main content" />
      <div className="max-w-3xl mx-auto">
        <Meta />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 sm:mb-12 text-center">
          Thank&shy;You&shy;Next 🖤
        </h1>
        <p className="text-2xl sm:text-3xl md:text-4xl mb-6 leading-normal font-semibold">
          A highly performant and accessible{' '}
          <ExternalLink text="Next.js" url="https://nextjs.org/" /> starter
          template.
        </p>
        <main id="main" className="text-xl sm:text-2xl md:text-3xl pb-8">
          <p className="leading-normal mb-6">
            It&apos;s meant to be <em>easy to use</em>,{' '}
            <em>fun to work with</em> and <em>very performant</em>. It was
            bootstrapped with{' '}
            <ExternalLink
              text="create-next-app"
              url="https://nextjs.org/docs/api-reference/create-next-app"
            />{' '}
            and has the following features, among others:
          </p>
          <ul className="list-disc list-inside leading-normal mb-6" role="list">
            <li>
              <ExternalLink text="Preact" url="https://preactjs.com/" />
            </li>
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
            className="
              after:content-['_↗']
              bg-green-500
              text-white
              p-3
              rounded-md
              animate-bounce
              text-xl
              drop-shadow-lg
              motion-safe:animate-pulse
              hover:animate-none
              focus:animate-none
              active:animate-none
              "
            href="https://github.com/stevefrenzel/thankyounext/generate"
            rel="noopener noreferrer"
          >
            Use this template
          </a>
        </main>
      </div>
    </div>
  )
}

export default DeleteMe
