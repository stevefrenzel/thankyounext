import type { NextPage } from 'next'

interface Props {
  content: string
}

const SkipLink: NextPage<Props> = ({ content }) => {
  return (
    <a
      href="#main"
      className="
        absolute
        top-0
        right-full
        mt-2
        p-2
        active:underline
        active:bg-blue-500
        active:text-white
        active:right-auto
        focus:underline
        focus:bg-blue-500
        focus:text-white
        focus:right-auto"
    >
      {content}
    </a>
  )
}

export default SkipLink
