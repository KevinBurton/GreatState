import {Theme} from '@material-ui/core/styles'
import {
  drawerWidth,
  transition,
  container
} from "../../great-state-material";

const appStyle = {
  wrapper: {
    position: "relative",
    top: "0",
    height: "100vh"
  },
  mainPanel: {
    width: `calc(100% - ${drawerWidth}px)`,
    overflow: "auto",
    position: "relative",
    float: "right",
    ...transition,
    maxHeight: "100%",
    overflowScrolling: "touch"
  },
  content: {
    marginTop: "70px",
    padding: "30px 15px",
    minHeight: "calc(100vh - 123px)"
  },
  container,
  schedule: {
    marginTop: "70px"
  }
} as const;

export default appStyle;
