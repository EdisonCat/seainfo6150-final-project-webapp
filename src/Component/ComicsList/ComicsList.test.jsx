import React from "react";
import ComicsList from "./ComicsList";
it("rendered ComicsList correctly", () => {
	// eslint-disable-next-line no-undef
    const { container } = render(<ComicsList />);
    expect(container).toMatchSnapshot();
});