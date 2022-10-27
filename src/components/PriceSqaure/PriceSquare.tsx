import React from 'react';
import './PriceSquare.scss';

interface PriceSquareProps {
  pricePerNight: string;
  frequency: 'night' | 'day' | 'week' | 'month';
}

export function PriceSquare({ pricePerNight, frequency }: PriceSquareProps) {
  return (
    <div className='PriceSquare'>
      <div className='PriceSquare__price-text'>{pricePerNight}</div>
      <div className='PriceSquare__frequency-text'>{`/${frequency}`}</div>
    </div>
  );
}
