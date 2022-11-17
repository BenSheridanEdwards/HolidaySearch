import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FormWrapper } from "./FormWrapper";

const mockOnSubmitHandler = jest.fn(e => e.preventDefault());

describe("FormWrapper component", () => {
  beforeEach(() => {
    render(
      <FormWrapper onSubmitHandler={mockOnSubmitHandler}>
        <button type="submit">Submit</button>
      </FormWrapper>,
    );
  });

  it("renders without error", () => {
    expect(screen).not.toBeNull();
  });

  it("renders children", () => {
    screen.getByRole("button", { name: /Submit/i });
  });

  it("calls the submit handler when the submit button is clicked", async () => {
    const submitButton = screen.getByRole("button", { name: /Submit/i });
    userEvent.click(submitButton);

    await waitFor(() => {
      expect(mockOnSubmitHandler).toHaveBeenCalled();
    });
  });
});
