import React from "react";

// @material-ui/icons
import ImportContacts from "@material-ui/icons/ImportContacts";
import Business from "@material-ui/icons/Business";
import MenuBook from "@material-ui/icons/MenuBook";
import Contacts from "@material-ui/icons/Contacts";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";

import Story from "components/Story/Story";
import Facility from "components/Facility/Facility";
import Resources from "components/Resources/Resources";
import Contact from "components/Contact/Contact";

const center = {
    lat: 43.035419,
    lng: -89.380748
};

const AboutPage = () => {
   return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <CustomTabs
            title="Tasks:"
            headerColor="primary"
            tabs={[
                    {
                        tabName: "Contact",
                        tabIcon: Contacts,
                        tabContent: (<Contact center={center}/>)
                    },
                    {
                        tabName: "Our Story",
                        tabIcon: MenuBook,
                        tabContent: (<Story/>)
                    },
                    {
                        tabName: "Our Facility",
                        tabIcon: Business,
                        tabContent: (<Facility/>)
                    },
                    {
                        tabName: "Resources",
                        tabIcon: ImportContacts,
                        tabContent: (<Resources/>)
                    },
                ]}
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
export default AboutPage