import React from "react"
import {screen, render} from "@testing-library/react"

import {CurrentDate} from "./current-date";

describe("CurrentDate", () => {
    it("should render the component", () => {
        render(<CurrentDate contentLanguage="en_US" message="World"/>);

        expect(screen.getByText(/Hello World/)).toBeInTheDocument();
    })
})
