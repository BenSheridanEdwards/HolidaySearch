import React from "react";

interface PriceSquareProps {
  pricePerNight: string;
  frequency: "night" | "day" | "week" | "month";
}

export function PriceSquare({ pricePerNight, frequency }: PriceSquareProps) {
  return (
    <div className="flex h-20 w-20 flex-col items-center justify-center rounded-lg bg-dark p-3">
      <p className="text-xl font-semibold text-light">{pricePerNight}</p>
      <p className="text-sm text-gray-200">{`/${frequency}`}</p>
    </div>
  );
}
