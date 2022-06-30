import React from 'react';
import _ from 'lodash';
import { createUseStyles } from 'react-jss';
import { omni as styles } from './styles/omni';
import { useLocation } from "react-router-dom";

import { OmniMenuUser, OmniMenuNav, OmniMenuAction, OmniMenuHelp } from './OmniMenuItems';
import { defaultMenuHomeNew, defaultMenuHomeActive, defaultMenuEvent, menuSearch, menuAllHands } from './menuData';

const useStyles = createUseStyles(styles);

export const OmniMenu = ({search, userActive}) => {
  const classes = useStyles();

  const location = useLocation();
  let menuData = defaultMenuHomeNew;
  if ( location.pathname.includes('event') ) {
    menuData = defaultMenuEvent;
  }
  if ( !location.pathname.includes('event') && userActive === true ) {
    menuData = defaultMenuHomeActive;
  }
  if ( search && search === 'add' ) {
    menuData = menuSearch;
  }
  if ( search && search === 'all-hands' ) {
    menuData = menuAllHands;
  }
  
  return (
    <div className={classes.list}>
    {_.map(menuData, (item, i) => {
      if ( item.type === 'user' ) { return <OmniMenuUser {...item} key={'item' + i} /> }
      if ( item.type === 'nav' ) { return <OmniMenuNav {...item} key={'item' + i} /> }
      if ( item.type === 'action' ) { return <OmniMenuAction {...item} key={'item' + i} /> }
      if ( item.type === 'help' ) { return <OmniMenuHelp {...item} key={'item' + i} /> }
    } )}
    </div>
  );
}
