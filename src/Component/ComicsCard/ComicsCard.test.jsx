import React from "react";
import ComicsCard from "./ComicsCard";
it("rendered ComicsCard correctly", () => {
	const item = {
		id: 0,
		title: "",
		name: "",
		thumbnail: {
			path: "",
			extension: "",
		},
	};
	// eslint-disable-next-line no-undef
	const { container } = render(<ComicsCard item={item} />);
	expect(container).toMatchSnapshot();
});