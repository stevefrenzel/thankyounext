import type { NextPage } from 'next'

interface Props {
  content: string
}

const SkipLink: NextPage<Props> = ({ content }) => {
  return (
    <a
      href="#main"
      className="inline-block absolute bg-blue-600 text-white text-xl p-6 mt-2 ml-2 rounded-md hover:underline focus:underline"
    >
      {content}
    </a>
  )
}

export default SkipLink
