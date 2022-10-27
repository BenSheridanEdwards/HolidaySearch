import React, { ChangeEventHandler } from 'react';
import './Searchbox.scss';

interface SearchboxProps {
  placeholderText: string;
  onChangeHandler: ChangeEventHandler;
  value: string;
}

export function Searchbox({ placeholderText, onChangeHandler, value }: SearchboxProps) {
  return (
    <input
      className='Searchbox'
      name='searchbox'
      type='search'
      placeholder={placeholderText}
      onChange={onChangeHandler}
      value={value}
    />
  );
}
