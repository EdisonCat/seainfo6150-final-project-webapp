import React from "react";
import SignUp from "./SignUp";
it("rendered SignUp correctly", () => {
	// eslint-disable-next-line no-undef
    const { container } = render(<SignUp />);
    expect(container).toMatchSnapshot();
});