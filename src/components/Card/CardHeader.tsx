import React, { FC } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import cardHeaderStyles from "../../assets/jss/great-state/components/cardHeaderStyle";

const useStyles = makeStyles((theme: Theme) => createStyles(cardHeaderStyles));

type CardHeaderProps = {
  className?: string,
  color?:'warning' | 'success' | 'danger' | 'info' | 'primary' |'rose',
  plain?: boolean,
  stats?: boolean,
  icon?: boolean
};

const CardHeader:FC<CardHeaderProps> = ({ className, children, color, plain, stats, icon, ...rest }) => {
  const classes = useStyles();
  const cardHeaderClasses = classNames({
    [classes.cardHeader]: true,
    [classes[color + "CardHeader"]]: color,
    [classes.cardHeaderPlain]: plain,
    [classes.cardHeaderStats]: stats,
    [classes.cardHeaderIcon]: icon,
    [className]: className !== undefined
  });
  return (
    <div className={cardHeaderClasses} {...rest}>
      {children}
    </div>
  );
}

export default CardHeader;