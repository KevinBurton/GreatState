import React from "react"
import { render, fireEvent } from "@testing-library/react"
import Slider from "../components/Slider"
describe("Slider", () => {
  test("renders Slider without crashing", async () => {
    const plates = [
      { weight: 45, count: 0, greater: 90 },
      { weight: 25, count: 2, greater: 50 },
      { weight: 15, count: 0, greater: 30 },
      { weight: 10, count: 0, greater: 20 },
      { weight: 5, count: 0, greater: 10 },
      { weight: 2.5, count: 2, greater: 5 },
    ]
    const value = 100
    const handleChange = jest.fn()
    const { container } = render(
      <Slider
        plates={plates}
        value={value}
        handleChange={e => handleChange(e)}
      />
    )
    expect(container).toMatchInlineSnapshot(`
      <div>
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
      </div>
    `)
  })
  test("changess Slider without crashing", async () => {
    const plates = [
      { weight: 45, count: 0, greater: 90 },
      { weight: 25, count: 2, greater: 50 },
      { weight: 15, count: 0, greater: 30 },
      { weight: 10, count: 0, greater: 20 },
      { weight: 5, count: 0, greater: 10 },
      { weight: 2.5, count: 2, greater: 5 },
    ]
    const value = 100
    const handleChange = jest.fn()
    const { container, getByRole } = render(
      <Slider
        plates={plates}
        value={value}
        handleChange={e => handleChange(e)}
      />
    )
    const input = getByRole('slider');
    fireEvent.change(input, {target: {value: 110}});
    expect(handleChange).toHaveBeenCalled()
  })
})
