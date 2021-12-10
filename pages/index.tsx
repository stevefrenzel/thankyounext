import type { NextPage } from 'next'
import Meta from 'components/Meta'
import SkipLink from 'components/SkipLink'
import Footer from 'components/Footer'

const Home: NextPage = () => {
  return (
    <div className="font-serif h-screen px-4 flex flex-col justify-center items-center max-w-3xl mx-auto">
      {/* <Meta /> */}
      {/* <SkipLink content="Skip to main content" /> */}
      <h1 className="text-6xl font-bold">ThankYouNext 🖤</h1>
      <br />
      <p className="text-4xl">
        A highly performant and accessible Next.js starter template
      </p>
      <br />
      <main id="main" className="text-4xl">
        <p>
          This Next.js starter template is meant to be easy to use, fun to work
          with and very performant. It was bootstrapped with create-next-app and
          has the following features:
        </p>
        <br />
        <ul className="list-disc list-inside" role="list">
          <li>TypeScript</li>
          <li>Tailwind CSS</li>
          <li>Preact</li>
          <li>Ready-to-use SEO setup</li>
          <li>Security headers</li>
          <li>Prettier config</li>
          <li>Dark mode</li>
        </ul>
      </main>
      <Footer />
    </div>
  )
}

export default Home
