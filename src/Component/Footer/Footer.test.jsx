import React from "react";
import Footer from "./Footer.jsx";

it("renders the Footer component correctly", () => {
	// eslint-disable-next-line no-undef
  const { container } = render(<Footer />);
  expect(container).toMatchSnapshot();
});
