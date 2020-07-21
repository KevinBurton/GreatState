import React from "react"
import { render } from "@testing-library/react"
import { PureLogin } from "../pages/login"
describe("Login", () => {
  test("renders Login without crashing", async () => {
    const { container } = render(<PureLogin />)
    // render should show the title
    expect(container).toMatchInlineSnapshot(`
      <div>
        <h2>
          Login
        </h2>
        <div />
      </div>
    `)
  })
})
