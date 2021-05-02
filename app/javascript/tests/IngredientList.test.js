import React from "react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, waitFor, screen, fireEvent } from "@testing-library/react";
import axiosMock from "axios";
import IngredientList from "../components/IngredientList";

describe("Load and interact with IngredientsList", () => {
  beforeEach(() => {
    const handleChange = jest.fn(() => {});

    render(
      <>
        <meta name="csrf-token" content="FAKE" />
        <IngredientList handleChange={handleChange} />
      </>
    );

    expect(screen.getByText("Loading..."));
  });

  test("after loaded, ingredients are visible", async () => {
    await waitFor(() => expect(screen.getByText("Cheese")));
  });

  test("clicking ingredients affects checkboxes", async () => {
    await waitFor(() => expect(screen.getByText("Cheese")));

    fireEvent.click(screen.getByLabelText("Cheese"));
    await waitFor(() =>
      expect(screen.getByLabelText("Cheese").checked).toEqual(true)
    );

    fireEvent.click(screen.getByLabelText("Cheese"));
    await waitFor(() =>
      expect(screen.getByLabelText("Cheese").checked).toEqual(false)
    );
  });
});
