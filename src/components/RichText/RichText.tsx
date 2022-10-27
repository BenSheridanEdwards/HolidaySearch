import React from 'react';

interface RichTextProps {
  html: { __html: string };
}

export function RichText({ html }: RichTextProps) {
  return <div dangerouslySetInnerHTML={html} />;
}
