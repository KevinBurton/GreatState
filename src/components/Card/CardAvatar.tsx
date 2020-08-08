import React, { FC, ReactNode} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import cardAvatarStyles from "../../assets/jss/great-state/components/cardAvatarStyle";

const useStyles = makeStyles((theme: Theme) => createStyles(cardAvatarStyles));

type CardAvatarProps = {
  children: ReactNode,
  className?: string,
  profile?: boolean,
  plain?: boolean
};

const CardAvatar:FC<CardAvatarProps> = ({ children, className, plain, profile, ...rest }) => {
  const classes = useStyles();
  const cardAvatarClasses = classNames({
    [classes.cardAvatar]: true,
    [classes.cardAvatarProfile]: profile,
    [classes.cardAvatarPlain]: plain,
    [className]: className !== undefined
  });
  return (
    <div className={cardAvatarClasses} {...rest}>
      {children}
    </div>
  );
}

export default CardAvatar;
