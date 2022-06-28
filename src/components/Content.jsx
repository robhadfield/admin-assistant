import React from 'react';
import { createUseStyles } from 'react-jss';
import { content as styles } from './styles/content';

const useStyles = createUseStyles(styles);

export const Content = ({children}) => {
  const classes = useStyles();
  
  return (
    <div className={classes.outer}>
      Content
    </div>
  );
}
