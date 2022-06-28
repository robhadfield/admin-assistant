import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { header as styles } from './styles/header';
import useKey from '@accessible/use-key'

import { Omni } from './Omni';

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
        <input type="text" className={classes.headerinput} placeholder="Start typing..." />
        <div className={classes.user}>
          <div className={classes.info}>
            <div className={classes.name}>Robyn Rihanna Fenty</div>
            <div className={classes.account}>Account Admin</div>
          </div>
          <div className={classes.avatar}></div>
        </div>
      </div>
      <Omni active={helper} />
    </>
  );
}
