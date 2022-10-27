import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

interface CardProps {
  children: ReactNode;
  coverImageUrl: string;
  imageDescription: string;
  linkUrl?: string;
}

export function Card({ children, coverImageUrl, imageDescription, linkUrl }: CardProps) {
  if (linkUrl) {
    return (
      <Link to={linkUrl} className='Card__link-wrapper'>
        <article className='Card'>
          <div className='Card__image-container'>
            <img className='Card__image' src={coverImageUrl} alt={imageDescription} />
          </div>
          <div className='Card__contents'>{children}</div>
        </article>
      </Link>
    );
  }

  return (
    <article className='Card'>
      <div className='Card__image-container'>
        <img className='Card__image' src={coverImageUrl} alt={imageDescription} />
      </div>
      <div className='Card__contents'>{children}</div>
    </article>
  );
}
