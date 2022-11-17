import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event/";
import { Searchbox } from "./Searchbox";

const mockOnChangeCallback = jest.fn();

describe("Searchbox component", () => {
  beforeEach(() => {
    render(
      <Searchbox
        onChangeCallback={mockOnChangeCallback}
        placeholderText="Search"
      />,
    );
  });

  it("renders without error", () => {
    expect(screen).not.toBeNull();
  });

  it("renders the searchbox", () => {
    screen.getByRole("searchbox");
  });

  it("renders the placeholder text", () => {
    screen.getByPlaceholderText("Search");
  });

  it("displays typed text in the input", async () => {
    const searchbox = screen.getByRole("searchbox");

    userEvent.type(searchbox, "test");

    await waitFor(() => {
      expect(searchbox).toHaveValue("test");
    });
  });
});
