import React from "react";
import { render } from "@testing-library/react";
import { CovidStatusFeature } from "../components/Covid/CovidStatus";
import { CovidTestingFeature } from "../components/Covid/CovidTesting";
import CovidDaneCounty from "../components/Covid/CovidDaneCounty";
describe("CovidDaneCounty", () => {
  test("renders CovidStatus without crashing", async () => {
    const status: CovidStatusFeature[] = [
      {
        attributes: {
          OBJECTID: 0,
          GEO: "test",
          GEOID: "test",
          NAME: "test",
          DATE: 0,
          POSITIVE: 0,
          POS_NEW: 0,
          NEGATIVE: 0,
          NEG_NEW: 0,
          DEATHS: 0,
          DTH_NEW: 0,
          TEST_NEW: 0,
          HOSP_YES: 0,
          HOSP_NO: 0,
          HOSP_UNK: 0,
          POP: 0,
          POP_NOE: 0,
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
          Shape__Area: 0,
          Shape__Length: 0,
        },
      },
    ];
    const testing: CovidTestingFeature[] = [
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
    const { container } = render(
      <CovidDaneCounty status={status} testing={testing} />
    );
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
                          OBJECTID
                        </th>
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
                          GEOID
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
                          DATE
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
                          POS_NEW
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
                          NEG_NEW
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
                          DTH_NEW
                        </th>
                        <th
                          class="MuiTableCell-root MuiTableCell-head makeStyles-tableCell-36 makeStyles-tableHeadCell-35"
                          scope="col"
                        >
                          TEST_NEW
                        </th>
                        <th
                          class="MuiTableCell-root MuiTableCell-head makeStyles-tableCell-36 makeStyles-tableHeadCell-35"
                          scope="col"
                        >
                          HOSP_YES
                        </th>
                        <th
                          class="MuiTableCell-root MuiTableCell-head makeStyles-tableCell-36 makeStyles-tableHeadCell-35"
                          scope="col"
                        >
                          HOSP_NO
                        </th>
                        <th
                          class="MuiTableCell-root MuiTableCell-head makeStyles-tableCell-36 makeStyles-tableHeadCell-35"
                          scope="col"
                        >
                          HOSP_UNK
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
                          POP_MOE
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
                    />
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
              class="makeStyles-card-10"
            >
              <div
                class="makeStyles-cardHeader-14 makeStyles-warningCardHeader-18"
              >
                <h4
                  class="makeStyles-cardTitleWhite-7"
                >
                  Dane County Testing Centers
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
                          OBJECTID
                        </th>
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
                          ZIP
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
                    />
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
                  class="recharts-wrapper"
                  style="position: relative; cursor: default; width: 900px; height: 600px;"
                >
                  <svg
                    class="recharts-surface"
                    height="600"
                    version="1.1"
                    viewBox="0 0 900 600"
                    width="900"
                  >
                    <defs>
                      <clippath
                        id="recharts6-clip"
                      >
                        <rect
                          height="530"
                          width="790"
                          x="80"
                          y="5"
                        />
                      </clippath>
                    </defs>
                    <g
                      class="recharts-cartesian-grid"
                    >
                      <g
                        class="recharts-cartesian-grid-horizontal"
                      >
                        <line
                          fill="none"
                          height="530"
                          stroke="#ccc"
                          stroke-dasharray="3 3"
                          width="790"
                          x="80"
                          x1="80"
                          x2="870"
                          y="5"
                          y1="5"
                          y2="5"
                        />
                        <line
                          fill="none"
                          height="530"
                          stroke="#ccc"
                          stroke-dasharray="3 3"
                          width="790"
                          x="80"
                          x1="80"
                          x2="870"
                          y="5"
                          y1="535"
                          y2="535"
                        />
                      </g>
                      <g
                        class="recharts-cartesian-grid-vertical"
                      >
                        <line
                          fill="none"
                          height="530"
                          stroke="#ccc"
                          stroke-dasharray="3 3"
                          width="790"
                          x="80"
                          x1="80"
                          x2="80"
                          y="5"
                          y1="5"
                          y2="535"
                        />
                        <line
                          fill="none"
                          height="530"
                          stroke="#ccc"
                          stroke-dasharray="3 3"
                          width="790"
                          x="80"
                          x1="870"
                          x2="870"
                          y="5"
                          y1="5"
                          y2="535"
                        />
                      </g>
                    </g>
                    <g
                      class="recharts-layer recharts-cartesian-axis recharts-yAxis yAxis"
                    >
                      <line
                        class="recharts-cartesian-axis-line"
                        fill="none"
                        height="530"
                        stroke="#666"
                        width="60"
                        x="20"
                        x1="80"
                        x2="80"
                        y="5"
                        y1="5"
                        y2="535"
                      />
                      <g
                        class="recharts-cartesian-axis-ticks"
                      />
                    </g>
                  </svg>
                  <div
                    class="recharts-legend-wrapper"
                    style="position: absolute; width: 850px; height: auto; left: 20px; bottom: 5px;"
                  >
                    <ul
                      class="recharts-default-legend"
                      style="padding: 0px; margin: 0px; text-align: center;"
                    >
                      <li
                        class="recharts-legend-item legend-item-0"
                        style="display: inline-block; margin-right: 10px;"
                      >
                        <svg
                          class="recharts-surface"
                          height="14"
                          style="display: inline-block; vertical-align: middle; margin-right: 4px;"
                          version="1.1"
                          viewBox="0 0 32 32"
                          width="14"
                        >
                          <path
                            class="recharts-legend-icon"
                            d="M0,4h32v24h-32z"
                            fill="#8884d8"
                            stroke="none"
                          />
                        </svg>
                        <span
                          class="recharts-legend-item-text"
                        >
                          positive
                        </span>
                      </li>
                      <li
                        class="recharts-legend-item legend-item-1"
                        style="display: inline-block; margin-right: 10px;"
                      >
                        <svg
                          class="recharts-surface"
                          height="14"
                          style="display: inline-block; vertical-align: middle; margin-right: 4px;"
                          version="1.1"
                          viewBox="0 0 32 32"
                          width="14"
                        >
                          <path
                            class="recharts-legend-icon"
                            d="M0,4h32v24h-32z"
                            fill="#8884d8"
                            stroke="none"
                          />
                        </svg>
                        <span
                          class="recharts-legend-item-text"
                        >
                          newpos
                        </span>
                      </li>
                      <li
                        class="recharts-legend-item legend-item-2"
                        style="display: inline-block; margin-right: 10px;"
                      >
                        <svg
                          class="recharts-surface"
                          height="14"
                          style="display: inline-block; vertical-align: middle; margin-right: 4px;"
                          version="1.1"
                          viewBox="0 0 32 32"
                          width="14"
                        >
                          <path
                            class="recharts-legend-icon"
                            d="M0,4h32v24h-32z"
                            fill="#82ca9d"
                            stroke="none"
                          />
                        </svg>
                        <span
                          class="recharts-legend-item-text"
                        >
                          hospitalization
                        </span>
                      </li>
                      <li
                        class="recharts-legend-item legend-item-3"
                        style="display: inline-block; margin-right: 10px;"
                      >
                        <svg
                          class="recharts-surface"
                          height="14"
                          style="display: inline-block; vertical-align: middle; margin-right: 4px;"
                          version="1.1"
                          viewBox="0 0 32 32"
                          width="14"
                        >
                          <path
                            class="recharts-legend-icon"
                            d="M0,4h32v24h-32z"
                            fill="#f00c0c"
                            stroke="none"
                          />
                        </svg>
                        <span
                          class="recharts-legend-item-text"
                        >
                          deaths
                        </span>
                      </li>
                      <li
                        class="recharts-legend-item legend-item-4"
                        style="display: inline-block; margin-right: 10px;"
                      >
                        <svg
                          class="recharts-surface"
                          height="14"
                          style="display: inline-block; vertical-align: middle; margin-right: 4px;"
                          version="1.1"
                          viewBox="0 0 32 32"
                          width="14"
                        >
                          <path
                            class="recharts-legend-icon"
                            d="M0,4h32v24h-32z"
                            fill="#f00c0c"
                            stroke="none"
                          />
                        </svg>
                        <span
                          class="recharts-legend-item-text"
                        >
                          newdeaths
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div
                    class="recharts-tooltip-wrapper"
                    style="transform: translate(undefinedpx, undefinedpx); pointer-events: none; visibility: hidden; position: absolute; top: 0px;"
                  >
                    <div
                      class="recharts-default-tooltip"
                      style="margin: 0px; padding: 10px; background-color: rgb(255, 255, 255); border: 1px solid #ccc; white-space: nowrap;"
                    >
                      <p
                        class="recharts-tooltip-label"
                        style="margin: 0px;"
                      />
                    </div>
                  </div>
                </div>
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
