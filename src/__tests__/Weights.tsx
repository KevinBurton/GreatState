import React from "react"
import { render } from "@testing-library/react"

import { PureWeights } from "../pages/weights"

describe("Weights", () => {
  test("renders Weights without crashing", async () => {
    const { container } = render(<PureWeights />)
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="page-wrap"
        >
          <div
            class="weight-slider"
          >
            <h2>
              How Many Plates Do You Need?
            </h2>
            <input
              max="600"
              min="5"
              step="5"
              type="range"
              value="100"
            />
            <div>
              100
               lbs.
            </div>
          </div>
          <section>
            <div
              class="plates-display"
            >
              <div
                class="plates-left"
              >
                <span
                  data-weight="2.5"
                />
                <span
                  data-weight="25"
                />
              </div>
              <div
                class="plates-right"
              >
                <span
                  data-weight="25"
                />
                <span
                  data-weight="2.5"
                />
              </div>
            </div>
            <div
              class="plates-list"
            >
              <div>
                Assuming a 
                45
                 lb. bar.
              </div>
              <ul>
                <li>
                  2
                   × 
                  25
                   lb. plates
                </li>
                <li>
                  2
                   × 
                  2.5
                   lb. plates
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    `)
  })
})
