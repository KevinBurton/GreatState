import React from "react";
import { render } from "@testing-library/react";
import CovidTesting, {
  CovidTestingFeature,
} from "../components/Covid/CovidTesting";
describe("CovidTesting", () => {
  test("renders CovidStatus without crashing", async () => {
    const features: CovidTestingFeature[] = [
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
    ];
    const { container } = render(<CovidTesting features={features} />);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="MuiGrid-root makeStyles-grid-8 MuiGrid-container"
        >
          <div
            class="MuiGrid-root makeStyles-grid-9 MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-12"
          >
            <div
              class="makeStyles-card-10"
            >
              <div
                class="makeStyles-cardHeader-14 makeStyles-warningCardHeader-18"
              >
                <h4
                  class="makeStyles-cardTitleWhite-7"
                >
                  Wisconsin Testing Centers
                </h4>
                <p
                  class="makeStyles-cardCategoryWhite-5"
                >
                  New employees on 15th September, 2016
                </p>
              </div>
              <div
                class="makeStyles-cardBody-24"
              >
                <div
                  class="makeStyles-tableResponsive-37"
                >
                  <table
                    class="MuiTable-root makeStyles-table-34"
                  >
                    <thead
                      class="MuiTableHead-root makeStyles-warningTableHeader-27"
                    >
                      <tr
                        class="MuiTableRow-root makeStyles-tableHeadRow-38 MuiTableRow-head"
                      >
                        <th
                          class="MuiTableCell-root MuiTableCell-head makeStyles-tableCell-36 makeStyles-tableHeadCell-35"
                          scope="col"
                        >
                          CT_ID
                        </th>
                        <th
                          class="MuiTableCell-root MuiTableCell-head makeStyles-tableCell-36 makeStyles-tableHeadCell-35"
                          scope="col"
                        >
                          CMNTY_SRVD
                        </th>
                        <th
                          class="MuiTableCell-root MuiTableCell-head makeStyles-tableCell-36 makeStyles-tableHeadCell-35"
                          scope="col"
                        >
                          NAME
                        </th>
                        <th
                          class="MuiTableCell-root MuiTableCell-head makeStyles-tableCell-36 makeStyles-tableHeadCell-35"
                          scope="col"
                        >
                          TYPE
                        </th>
                        <th
                          class="MuiTableCell-root MuiTableCell-head makeStyles-tableCell-36 makeStyles-tableHeadCell-35"
                          scope="col"
                        >
                          COUNTY
                        </th>
                        <th
                          class="MuiTableCell-root MuiTableCell-head makeStyles-tableCell-36 makeStyles-tableHeadCell-35"
                          scope="col"
                        >
                          ADDRESS
                        </th>
                        <th
                          class="MuiTableCell-root MuiTableCell-head makeStyles-tableCell-36 makeStyles-tableHeadCell-35"
                          scope="col"
                        >
                          CITY
                        </th>
                        <th
                          class="MuiTableCell-root MuiTableCell-head makeStyles-tableCell-36 makeStyles-tableHeadCell-35"
                          scope="col"
                        >
                          STATE
                        </th>
                        <th
                          class="MuiTableCell-root MuiTableCell-head makeStyles-tableCell-36 makeStyles-tableHeadCell-35"
                          scope="col"
                        >
                          LAT
                        </th>
                        <th
                          class="MuiTableCell-root MuiTableCell-head makeStyles-tableCell-36 makeStyles-tableHeadCell-35"
                          scope="col"
                        >
                          LON
                        </th>
                        <th
                          class="MuiTableCell-root MuiTableCell-head makeStyles-tableCell-36 makeStyles-tableHeadCell-35"
                          scope="col"
                        >
                          STATUS
                        </th>
                        <th
                          class="MuiTableCell-root MuiTableCell-head makeStyles-tableCell-36 makeStyles-tableHeadCell-35"
                          scope="col"
                        >
                          ACTIVE
                        </th>
                        <th
                          class="MuiTableCell-root MuiTableCell-head makeStyles-tableCell-36 makeStyles-tableHeadCell-35"
                          scope="col"
                        >
                          LOC_DISC
                        </th>
                        <th
                          class="MuiTableCell-root MuiTableCell-head makeStyles-tableCell-36 makeStyles-tableHeadCell-35"
                          scope="col"
                        >
                          DATES
                        </th>
                        <th
                          class="MuiTableCell-root MuiTableCell-head makeStyles-tableCell-36 makeStyles-tableHeadCell-35"
                          scope="col"
                        >
                          HOURS
                        </th>
                        <th
                          class="MuiTableCell-root MuiTableCell-head makeStyles-tableCell-36 makeStyles-tableHeadCell-35"
                          scope="col"
                        >
                          PROCESS
                        </th>
                        <th
                          class="MuiTableCell-root MuiTableCell-head makeStyles-tableCell-36 makeStyles-tableHeadCell-35"
                          scope="col"
                        >
                          PHONE
                        </th>
                        <th
                          class="MuiTableCell-root MuiTableCell-head makeStyles-tableCell-36 makeStyles-tableHeadCell-35"
                          scope="col"
                        >
                          PHONE2
                        </th>
                        <th
                          class="MuiTableCell-root MuiTableCell-head makeStyles-tableCell-36 makeStyles-tableHeadCell-35"
                          scope="col"
                        >
                          CONTACT
                        </th>
                        <th
                          class="MuiTableCell-root MuiTableCell-head makeStyles-tableCell-36 makeStyles-tableHeadCell-35"
                          scope="col"
                        >
                          CONTACT2
                        </th>
                      </tr>
                    </thead>
                    <tbody
                      class="MuiTableBody-root"
                    >
                      <tr
                        class="MuiTableRow-root makeStyles-tableBodyRow-39"
                      >
                        <td
                          class="MuiTableCell-root MuiTableCell-body makeStyles-tableCell-36"
                        >
                          0
                        </td>
                        <td
                          class="MuiTableCell-root MuiTableCell-body makeStyles-tableCell-36"
                        >
                          test
                        </td>
                        <td
                          class="MuiTableCell-root MuiTableCell-body makeStyles-tableCell-36"
                        >
                          test
                        </td>
                        <td
                          class="MuiTableCell-root MuiTableCell-body makeStyles-tableCell-36"
                        >
                          test
                        </td>
                        <td
                          class="MuiTableCell-root MuiTableCell-body makeStyles-tableCell-36"
                        >
                          test
                        </td>
                        <td
                          class="MuiTableCell-root MuiTableCell-body makeStyles-tableCell-36"
                        >
                          test
                        </td>
                        <td
                          class="MuiTableCell-root MuiTableCell-body makeStyles-tableCell-36"
                        >
                          test
                        </td>
                        <td
                          class="MuiTableCell-root MuiTableCell-body makeStyles-tableCell-36"
                        >
                          test
                        </td>
                        <td
                          class="MuiTableCell-root MuiTableCell-body makeStyles-tableCell-36"
                        >
                          test
                        </td>
                        <td
                          class="MuiTableCell-root MuiTableCell-body makeStyles-tableCell-36"
                        >
                          0
                        </td>
                        <td
                          class="MuiTableCell-root MuiTableCell-body makeStyles-tableCell-36"
                        >
                          0
                        </td>
                        <td
                          class="MuiTableCell-root MuiTableCell-body makeStyles-tableCell-36"
                        >
                          0
                        </td>
                        <td
                          class="MuiTableCell-root MuiTableCell-body makeStyles-tableCell-36"
                        >
                          test
                        </td>
                        <td
                          class="MuiTableCell-root MuiTableCell-body makeStyles-tableCell-36"
                        >
                          test
                        </td>
                        <td
                          class="MuiTableCell-root MuiTableCell-body makeStyles-tableCell-36"
                        >
                          test
                        </td>
                        <td
                          class="MuiTableCell-root MuiTableCell-body makeStyles-tableCell-36"
                        >
                          test
                        </td>
                        <td
                          class="MuiTableCell-root MuiTableCell-body makeStyles-tableCell-36"
                        >
                          test
                        </td>
                        <td
                          class="MuiTableCell-root MuiTableCell-body makeStyles-tableCell-36"
                        >
                          test
                        </td>
                        <td
                          class="MuiTableCell-root MuiTableCell-body makeStyles-tableCell-36"
                        >
                          test
                        </td>
                        <td
                          class="MuiTableCell-root MuiTableCell-body makeStyles-tableCell-36"
                        >
                          test
                        </td>
                        <td
                          class="MuiTableCell-root MuiTableCell-body makeStyles-tableCell-36"
                        >
                          test
                        </td>
                        <td
                          class="MuiTableCell-root MuiTableCell-body makeStyles-tableCell-36"
                        >
                          test
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `);
  });
});
