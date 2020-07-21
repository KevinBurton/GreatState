import React from "react";
import { render } from "@testing-library/react";
import { PureResources } from '../pages/resources';
describe("Resources", () => {
  test("renders Resources without crashing", async () => {
    const { container } = render(<PureResources />);
    // render should show the title
    expect(container).toMatchInlineSnapshot(`
      <div>
        <h2>
          Resources
        </h2>
        <ul>
          <li>
            FAQ
          </li>
          <li>
            Membership Policies
          </li>
          <li>
            News & Updates
          </li>
        </ul>
      </div>
    `);
  });
});
