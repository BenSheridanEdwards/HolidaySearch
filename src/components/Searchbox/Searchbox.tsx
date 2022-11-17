import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

interface SearchboxProps {
  placeholderText: string;
  onChangeCallback: Dispatch<SetStateAction<string>>;
}

export function Searchbox({
  placeholderText,
  onChangeCallback,
}: SearchboxProps) {
  const [searchValue, setSearchValue] = useState<string>("");

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.currentTarget;
    setSearchValue(value);
    onChangeCallback(value);
  }

  return (
    <input
      className="min-h-14 flex w-full rounded-2xl bg-light py-4 px-6 text-sm font-semibold text-dark placeholder-gray-400"
      name="searchbox"
      type="search"
      placeholder={placeholderText}
      onChange={handleChange}
      value={searchValue}
    />
  );
}
