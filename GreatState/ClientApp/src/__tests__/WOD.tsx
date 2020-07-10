import React from "react";
import { render } from "@testing-library/react";
import WOD from '../components/WOD';
describe("WOD", () => {
  test("renders WOD without crashing", async () => {
    const { container } = render(<WOD />);
    // rend should show the title
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div>
          WOD
        </div>
      </div>
    `);
  });
});
