import React, { FC } from "react";
import classNames from "classnames";
// @material-ui/core components
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
// core components
import AdminNavbarLinks from "./AdminNavbarLinks.js";
import Button from "../CustomButtons/Button.js";

import headerStyles from "../../assets/jss/great-state/components/headerStyle";

const useStyles = makeStyles((theme: Theme) => createStyles(headerStyles));

type HeaderProps = {
  color: 'primary' | 'info' | 'success' | 'warning' | 'danger',
  handleDrawerToggle?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
  routes: object[]
};

const Header: FC<HeaderProps> = ({ color, routes, handleDrawerToggle }) => {
  const classes = useStyles();
  function makeBrand() {
    var name;
    routes.map(route => {
      if (window.location.href.indexOf(prop.layout + prop.path) !== -1) {
        name = prop.name;
      }
      return null;
    });
    return name;
  }
  const appBarClasses = classNames({
    [" " + classes[color]]: color
  });
  return (
    <AppBar className={classes.appBar + appBarClasses}>
      <Toolbar className={classes.container}>
        <div className={classes.flex}>
          {/* Here we create navbar brand, based on route name */}
          <Button color="transparent" href="#" className={classes.title}>
            {makeBrand()}
          </Button>
        </div>
        <Hidden smDown implementation="css">
          {<AdminNavbarLinks />}
        </Hidden>
        <Hidden mdUp implementation="css">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

export default Header;