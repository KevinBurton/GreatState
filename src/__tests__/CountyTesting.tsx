import React from "react"
import { render } from "@testing-library/react"
import CountyTesting, {
  CountyTestingFeature,
} from "../components/CountyTesting"
describe("CountyStatus", () => {
  test("renders CountyStatus without crashing", async () => {
    const features: CountyTestingFeature[] = [
      {
        attributes: {
          OBJECTID: 0,
          CT_ID: "test",
          CMNTY_SRVD: "test",
          NAME: "test",
          TYPE: "test",
          COUNTY: "test",
          ADDRESS: "test",
          CITY: "test",
          STATE: "test",
          ZIP: 0,
          LAT: 0,
          LON: 0,
          STATUS: "test",
          ACTIVE: "test",
          LOC_DISC: "test",
          DATES: "test",
          HOURS: "test",
          PROCESS: "test",
          PHONE: "test",
          PHONE2: "test",
          CONTACT: "test",
          CONTACT2: "test",
        },
      },
    ]
    const { container } = render(<CountyTesting features={features} />)
    expect(container).toMatchInlineSnapshot(`
      <div>
        <table>
          <thead>
            <tr>
              <th>
                CT_ID
              </th>
              <th>
                CMNTY_SRVD
              </th>
              <th>
                NAME
              </th>
              <th>
                TYPE
              </th>
              <th>
                COUNTY
              </th>
              <th>
                ADDRESS
              </th>
              <th>
                CITY
              </th>
              <th>
                STATE
              </th>
              <th>
                LAT
              </th>
              <th>
                LON
              </th>
              <th>
                STATUS
              </th>
              <th>
                ACTIVE
              </th>
              <th>
                LOC_DISC
              </th>
              <th>
                DATES
              </th>
              <th>
                HOURS
              </th>
              <th>
                PROCESS
              </th>
              <th>
                PHONE
              </th>
              <th>
                PHONE2
              </th>
              <th>
                CONTACT
              </th>
              <th>
                CONTACT2
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                test
              </td>
              <td>
                test
              </td>
              <td>
                test
              </td>
              <td>
                test
              </td>
              <td>
                test
              </td>
              <td>
                test
              </td>
              <td>
                test
              </td>
              <td>
                test
              </td>
              <td>
                0
              </td>
              <td>
                0
              </td>
              <td>
                test
              </td>
              <td>
                test
              </td>
              <td>
                test
              </td>
              <td>
                test
              </td>
              <td>
                test
              </td>
              <td>
                test
              </td>
              <td>
                test
              </td>
              <td>
                test
              </td>
              <td>
                <a
                  href="test"
                >
                  test
                </a>
              </td>
              <td>
                test
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    `)
  })
})
