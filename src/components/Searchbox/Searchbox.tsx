import React, { ChangeEventHandler } from "react";

interface SearchboxProps {
  placeholderText: string;
  onChangeHandler: ChangeEventHandler;
  value: string;
}

export function Searchbox({
  placeholderText,
  onChangeHandler,
  value,
}: SearchboxProps) {
  return (
    <input
      className="min-h-14 flex w-full rounded-2xl bg-light py-4 px-6 text-sm font-semibold text-dark placeholder-gray-400"
      name="searchbox"
      type="search"
      placeholder={placeholderText}
      onChange={onChangeHandler}
      value={value}
    />
  );
}
