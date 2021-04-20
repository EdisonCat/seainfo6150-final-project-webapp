import React from "react";
import Trailer from "./Trailer";
it("rendered Trailer correctly", () => {
	// eslint-disable-next-line no-undef
    const { container } = render(<Trailer />);
    expect(container).toMatchSnapshot();
});