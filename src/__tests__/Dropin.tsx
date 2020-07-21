import React from "react";
import { render } from "@testing-library/react";
import { PureDropin } from '../pages/dropin';
describe("Dropin", () => {
  test("renders Dropin without crashing", async () => {
    const { container } = render(<PureDropin />);
    // render should show the title
    expect(container).toMatchInlineSnapshot(`
      <div>
        <h6>
          COMING TO TOWN ? WE LOVE VISITORS!
        </h6>
        <p>
          We would love to be a part of your Madison experience by having you drop -in while in town. We are literally walking distance from the Alliant Energy Center and only a few minutes from Downtown.
        </p>
        <p>
          From Downtown / the Alliant Energy Center, take John Nolen to Rimrock Road over the highway and we are on your right next to the Capitol Petrol gas station.
        </p>
        <p>
          From the beltline, take Rimrock Exit South, we are on your right next to the Capitol Petrol gas station.
        </p>
        <p>
          For all new drop - ins, please show up 10 - 15 minutes prior to class so we can get you all set before your workout.
        </p>
        <p>
          If you have any questions please call 608 - 338 - 8016
        </p>
        <div />
        <div>
          Loading...
        </div>
      </div>
    `);
  });
});
