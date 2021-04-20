import React from "react";
import Sidebar from "./Sidebar";
it("rendered sidebar correctly", () => {
	// eslint-disable-next-line no-undef
	const { container } = render(<Sidebar />);
	expect(container).toMatchSnapshot();
});
