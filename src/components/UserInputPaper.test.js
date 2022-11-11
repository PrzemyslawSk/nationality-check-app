import { act } from "react-dom/test-utils";
import UserInputPaper from "./UserInputPaper";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const fakeData = {
  country: [
    { country_id: "PL", probability: 0.862 },
    { country_id: "IE", probability: 0.034 },
    { country_id: "NO", probability: 0.02 },
    { country_id: "GB", probability: 0.014 },
    { country_id: "NL", probability: 0.008 },
  ],
  name: "Przemek",
};

it("Checks if component <UserInputPaper/> renders", () => {
  const inputName = { name: "" };
  const handleChange = jest.fn();
  const onClickGetJson = jest.fn();

  act(() => {
    render(
      <UserInputPaper
        inputName={inputName}
        handleChange={handleChange}
        onClickGetJson={onClickGetJson}
      />
    );
  });

  expect(screen.getByTestId("UserInputPaper--h5")).toHaveTextContent(
    "Type name"
  );
});

it("Types 'Przemek' to input", async () => {
  const user = userEvent.setup();
  const inputName = { name: "" };
  const handleChange = jest.fn();
  const onClickGetJson = jest.fn();

  act(() => {
    render(
      <UserInputPaper
        inputName={inputName}
        handleChange={handleChange}
        onClickGetJson={onClickGetJson}
      />
    );
  });

  const input = screen.getByTestId("UserInputPaper--input");
  await user.type(input, "Przemek");
  await waitFor(() => {
    expect(handleChange).toHaveBeenCalled();
  });
});
