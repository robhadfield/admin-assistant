import React from 'react';
import { createUseStyles } from 'react-jss';
import { wrap as styles } from './styles/wrap';

const useStyles = createUseStyles(styles);

export const Wrap = ({children}) => {
  const classes = useStyles();
  
  return (
    <div className={classes.outer}>
      {children}
    </div>
  );
}
