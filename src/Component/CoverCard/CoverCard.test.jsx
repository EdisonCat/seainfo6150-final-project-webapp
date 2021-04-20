import React from "react";
import CoverCard from "./CoverCard.jsx";
it("rendered CoverCard correctly", () => {
    const show = {
        thumbnail: "",
    };
	// eslint-disable-next-line no-undef
    const { container } = render(<CoverCard show={show}/>);
    expect(container).toMatchSnapshot();
});