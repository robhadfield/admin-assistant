import React from 'react';
import { createUseStyles } from 'react-jss';
import { header as styles } from './styles/header';

const useStyles = createUseStyles(styles);

export const Header = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.wrap}>
      <input type="text" className={classes.input} placeholder="Start typing..." />
      <div className={classes.user}>
        <div className={classes.info}>
          <div className={classes.name}>Robyn Rihanna Fenty</div>
          <div className={classes.account}>Account Admin</div>
        </div>
        <div className={classes.avatar}></div>
      </div>
    </div>
  );
}
