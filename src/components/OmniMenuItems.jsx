import React from 'react';
import { createUseStyles } from 'react-jss';
import { omni as styles } from './styles/omni';

const useStyles = createUseStyles(styles);

export const OmniMenuUser = ({label}) => {
  const classes = useStyles();
  
  return (
    <div className={[classes.listItem, classes.listItemUser].join(" ")}>
      <div className={classes.listItemIcon}>
        <div className={classes.listItemAvatar}></div>
      </div> {label}
    </div>
  );
}

export const OmniMenuNav = ({label}) => {
  const classes = useStyles();
  
  return (
    <div className={[classes.listItem, classes.listItemNav].join(" ")}>
      <div className={classes.listItemIcon}>
        <i className="far fa-circle-location-arrow" />
      </div> {label}
    </div>
  );
}

export const OmniMenuAction = ({label}) => {
  const classes = useStyles();
  
  return (
    <div className={[classes.listItem, classes.listItemAction].join(" ")}>
      <div className={classes.listItemIcon}>
        <i className="fas fa-circle-bolt" />
      </div> {label}
    </div>
  );
}