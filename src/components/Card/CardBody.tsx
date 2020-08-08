import React, { FC } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import cardBodyStyle from "../../assets/jss/great-state/components/cardBodyStyle";

const useStyles = makeStyles((theme: Theme) => createStyles(cardBodyStyle));

type CardBodyProps = {
  className?: string,
  plain?: Boolean,
  profile?: boolean
};
const CardBody:FC<CardBodyProps> = ({ className, children, plain, profile, ...rest }) => {
  const classes = useStyles();
  const cardBodyClasses = classNames({
    [classes.cardBody]: true,
    [classes.cardBodyPlain]: plain,
    [classes.cardBodyProfile]: profile,
    [className]: className !== undefined
  });
  return (
    <div className={cardBodyClasses} {...rest}>
      {children}
    </div>
  );
}

export default CardBody;
