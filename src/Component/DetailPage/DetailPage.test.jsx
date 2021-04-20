import React from "react";
import DetailPage from "./DetailPage.jsx";
it("rendered DetailPage correctly", () => {
	// eslint-disable-next-line no-undef
    const { container } = render(<DetailPage />);
    expect(container).toMatchSnapshot();
});