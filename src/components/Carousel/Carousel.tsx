import React, { ReactElement } from 'react';
import ReactCarousel from 'react-carousel-light';

interface CarouselProps {
  scrollDuration: number;
  scrollLength: number;
  children: JSX.Element;
}

export function Carousel({ scrollDuration, scrollLength, children }: CarouselProps): ReactElement {
  return (
    <ReactCarousel
      navButtonScrollDuration={scrollDuration}
      navButtonScrollLength={scrollLength}
      wrapperStyle={{ width: '460px' }}
      listStyle={{ paddingLeft: '52px' }}
    >
      {children}
    </ReactCarousel>
  );
}
