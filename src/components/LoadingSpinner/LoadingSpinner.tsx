import React from "react";

export function LoadingSpinner() {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="timer animate-[curvedSpin_2s_ease-in-out_infinite]"
      data-testid="spinner"
    >
      <path d="M68 12L12 12" stroke="white" strokeWidth="8" />
      <path d="M68 69L12 69" stroke="white" strokeWidth="8" />
      <path
        d="M25.0013 55.5C24.7645 42 55.5013 40.5 55.5013 22V9"
        stroke="white"
        strokeWidth="8"
      />
      <path
        d="M55.5 55.5C55.7369 42 25 40.5 25 22V9M24 69H25"
        stroke="white"
        strokeWidth="8"
      />
      <path
        d="M25 55V71M55.5 54.5C55.5 66.1 55.5 70.1667 55.5 70.5V54.5Z"
        stroke="white"
        strokeWidth="8"
      />
    </svg>
  );
}
