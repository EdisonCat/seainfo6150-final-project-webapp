import React from "react";
import ComicsDetail from "./ComicsDetail";
it("rendered ComicsDetail correctly", () => {
	// eslint-disable-next-line no-undef
    const { container } = render(<ComicsDetail />);
    expect(container).toMatchSnapshot();
});