import React from "react";
import { render } from "@testing-library/react";
import CovidStatus, {
  CovidStatusFeature,
} from "../components/Covid/CovidStatus";
describe("CovidStatus", () => {
  test("renders CovidStatus without crashing", async () => {
    const features: CovidStatusFeature[] = [
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
    ];
    const { container } = render(<CovidStatus features={features} />);
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
                  Wisconsin Status
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
                          GEO
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
                          POSITIVE
                        </th>
                        <th
                          class="MuiTableCell-root MuiTableCell-head makeStyles-tableCell-36 makeStyles-tableHeadCell-35"
                          scope="col"
                        >
                          NEGATIVE
                        </th>
                        <th
                          class="MuiTableCell-root MuiTableCell-head makeStyles-tableCell-36 makeStyles-tableHeadCell-35"
                          scope="col"
                        >
                          DEATHS
                        </th>
                        <th
                          class="MuiTableCell-root MuiTableCell-head makeStyles-tableCell-36 makeStyles-tableHeadCell-35"
                          scope="col"
                        >
                          OBJECTID
                        </th>
                        <th
                          class="MuiTableCell-root MuiTableCell-head makeStyles-tableCell-36 makeStyles-tableHeadCell-35"
                          scope="col"
                        >
                          GEOID
                        </th>
                        <th
                          class="MuiTableCell-root MuiTableCell-head makeStyles-tableCell-36 makeStyles-tableHeadCell-35"
                          scope="col"
                        >
                          POP
                        </th>
                        <th
                          class="MuiTableCell-root MuiTableCell-head makeStyles-tableCell-36 makeStyles-tableHeadCell-35"
                          scope="col"
                        >
                          LoadDttm
                        </th>
                        <th
                          class="MuiTableCell-root MuiTableCell-head makeStyles-tableCell-36 makeStyles-tableHeadCell-35"
                          scope="col"
                        >
                          PCT_POP_65
                        </th>
                        <th
                          class="MuiTableCell-root MuiTableCell-head makeStyles-tableCell-36 makeStyles-tableHeadCell-35"
                          scope="col"
                        >
                          PCT_SMK
                        </th>
                        <th
                          class="MuiTableCell-root MuiTableCell-head makeStyles-tableCell-36 makeStyles-tableHeadCell-35"
                          scope="col"
                        >
                          PCT_COPD
                        </th>
                        <th
                          class="MuiTableCell-root MuiTableCell-head makeStyles-tableCell-36 makeStyles-tableHeadCell-35"
                          scope="col"
                        >
                          PCT_CVD
                        </th>
                        <th
                          class="MuiTableCell-root MuiTableCell-head makeStyles-tableCell-36 makeStyles-tableHeadCell-35"
                          scope="col"
                        >
                          PCT_DIAB
                        </th>
                        <th
                          class="MuiTableCell-root MuiTableCell-head makeStyles-tableCell-36 makeStyles-tableHeadCell-35"
                          scope="col"
                        >
                          POP_65_WI
                        </th>
                        <th
                          class="MuiTableCell-root MuiTableCell-head makeStyles-tableCell-36 makeStyles-tableHeadCell-35"
                          scope="col"
                        >
                          SMK_WI
                        </th>
                        <th
                          class="MuiTableCell-root MuiTableCell-head makeStyles-tableCell-36 makeStyles-tableHeadCell-35"
                          scope="col"
                        >
                          COPD_WI
                        </th>
                        <th
                          class="MuiTableCell-root MuiTableCell-head makeStyles-tableCell-36 makeStyles-tableHeadCell-35"
                          scope="col"
                        >
                          CVD_WI
                        </th>
                        <th
                          class="MuiTableCell-root MuiTableCell-head makeStyles-tableCell-36 makeStyles-tableHeadCell-35"
                          scope="col"
                        >
                          DIAB_WI
                        </th>
                        <th
                          class="MuiTableCell-root MuiTableCell-head makeStyles-tableCell-36 makeStyles-tableHeadCell-35"
                          scope="col"
                        >
                          DATE
                        </th>
                        <th
                          class="MuiTableCell-root MuiTableCell-head makeStyles-tableCell-36 makeStyles-tableHeadCell-35"
                          scope="col"
                        >
                          Shape__Area
                        </th>
                        <th
                          class="MuiTableCell-root MuiTableCell-head makeStyles-tableCell-36 makeStyles-tableHeadCell-35"
                          scope="col"
                        >
                          Shape__Length
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
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="MuiGrid-root makeStyles-grid-8 MuiGrid-container"
        >
          <div
            class="MuiGrid-root makeStyles-grid-9 MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-12"
          >
            <div
              class="makeStyles-card-10 makeStyles-cardChart-13"
            >
              <div
                class="makeStyles-cardHeader-14 makeStyles-successCardHeader-19"
              >
                <div
                  class="ct-chart ct-chart"
                />
              </div>
              <div
                class="makeStyles-cardBody-24"
              >
                <h4
                  class="makeStyles-cardTitle-6"
                >
                  Wisconsin Positive Tests
                </h4>
                <p
                  class="makeStyles-cardCategory-4"
                >
                  <span
                    class="makeStyles-successText-1"
                  >
                    <svg
                      aria-hidden="true"
                      class="MuiSvgIcon-root makeStyles-upArrowCardCategory-2"
                      focusable="false"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"
                      />
                    </svg>
                     55%
                  </span>
                   
                  increase in today sales.
                </p>
              </div>
              <div
                class="makeStyles-cardFooter-40 makeStyles-cardFooterChart-44"
              >
                <div
                  class="makeStyles-stats-3"
                >
                  <svg
                    aria-hidden="true"
                    class="MuiSvgIcon-root"
                    focusable="false"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
                    />
                    <path
                      d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
                    />
                  </svg>
                   today
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `);
  });
});
