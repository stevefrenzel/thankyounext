import type { NextPage } from 'next'

interface Props {
  url: string
  content: string
}

const ExternalLink: NextPage<Props> = ({ url, content }) => {
  return (
    <a href={url} rel="noopener noreferrer">
      {content}
    </a>
  )
}

export default ExternalLink
