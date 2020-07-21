import React from "react";
import { render } from "@testing-library/react";
import NavMenu from '../components/NavMenu';
describe('NavMenu', () => {
    test("renders NavMenu without crashing", async () => {
        const { getByText } = render(<NavMenu />);
        // render should show the title
        expect(getByText(/Getting Started/)).toBeInTheDocument();
    });
});