import React from 'react';
import { createUseStyles } from 'react-jss';

import { event as styles } from './styles/event';
import event from '../images/event.png';

const useStyles = createUseStyles(styles);

export const Event = (props) => {
  const classes = useStyles();
  
  return (
    <div className={classes.outer}>
      <div className={classes.welcome}>
        <div className={classes.name}>
          My amazing event
        </div>
      </div>
      <div className={classes.event}>
        <img src={event} alt="Event Admin" />
      </div>
    </div>
  );
}
