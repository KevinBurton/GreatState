import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import NavMenu from '../components/NavMenu';
describe('NavMenu', () => {
    test("renders NavMenu without crashing", async () => {
        const { getByText } = render(<MemoryRouter>
                                         <NavMenu />
                                     </MemoryRouter>);
        // render should show the title
        expect(getByText(/Getting Started/)).toBeInTheDocument();
    });
});