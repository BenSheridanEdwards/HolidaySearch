import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";

const mockOnClick = jest.fn();

describe("Button component", () => {
  beforeEach(() => {
    render(<Button onClick={mockOnClick}>Button text</Button>);
  });

  it("renders without error", () => {
    expect(screen).not.toBeNull();
  });

  it("renders the button text correctly", () => {
    screen.getByRole("button", { name: /Button text/i });
  });

  it("renders a button with the type submit when a submit variant prop is passed", () => {
    render(
      <Button onClick={mockOnClick} variant="submit">
        Submit
      </Button>,
    );
    expect(screen.getByRole("button", { name: /Submit/i })).toHaveAttribute(
      "type",
      "submit",
    );
  });

  it("calls the onClick function when the button is clicked", async () => {
    const button = screen.getByRole("button", { name: /Button text/i });
    userEvent.click(button);

    await waitFor(() => {
      expect(mockOnClick).toHaveBeenCalled();
    });
  });
});
