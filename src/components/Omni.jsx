import React from 'react';
import { createUseStyles } from 'react-jss';
import { omni as styles } from './styles/omni';

const useStyles = createUseStyles(styles);

export const Omni = ({children}) => {
  const classes = useStyles();
  
  return (
    <div className={classes.outer}>
      I AM OMNI
    </div>
  );
}
