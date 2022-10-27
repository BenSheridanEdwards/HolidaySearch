import React from 'react';
import DOMPurify from 'dompurify';

interface RichTextProps {
  htmlString: string;
}

export function RichText({ htmlString }: RichTextProps) {
  const cleanHtml = DOMPurify.sanitize(htmlString);
  return <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />;
}
