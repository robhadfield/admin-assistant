import React from 'react';
import { createUseStyles } from 'react-jss';
import { contentwrap as styles } from './styles/contentwrap';

const useStyles = createUseStyles(styles);

export const ContentWrap = ({children}) => {
  const classes = useStyles();
  
  return (
    <div className={classes.outer}>
      {children}
    </div>
  );
}
