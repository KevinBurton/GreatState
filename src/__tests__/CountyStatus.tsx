import React from "react"
import { render } from "@testing-library/react"
import CountyStatus, { CountyStatusFeature } from "../components/CountyStatus"
describe("CountyStatus", () => {
  test("renders CountyStatus without crashing", async () => {
    const features: CountyStatusFeature[] = [
      {
        attributes: {
          GEO: "test",
          NAME: "test",
          POSITIVE: 0,
          NEGATIVE: 0,
          DEATHS: 0,
          OBJECTID: 0,
          GEOID: "test",
          POP: 0,
          LoadDttm: 0,
          PCT_POP_65: 0,
          PCT_SMK: 0,
          PCT_COPD: 0,
          PCT_CVD: 0,
          PCT_DIAB: 0,
          POP_65_WI: 0,
          SMK_WI: 0,
          COPD_WI: 0,
          CVD_WI: 0,
          DIAB_WI: 0,
          DATE: 0,
          Shape__Area: 0,
          Shape__Length: 0,
        },
      },
    ]
    const { container } = render(<CountyStatus features={features} />)
    expect(container).toMatchInlineSnapshot(`
      <div>
        <table>
          <thead>
            <tr>
              <th>
                GEO
              </th>
              <th>
                NAME
              </th>
              <th>
                POSITIVE
              </th>
              <th>
                NEGATIVE
              </th>
              <th>
                DEATHS
              </th>
              <th>
                OBJECTID
              </th>
              <th>
                GEOID
              </th>
              <th>
                POP
              </th>
              <th>
                LoadDttm
              </th>
              <th>
                PCT_POP_65
              </th>
              <th>
                PCT_SMK
              </th>
              <th>
                PCT_COPD
              </th>
              <th>
                PCT_CVD
              </th>
              <th>
                PCT_DIAB
              </th>
              <th>
                POP_65_WI
              </th>
              <th>
                SMK_WI
              </th>
              <th>
                COPD_WI
              </th>
              <th>
                CVD_WI
              </th>
              <th>
                DIAB_WI
              </th>
              <th>
                DATE
              </th>
              <th>
                Shape__Area
              </th>
              <th>
                Shape__Length
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
                0
              </td>
              <td>
                0
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
                0
              </td>
              <td>
                0
              </td>
              <td>
                0
              </td>
              <td>
                0
              </td>
              <td>
                0
              </td>
              <td>
                0
              </td>
              <td>
                0
              </td>
              <td>
                0
              </td>
              <td>
                0
              </td>
              <td>
                0
              </td>
              <td>
                0
              </td>
              <td>
                0
              </td>
              <td>
                0
              </td>
              <td>
                0
              </td>
              <td>
                0
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    `)
  })
})
