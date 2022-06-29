import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';

import { omni as styles } from './styles/omni';
import { OmniMenu } from './OmniMenu';

const useStyles = createUseStyles(styles);

export const Omni = ({active}) => {
  const classes = useStyles();
  const [ text, setText ] = useState('');

  return (
    <div className={active ? classes.outer : classes.inactive}>
      {active && 
        <input
          onChange={e => setText(e.target.value)}
          value={text}
          autoFocus
          className={classes.input}
          type="text"
          placeholder="Start typing..."
        />
      }
      <OmniMenu search={text} />
    </div>
  );
}
