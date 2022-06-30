import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';

import { event as styles } from './styles/event';
import event from '../images/event.png';

const useStyles = createUseStyles(styles);

export const Event = () => {
  const css = useStyles();

  const [isTemplateModalActive, setIsTemplateModalActive] = useState(false);
  
  return (
    <div className={css.outer}>
      <div className={css.welcome}>
        <div className={css.name}>
          My amazing event
        </div>
        <div className={css.addTemplateButton} onClick={ () => setIsTemplateModalActive(true)}>
          Create Slido template
        </div>
      </div>
      <div className={css.event}>
        <img src={event} alt="Event Admin" />
      </div>
      { isTemplateModalActive &&
        <div className={css.modalBg}>
          <div className={css.modal}>
            <h2>Create Slido template</h2>
            <div><input type="text" placeholder="Action Name" /></div>
            <div><input type="checkbox" /><label>Include polls</label></div>
            <div><input type="checkbox" /><label>Include Slido settings</label></div>
            <div><input type="checkbox" /><label>Include collaborators</label></div>
            <div>
              <span className={css.addTemplateButton} onClick={ () => setIsTemplateModalActive(false)}>Save</span>
            </div>
          </div>
        </div>
      }
    </div>
  );
}
