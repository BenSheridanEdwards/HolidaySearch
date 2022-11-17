import React from "react";
import { render, screen } from "@testing-library/react";
import { PageWrapper } from "./PageWrapper";

describe("PageWrapper component", () => {
  beforeEach(() => {
    render(
      <PageWrapper>
        <h1>Page text</h1>
      </PageWrapper>,
    );
  });

  it("renders without error", () => {
    expect(screen).not.toBeNull();
  });

  it("renders header children", () => {
    screen.getByRole("heading", { name: /Page text/i });
  });
});
