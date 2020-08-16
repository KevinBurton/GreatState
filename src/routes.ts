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

import Dashboard from "@material-ui/icons/Dashboard";
import Notifications from "@material-ui/icons/Notifications";

// core components/views for Admin layout
import DashboardPage from "./pages/dashboard";
import UserProfile from "./pages/userprofile";
import NotificationsPage from "./pages/notifications";
// Great State
import CovidPage from "./pages/covid";
import WeightsPage from "./pages/weights"
import WODPage from "./pages/wod"
import MichaelPage from "./pages/michael";
import GettingStartedPage from "./pages/gettingstarted";
import DropinsPage from "./pages/dropin";
import AboutPage from "./pages/about";
import SchedulePage from "./pages/schedule";
import PricingPage from "./pages/pricing";
import ProgramsPage from "./pages/programs";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { SvgIconTypeMap } from "@material-ui/core";

export type RouteDefinition = {
  path: string;
  name: string;
  caption: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  component: React.ReactNode;
  layout: string;
};

const dashboardRoutes: RouteDefinition[] = [
  {
    path: "/dashboard",
    name: "Dashboard",
    caption: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/public"
  },
  {
    path: "/user",
    name: "User Profile",
    caption: "User Profile",
    icon: Person,
    component: UserProfile,
    layout: "/public"
  },
  {
    path: "/notifications",
    name: "Notifications",
    caption: "Notifications",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/public"
  },
  // GreatState
  {
    path: "/gettingstarted",
    name: "Getting Started",
    caption: "Getting Started",
    icon: FlightTakeoff,
    component: GettingStartedPage,
    layout: "/public"
  },
  {
    path: "/schedule",
    name: "Class Schedule",
    caption: "Class Schedule",
    icon: CalendarToday,
    component: SchedulePage,
    layout: "/public"
  },
  {
    path: "/dropins",
    name: "Dropins",
    caption: "Dropins",
    icon: EmojiPeople,
    component: DropinsPage,
    layout: "/public"
  },
  {
    path: "/programs",
    name: "Programs",
    caption: "Programs",
    icon: PostAdd,
    component: ProgramsPage,
    layout: "/public"
  },
  {
    path: "/wod",
    name: "WOD",
    caption: "WOD",
    icon: FitnessCenter,
    component: WODPage,
    layout: "/public"
  },
  {
    path: "/pricing",
    name: "Membership Pricing",
    caption: "Membership Pricing",
    icon: AttachMoney,
    component: PricingPage,
    layout: "/public"
  },
  {
    path: "/michael",
    name: "Michael",
    caption: "Michael",
    icon: Person,
    component: MichaelPage,
    layout: "/public"
  },
  {
    path: "/weights",
    name: "Weights",
    caption: "Weights",
    icon: Apps,
    component: WeightsPage,
    layout: "/public"
  },
  {
    path: "/about",
    name: "About Great State",
    caption: "About Great State",
    icon: MenuBook,
    component: AboutPage,
    layout: "/public"
  },
  {
    path: "/covid",
    name: "COVID-19",
    caption: "COVID-19",
    icon: BugReport,
    component: CovidPage,
    layout: "/public"
  },

];

export default dashboardRoutes;
