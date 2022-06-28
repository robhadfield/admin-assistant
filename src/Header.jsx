import React, { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { header as styles } from './styles/header';
import useKey from '@accessible/use-key'

export const Header = () => {

  const useStyles = createUseStyles(styles);
  const css = useStyles();
  const [keys = [], setKeys] = useState();
  const [helper = false, setHelper] = useState();

  useKey(window, {
    Control: (event) => setKeys(keys.concat(event.key)),
    '/': (event) => setKeys(keys.concat(event.key)),
  });

  useEffect(()=> {
    if (keys.length === 2){ setHelper(!helper); setKeys([]); }
  }, [keys, helper]);
  
  return (
    <div className={css.wrap}>
      Header

      { helper && 
        <div>Banana</div>
      }
    </div>
  );
}
