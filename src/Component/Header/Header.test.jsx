import React from "react";
import Header from "./Header";
import Sidebar from "../Sidebar/Sidebar";
it("rendered Header correctly", () => {
	// eslint-disable-next-line no-undef
	const { container } = render(<Header Sidebar={Sidebar} />);
	expect(container).toMatchSnapshot();
});