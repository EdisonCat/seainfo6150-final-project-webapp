import React from "react";
import Success from "./Success";
it("rendered Success correctly", () => {
	// eslint-disable-next-line no-undef
    const { container } = render(<Success />);
    expect(container).toMatchSnapshot();
});