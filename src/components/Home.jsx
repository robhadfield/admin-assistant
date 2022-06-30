import React from 'react';
import { createUseStyles } from 'react-jss';
import { NavLink } from 'react-router-dom';

import { content as styles } from './styles/content';
import cash from '../images/cash.png';
import illo from '../images/homePageIllo.png';
import tools from '../images/homePageTools.png';

const useStyles = createUseStyles(styles);

export const Home = () => {
  const css = useStyles();
  
  return (
    <div className={css.outer}>
      <div className={css.inner}>
        <div className={css.welcome}>
          <div className={css.avatar}>
            <img src={cash} alt="Logo" />
          </div>
          <div className={css.name}>
            Hello, I'm Johnny Cash
          </div>
        </div>
        <div className={css.createNewSlidoWrap}>
          <NavLink to="/event" className={css.createNewSlido}>
            <i className="far fa-chart-simple"/>
            Create a new Slido
          </NavLink>
        </div>
        <div className={css.intro}>
          <div className="left">
            <div className={css.introTitle}>
              Take a tour &amp; learn how Slido works
            </div>
            <div className={css.introP}>
              A quick guide to help you set up a demo event and learn the basics of Slido.
            </div>
          </div>
          <div className="right">
            <div className={css.homePageIllo}>
              <img width="100%" src={illo} alt="home page illo" />
            </div>
          </div>
        </div>
        <div className={css.homePageTools}>
          <img width="100%" src={tools} alt="home page tools" />
        </div>
      </div>
    </div>
  );
}
