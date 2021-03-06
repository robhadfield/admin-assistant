import React from 'react';
import { createUseStyles } from 'react-jss';
import { menu as styles } from './styles/menu';
import { NavLink } from 'react-router-dom';

const useStyles = createUseStyles(styles);

export const Menu = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.wrap}>
      <div className={classes.expand}>
        <i className="far fa-arrows-left-right-to-line"></i>
      </div>
      <img alt="logo" className={classes.logo} src="https://www.slido.com/_next/static/media/slido-logo.513f961d.svg" />
      <div className={classes.menuList}>
        <NavLink to="/" className={classes.menuItem}>
          <div className={classes.menuIcon}>
            <i className="far fa-home"/>
          </div>
          <div className={classes.menuLabel}>
            Dashboard
          </div>
        </NavLink>
        <NavLink to="/event" className={classes.menuItem}>
          <div className={classes.menuIcon}>
            <i className="far fa-chart-simple"/>
          </div>
          <div className={classes.menuLabel}>
            My Slidos
          </div>
        </NavLink>
        <div className={classes.menuItem}>
          <div className={classes.menuIcon}>
            <i className="far fa-line-chart"/>
          </div>
          <div className={classes.menuLabel}>
            Analytics
          </div>
        </div>
        <div className={classes.menuItem}>
          <div className={classes.menuIcon}>
            <i className="far fa-users"/>
          </div>
          <div className={classes.menuLabel}>
            Team
          </div>
        </div>
        <div className={classes.menuItem}>
          <div className={classes.menuIcon}>
            <i className="far fa-list"/>
          </div>
          <div className={classes.menuLabel}>
            Templates
          </div>
        </div>
      </div>
    </div>
  );
}
