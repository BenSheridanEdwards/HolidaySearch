import React, { ReactElement } from "react";
import ReactCarousel from "react-carousel-light";

interface CarouselProps {
  scrollDuration: number;
  scrollLength: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
}

export function Carousel({ scrollDuration, scrollLength, children }: CarouselProps): ReactElement {
  return (
    <ReactCarousel
      navButtonScrollDuration={scrollDuration}
      navButtonScrollLength={scrollLength}
      wrapperStyle={{ width: "460px" }}
      listStyle={{ paddingInline: "66px", gap: "32px" }}
    >
      {children}
    </ReactCarousel>
  );
}
