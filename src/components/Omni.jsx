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
      <div className={classes.omniList}>
        <div className={classes.omniListItem}>
          <div className={classes.omniListItemIcon}>
            <i className="far fa-circle-s" />
          </div> Create a new Slido
        </div>
        <div className={classes.omniListItem}>
          <div className={classes.omniListItemIcon}>
            <i className="far fa-user" />
          </div> Add a new team member
        </div>
        <div className={classes.omniListItem}>
          <div className={classes.omniListItemIcon}>
            <i className="far fa-file-invoice" />
          </div> View invoices
        </div>
      </div>
    </div>
  );
}
