import { fireEvent, render, screen } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

describe("Testing Summary From ", () => {
  test("Checkbox is unchecked by default", () => {
    render(<SummaryForm />);
    const Checkbox = screen.getByRole("checkbox", {
      name: /Terms & Condition/i,
    });
    expect(Checkbox).not.toBeChecked();
  });
  test("checkbox when check enabled submit button", () => {
    render(<SummaryForm />);
    const button = screen.getByRole("button", { name: "Confirm order" });
    const checkbox = screen.getByRole("checkbox", {
      name: /Terms & Condition/i,
    });
    fireEvent.click(checkbox);
    expect(button).toBeEnabled();
    fireEvent.click(checkbox);
    expect(button).toBeDisabled();
  });
});
