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
import EmojiPeople from "@material-ui/icons/EmojiPeople";
import FlightTakeoff from "@material-ui/icons/FlightTakeoff";
import Person from "@material-ui/icons/Person";
import MenuBook from "@material-ui/icons/MenuBook";
import Apps from "@material-ui/icons/Apps";
import FitnessCenter from "@material-ui/icons/FitnessCenter";
import BugReport from "@material-ui/icons/BugReport";
import CalendarToday from "@material-ui/icons/CalendarToday";
import AttachMoney from "@material-ui/icons/AttachMoney";
import PostAdd from "@material-ui/icons/PostAdd";

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
import MichaelPage from "views/Michael/Michael.js";
import GettingStartedPage from "views/GettingStarted/GettingStarted.js";
import DropinsPage from "views/Dropins/Dropins.js";
import AboutPage from "views/About/About.js";
import SchedulePage from "views/Schedule/Schedule.js";
import PricingPage from "views/Pricing/Pricing.js";
import ProgramsPage from "views/Programs/Programs.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/public"
  },
  {
    path: "/user",
    name: "User Profile",
    icon: Person,
    component: UserProfile,
    layout: "/public"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/public"
  },
  // GreatState
  {
    path: "/gettingstarted",
    name: "Getting Started",
    icon: FlightTakeoff,
    component: GettingStartedPage,
    layout: "/public"
  },
  {
    path: "/schedule",
    name: "Class Schedule",
    icon: CalendarToday,
    component: SchedulePage,
    layout: "/public"
  },
  {
    path: "/dropins",
    name: "Dropins",
    icon: EmojiPeople,
    component: DropinsPage,
    layout: "/public"
  },
  {
    path: "/programs",
    name: "Programs",
    icon: PostAdd,
    component: ProgramsPage,
    layout: "/public"
  },
  {
    path: "/wod",
    name: "WOD",
    icon: FitnessCenter,
    component: WODPage,
    layout: "/public"
  },
  {
    path: "/pricing",
    name: "Membership Pricing",
    icon: AttachMoney,
    component: PricingPage,
    layout: "/public"
  },
  {
    path: "/michael",
    name: "Michael",
    icon: Person,
    component: MichaelPage,
    layout: "/public"
  },
  {
    path: "/weights",
    name: "Weights",
    icon: Apps,
    component: WeightsPage,
    layout: "/public"
  },
  {
    path: "/about",
    name: "About Great State",
    icon: MenuBook,
    component: AboutPage,
    layout: "/public"
  },
  {
    path: "/covid-19",
    name: "COVID-19",
    icon: BugReport,
    component: Covid19Page,
    layout: "/public"
  },

];

export default dashboardRoutes;
