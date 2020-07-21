import React from "react"
import { render } from "@testing-library/react"
import Plates from "../components/Plates"
describe("Plates", () => {
  test("renders Plates without crashing", async () => {
    const plates = [
      { weight: 45, count: 0, greater: 90 },
      { weight: 25, count: 2, greater: 50 },
      { weight: 15, count: 0, greater: 30 },
      { weight: 10, count: 0, greater: 20 },
      { weight: 5, count: 0, greater: 10 },
      { weight: 2.5, count: 2, greater: 5 },
    ]
    const { container } = render(<Plates plates={plates} />)
    // rend should show the title
    expect(container).toMatchInlineSnapshot(`
      <div>
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
    `)
  })
})
