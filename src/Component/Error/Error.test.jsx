import React from "react";
import Error from "./Error";

it("renders the Error component correctly", () => {
	// eslint-disable-next-line no-undef
  const { container } = render(<Error />);
  expect(container).toMatchSnapshot();
});
