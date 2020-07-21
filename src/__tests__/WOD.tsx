import React from "react";
import { render } from "@testing-library/react";
import { PureWOD } from '../pages/wod';
describe("WOD", () => {
  test("renders WOD without crashing", async () => {
    const { container } = render(<PureWOD />);
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
