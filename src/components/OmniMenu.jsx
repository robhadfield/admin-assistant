import React from 'react';
import _ from 'lodash';

import { createUseStyles } from 'react-jss';
import { omni as styles } from './styles/omni';

import { OmniMenuUser, OmniMenuNav, OmniMenuAction } from './OmniMenuItems';
import { defaultMenuHome } from './menuData';

const useStyles = createUseStyles(styles);

export const OmniMenu = ({search}) => {
  const classes = useStyles();
  
  return (
    <div className={classes.list}>
    {_.map(defaultMenuHome, (item, i) => {
      if ( item.type === 'user' ) { return <OmniMenuUser {...item} key={'item' + i} /> }
      if ( item.type === 'nav' ) { return <OmniMenuNav {...item} key={'item' + i} /> }
      if ( item.type === 'action' ) { return <OmniMenuAction {...item} key={'item' + i} /> }
    } )}
    </div>
  );
}
