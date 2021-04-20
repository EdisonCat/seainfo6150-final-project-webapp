import React from "react";
import Login from "./Login";
it("rendered Login correctly", () => {
	// eslint-disable-next-line no-undef
    const { container } = render(<Login />);
    expect(container).toMatchSnapshot();
});