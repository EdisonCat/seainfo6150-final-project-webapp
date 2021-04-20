import React from "react";
import Home from "./Home.jsx";

it("renders the home component correctly", () => {
	// eslint-disable-next-line no-undef
  const { container } = render(<Home />);
  expect(container).toMatchSnapshot();
});
