import React, { FC } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

// core components
import cardFooterStyles from "../../assets/jss/great-state/components/cardFooterStyle";

const useStyles = makeStyles((theme: Theme) => createStyles(cardFooterStyles));

type CardFooterProps = {
  className?: string,
  plain?: boolean,
  profile?: boolean,
  stats?: boolean,
  chart?: boolean
};

const CardFooter:FC<CardFooterProps> = ({ className, children, plain, profile, stats, chart, ...rest }) => {
  const classes = useStyles();
  const cardFooterClasses = classNames({
    [classes.cardFooter]: true,
    [classes.cardFooterPlain]: plain,
    [classes.cardFooterProfile]: profile,
    [classes.cardFooterStats]: stats,
    [classes.cardFooterChart]: chart,
    [className]: className !== undefined
  });
  return (
    <div className={cardFooterClasses} {...rest}>
      {children}
    </div>
  );
}

export default CardFooter;