import React from "react";
import { render, screen } from "@testing-library/react";
import { TrayHeaderWrapper } from "./TrayHeaderWrapper";

describe("TrayHeaderWrapper component", () => {
  beforeEach(() => {
    render(
      <TrayHeaderWrapper>
        <h1>Heading text</h1>
      </TrayHeaderWrapper>,
    );
  });

  it("renders without error", () => {
    expect(screen).not.toBeNull();
  });

  it("renders tray header children", () => {
    screen.getByRole("heading", { name: /Heading text/i });
  });
});
