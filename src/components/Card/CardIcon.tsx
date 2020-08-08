import React, {FC } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import cardIconStyles from "../../assets/jss/great-state/components/cardIconStyle";

const useStyles = makeStyles((theme: Theme) => createStyles(cardIconStyles));

type CardIconProps = {
  className?: string,
  color?: 'warning' | 'success' | 'danger' | 'info' | 'primary' | 'rose'
};

const CardIcon:FC<CardIconProps> = ({ className, children, color, ...rest }) => {
  const classes = useStyles();
  const cardIconClasses = classNames({
    [classes.cardIcon]: true,
    [classes[color + "CardHeader"]]: color,
    [className]: className !== undefined
  });
  return (
    <div className={cardIconClasses} {...rest}>
      {children}
    </div>
  );
}

export default CardIcon;