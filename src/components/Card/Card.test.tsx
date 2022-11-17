import React from "react";
import { render, screen } from "@testing-library/react";
import { Card } from "./Card";

describe("Card component", () => {
  beforeEach(() => {
    render(
      <Card coverImageUrl="http://www.imageurl.com" imageDescription="Image">
        Card children text
      </Card>,
    );
  });

  it("renders without error", () => {
    expect(screen).not.toBeNull();
  });

  it("renders the card", () => {
    screen.getByRole("article");
  });

  it("renders the card image", () => {
    screen.getByRole("img", { name: /Image/i });
  });

  it("renders the card children", () => {
    screen.getByText("Card children text");
  });

  it("renders the card link wrapper when a link url is given", () => {
    render(
      <Card
        coverImageUrl="http://www.imageurl.com"
        imageDescription="Image"
        linkUrl="http://www.test.com"
      >
        Card children text
      </Card>,
    );
    screen.getByRole("link");
  });
});
