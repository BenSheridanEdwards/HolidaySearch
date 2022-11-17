import React from "react";
import { render, screen } from "@testing-library/react";
import { PriceSquare } from "./PriceSquare";

describe("PriceSquare component", () => {
  beforeEach(() => {
    render(<PriceSquare pricePerNight="£100" frequency="night" />);
  });

  it("renders without error", () => {
    expect(screen).not.toBeNull();
  });

  it("renders the price amount", () => {
    screen.getByText("£100");
  });

  it("renders the price frequency", () => {
    screen.getByText("/night");
  });
});
