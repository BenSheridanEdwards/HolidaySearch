import React from "react";
import { render, screen } from "@testing-library/react";
import { PageHeaderWrapper } from "./PageHeaderWrapper";

describe("PageHeaderWrapper component", () => {
  beforeEach(() => {
    render(
      <PageHeaderWrapper>
        <h1>Heading text</h1>
      </PageHeaderWrapper>,
    );
  });

  it("renders without error", () => {
    expect(screen).not.toBeNull();
  });

  it("renders header children", () => {
    screen.getByRole("heading", { name: /Heading text/i });
  });
});
