import React, { ReactElement } from 'react';

interface Props {
  url: string;
  content: string;
}

export default function ExternalLink({ url, content }: Props): ReactElement {
  return (
    <a href={url} rel="noopener noreferrer" className="external-link">
      {content}
    </a>
  );
}
