import React from "react";
import { render, screen } from "@testing-library/react";
import { Tray } from "./Tray";

describe("Tray component", () => {
  beforeEach(() => {
    render(
      <Tray>
        <h1>Heading text</h1>
      </Tray>,
    );
  });

  it("renders without error", () => {
    expect(screen).not.toBeNull();
  });

  it("renders tray children", () => {
    screen.getByRole("heading", { name: /Heading text/i });
  });
});
