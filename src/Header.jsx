import React from 'react';
import { createUseStyles } from 'react-jss';
import { header as styles } from './styles/header';

export const Header = () => {

  const useStyles = createUseStyles(styles);
  const css = useStyles();
  
  return (
    <div className={css.wrap}>
      Header
    </div>
  );
}
