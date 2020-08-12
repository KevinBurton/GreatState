/*eslint-disable*/
import React, { FC } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Link } from "gatsby";
// @material-ui/core components
import { makeStyles, createStyles, Theme, ThemeProvider } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";
// core components
import AdminNavbarLinks from "../Navbars/AdminNavbarLinks.js";

import sidebarStyle from "../../assets/jss/great-state/components/sidebarStyle";
import { ThemeConsumer } from "styled-components";
import { RouteDefinition } from '../../routes';
const useStyles = makeStyles((theme: Theme) => createStyles(sidebarStyle(theme)));

type SidebarProps = {
    handleDrawerToggle: (e: object) => void;
    bgColor: 'purple' | 'blue' | 'green' | 'orange' | 'red';
    logo: string
    image: string,
    logoText: string,
    routes: RouteDefinition[],
    open: boolean;
  }

const Sidebar: FC<SidebarProps> = ({ bgColor, logo, image, logoText, routes, open, handleDrawerToggle }) => {
  const classes = useStyles();
  // verifies if routeName is the one active (in browser input)
  function activeRoute(routeName: string) {
    return window.location.href.indexOf(routeName) > -1 ? true : false;
  }
  var links = (
    <List className={classes.list}>
      {routes.map((prop, key) => {
        var activePro = " ";
        var listItemClasses = classNames({
            [" " + bgColor ? classes[bgColor] : '']: activeRoute(prop.layout + prop.path)
          });
        const whiteFontClasses = classNames({
          [" " + classes.whiteFont]: activeRoute(prop.layout + prop.path)
        });
        return (
          <Link
            to={prop.layout + prop.path}
            className={activePro + classes.item}
            activeClassName="active"
            key={key}
          >
            <ListItem button className={classes.itemLink + listItemClasses}>
              {typeof prop.icon === "string" ? (
                <Icon
                  className={classNames(classes.itemIcon, whiteFontClasses)}
                >
                  {prop.icon}
                </Icon>
              ) : (
                <prop.icon
                  className={classNames(classes.itemIcon, whiteFontClasses)}
                />
              )}
              <ListItemText
                primary={prop.name}
                className={classNames(classes.itemText, whiteFontClasses)}
                disableTypography={true}
              />
            </ListItem>
          </Link>
        );
      })}
    </List>
  );
  var brand = (
    <div className={classes.logo}>
      <a
        href="/"
        className={classNames(classes.logoLink)}
        target="_blank"
      >
        <div className={classes.logoImage}>
          <img src={logo} alt="logo" className={classes.img} />
        </div>
        {logoText}
      </a>
    </div>
  );
  return (
    <div>
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={"left"}
          open={open}
          classes={{
            paper: classNames(classes.drawerPaper)
          }}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>
            {<AdminNavbarLinks />}
            {links}
          </div>
          {image !== undefined ? (
            <div
              className={classes.background}
              style={{ backgroundImage: "url(" + image + ")" }}
            />
          ) : null}
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          anchor={"left"}
          variant="permanent"
          open
          classes={{
            paper: classNames(classes.drawerPaper)
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>{links}</div>
          {image !== undefined ? (
            <div
              className={classes.background}
              style={{ backgroundImage: "url(" + image + ")" }}
            />
          ) : null}
        </Drawer>
      </Hidden>
    </div>
  );
}
export default Sidebar;
