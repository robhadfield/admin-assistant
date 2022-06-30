import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { omni as styles } from './styles/omni';

import dolly from '../images/dolly.png';
import kenny from '../images/kenny.png';

const useStyles = createUseStyles(styles);

export const OmniMenuUser = ({label,img}) => {
  const classes = useStyles();
  
  return (
    <div className={[classes.listItem, classes.listItemUser].join(" ")}>
      <div className={classes.listItemIcon}>
        <div className={classes.listItemAvatar}>
          { img === 'dolly' ? <img alt="user" src={dolly} /> : <img alt="user" src={kenny} /> }
        </div>
      </div> <div dangerouslySetInnerHTML={{ __html: label}}/>
    </div>
  );
}

export const OmniMenuNav = ({label}) => {
  const classes = useStyles();
  
  return (
    <div className={[classes.listItem, classes.listItemNav].join(" ")}>
      <div className={classes.listItemIcon}>
        <i className="fas fa-circle-location-arrow" />
      </div> <div dangerouslySetInnerHTML={{ __html: label}}/>
    </div>
  );
}

export const OmniMenuAction = ({label}) => {
  const classes = useStyles();
  
  return (
    <div className={[classes.listItem, classes.listItemAction].join(" ")}>
      <div className={classes.listItemIcon}>
        <i className="fas fa-circle-bolt" />
      </div> <div dangerouslySetInnerHTML={{ __html: label}}/>
    </div>
  );
}

export const OmniMenuHelp = ({label, helpType}) => {
  const classes = useStyles();
  const [isVideoActive, setIsVideoActive] = useState(false);
  
  return (
    <div className={[classes.listItem, classes.listItemHelp].join(" ")}>
      <div className={classes.labelWrap}>
        <div className={classes.listItemIcon}>
          <i className="fas fa-circle-question" />
        </div> <div dangerouslySetInnerHTML={{ __html: label}}/>
      </div>
      {helpType === 'video'
        ? <div onClick={() => setIsVideoActive(true)} className={classes.listItemVideo}><i className="fas fa-play"/></div>
        : <div className={classes.listItemDoc}><i className="far fa-arrow-up-right-from-square" /></div>
      }
      {isVideoActive && <div className={classes.listItemVideoFrame} onClick={() => setIsVideoActive(false)}>
        <iframe width="960" height="540" src="https://www.youtube.com/embed/qWwbuqNJaw8" title="Slido" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>}
    </div>
  );
}