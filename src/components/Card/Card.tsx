import React, { FC } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import cardStyle from "../../assets/jss/great-state/components/cardStyle";

const useStyles = makeStyles((theme: Theme) => createStyles(cardStyle));

type CardProps = {
  className?: string,
  plain?: boolean ,
  profile?: boolean ,
  chart?: boolean
}

const Card:FC<CardProps> = ({children, className, plain, profile, chart, ...rest}) => {
  const classes = useStyles();
  const cardClasses = classNames({
    [classes.card]: true,
    [classes.cardPlain]: plain,
    [classes.cardProfile]: profile,
    [classes.cardChart]: chart,
    [className]: className !== undefined
  });
  return (
    <div className={cardClasses} {...rest}>
      {children}
    </div>
  );
}

export default Card;