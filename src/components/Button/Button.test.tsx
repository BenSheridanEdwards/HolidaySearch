import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";

const mockOnClick = jest.fn();

describe("Button", () => {
  beforeEach(() => {
    render(<Button onClick={mockOnClick}>Button text</Button>);
  });

  it("renders without error", () => {
    expect(screen).not.toBeNull();
  });

  it("renders the button text correctly", () => {
    screen.getByRole("button", { name: /Button text/i });
  });

  it.skip("calls the onClick function when the button is clicked", async () => {
    userEvent.click(screen.getByRole("button", { name: /Button text/i }));
    await expect(mockOnClick).toHaveBeenCalled();
  });
});
