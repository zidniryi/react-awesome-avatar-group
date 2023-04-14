import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  test("renders the text correctly", () => {
    render(<App />);
    const textElement = screen.getByText("Example Component")
    expect(textElement).toBeInTheDocument();
  });


});