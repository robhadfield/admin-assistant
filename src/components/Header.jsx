import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { header as styles } from './styles/header';
import useKey from '@accessible/use-key'

import { Omni } from './Omni';
import cash from '../images/cash.png';

const useStyles = createUseStyles(styles);

export const Header = () => {
  const classes = useStyles();
  const [keys = [], setKeys] = useState();
  const [helper = false, setHelper] = useState();

  useKey(window, {
    '/': (event) => setKeys(keys.concat(event.key)),
  });

  useEffect(()=> {
    if (keys.length === 1){ setHelper(!helper); setKeys([]); }
  }, [keys, helper]);
  
  return (
    <>
      <div className={classes.wrap}>
        <div className={classes.user}>
          <div className={classes.info}>
            <div className={classes.name}>Johnny Cash</div>
            <div className={classes.account}>Account Admin</div>
          </div>
          <div className={classes.avatar} style={{backgroundImage:`url(${cash})`}}></div>
        </div>
      </div>
      <Omni active={helper} />
    </>
  );
}
