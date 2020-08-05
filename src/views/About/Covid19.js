import React from "react";
// @material-ui/icons
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
// core components
import CovidStatus from "components/Covid/CovidStatus";
import CovidTesting from "components/Covid/CovidTesting"

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";

const Covid19 = () => {
   return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <CustomTabs
            title="Tasks:"
            headerColor="primary"
            tabs={[
              {
                tabName: "Status",
                tabIcon: BugReport,
                tabContent: (
                  <CovidStatus/>
                )
              },
              {
                tabName: "Testing",
                tabIcon: Code,
                tabContent: (
                  <CovidTesting/>
                )
              }
            ]}
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default Covid19;