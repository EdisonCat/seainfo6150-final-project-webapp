import React from "react";
import CharacterCard from "./CharacterCard";
it("rendered CharacterCard correctly", () => {
    const data = {
        id: 0,
        name: "",
        thumbnail: {
            path: "",
            extension: ""
        }
    }
	// eslint-disable-next-line no-undef
    const { container } = render(<CharacterCard data={data}/>);
    expect(container).toMatchSnapshot();
});