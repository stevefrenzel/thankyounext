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
      className="underline after:content-['_↗']"
    >
      {text}
    </a>
  )
}

export default ExternalLink
