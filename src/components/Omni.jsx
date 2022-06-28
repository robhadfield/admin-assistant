import React from 'react';
import { createUseStyles } from 'react-jss';
import { omni as styles } from './styles/omni';

const useStyles = createUseStyles(styles);

export const Omni = ({active}) => {
  const classes = useStyles();
  
  return (
    <div className={active ? classes.outer : classes.inactive}>
      {active && 
        <input autoFocus className={classes.input} type="text" placeholder="Start typing..." />
      }
    </div>
  );
}
