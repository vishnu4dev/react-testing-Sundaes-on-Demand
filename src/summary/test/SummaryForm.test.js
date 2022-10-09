import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";

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
    userEvent.click(checkbox);
    expect(button).toBeEnabled();
    userEvent.click(checkbox);
    expect(button).toBeDisabled();
  });

  test("Popover event on mouse hover", async () => {
    render(<SummaryForm />);
    //popover starts out hidden
    const nullPoppover = screen.queryByText(
      /no ice cream will actually be delivered/
    );
    expect(nullPoppover).not.toBeInTheDocument();

    //on mouse hover
    const termsAndConditions = screen.getByText(/Terms & Condition/i);
    userEvent.hover(termsAndConditions);
    const popover = screen.getByText(/no ice cream will actually be delivered/);
    expect(popover).toBeInTheDocument();

    //on unhover
    userEvent.unhover(termsAndConditions);
    const nullPoppoverAgain = screen.queryByText(
      /no ice cream will actually be delivered/
    );
    waitForElementToBeRemoved(() => {
      expect(popover).not.toBeInTheDocument();
    });
  });
});
