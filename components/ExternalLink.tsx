import type { NextPage } from 'next'

interface Props {
  text: string
  url: string
}

const ExternalLink: NextPage<Props> = ({ url, text }) => {
  return (
    <a
      href={url}
      rel="noopener noreferrer"
      className="
        underline
        after:content-['_↗']
        transition
        hover:bg-black
        hover:text-white
        hover:rounded-sm
        focus:bg-black
        focus:text-white
        focus:rounded-sm
        active:bg-black
        active:text-white
        active:rounded-sm
      "
    >
      {text}
    </a>
  )
}

export default ExternalLink
