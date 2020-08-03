/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import NotInterested from "@material-ui/icons/NotInterested";
import Contacts from "@material-ui/icons/Contacts";
import EmojiPeople from "@material-ui/icons/EmojiPeople";
import Business from "@material-ui/icons/Business";
import FlightTakeoff from "@material-ui/icons/FlightTakeoff";
import Person from "@material-ui/icons/Person";
import AttachMoney from "@material-ui/icons/AttachMoney";
import PostAdd from "@material-ui/icons/PostAdd";
import ImportContacts from "@material-ui/icons/ImportContacts";
import CalendarToday from "@material-ui/icons/CalendarToday";
import MenuBook from "@material-ui/icons/MenuBook";
import Apps from "@material-ui/icons/Apps";
import FitnessCenter from "@material-ui/icons/FitnessCenter";
import BugReport from "@material-ui/icons/BugReport";
//
import Dashboard from "@material-ui/icons/Dashboard";
import Notifications from "@material-ui/icons/Notifications";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import NotificationsPage from "views/Notifications/Notifications.js";
// Great State
import Covid19Page from "views/Covid19/Covid19.js";
import WeightsPage from "views/Weights/Weights.js"
import WODPage from "views/WOD/WOD.js"
import StoryPage from "views/Story/Story.js";
import SchedulePage from "views/Schedule/Schedule.js";
import ProgramsPage from "views/Programs/Programs.js";
import PricingPage from "views/Pricing/Pricing.js";
import MichaelPage from "views/Michael/Michael.js";
import GettingStartedPage from "views/GettingStarted/GettingStarted.js";
import DropinsPage from "views/Dropins/Dropins.js";
import FacilityPage from "views/Facility/Facility.js";
import ContactPage from "views/Contact/Contact.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin"
  },
  // GreatState
  {
    path: "/404",
    name: "404",
    icon: NotInterested,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/contact",
    name: "Contact",
    icon: Contacts,
    component: ContactPage,
    layout: "/admin"
  },
  {
    path: "/dropins",
    name: "Dropins",
    icon: EmojiPeople,
    component: DropinsPage,
    layout: "/admin"
  },
  {
    path: "/faciity",
    name: "Facility",
    icon: Business,
    component: FacilityPage,
    layout: "/admin"
  },
  {
    path: "/gettingstarted",
    name: "Getting Started",
    icon: FlightTakeoff,
    component: GettingStartedPage,
    layout: "/admin"
  },
  {
    path: "/michael",
    name: "Michael",
    icon: Person,
    component: MichaelPage,
    layout: "/admin"
  },
  {
    path: "/pricing",
    name: "Pricing",
    icon: AttachMoney,
    component: PricingPage,
    layout: "/admin"
  },
  {
    path: "/programs",
    name: "Programs",
    icon: PostAdd,
    component: ProgramsPage,
    layout: "/admin"
  },
  {
    path: "/resources",
    name: "Resources",
    icon: ImportContacts,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/schedule",
    name: "Schedule",
    icon: CalendarToday,
    component: SchedulePage,
    layout: "/admin"
  },
  {
    path: "/story",
    name: "Story",
    icon: MenuBook,
    component: StoryPage,
    layout: "/admin"
  },
  {
    path: "/weights",
    name: "Weights",
    icon: Apps,
    component: WeightsPage,
    layout: "/admin"
  },
  {
    path: "/wod",
    name: "WOD",
    icon: FitnessCenter,
    component: WODPage,
    layout: "/admin"
  },
  {
    path: "/covid-19",
    name: "COVID-19",
    icon: BugReport,
    component: Covid19Page,
    layout: "/admin"
  },

];

export default dashboardRoutes;
