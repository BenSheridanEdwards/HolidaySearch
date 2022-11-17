import React from "react";
import { render, screen } from "@testing-library/react";
import { LoadingSpinner } from "./LoadingSpinner";

describe("LoadingSpinner", () => {
  beforeEach(() => {
    render(<LoadingSpinner />);
  });

  it("renders without error", () => {
    expect(screen).not.toBeNull();
  });

  it("renders the loading spinner", () => {
    screen.getByTestId("spinner");
  });
});
