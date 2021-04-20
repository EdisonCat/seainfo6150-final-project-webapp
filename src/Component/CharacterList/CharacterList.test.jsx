import React from "react";
import CharacterList from "./CharacterList";
it("rendered CharacterList correctly", () => {
	// eslint-disable-next-line no-undef
    const { container } = render(<CharacterList />);
    expect(container).toMatchSnapshot();
});