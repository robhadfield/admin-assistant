import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { omni as styles } from './styles/omni';

const useStyles = createUseStyles(styles);

export const OmniMenuUser = ({label}) => {
  const classes = useStyles();
  
  return (
    <div className={[classes.listItem, classes.listItemUser].join(" ")}>
      <div className={classes.listItemIcon}>
        <div className={classes.listItemAvatar}></div>
      </div> {label}
    </div>
  );
}

export const OmniMenuNav = ({label}) => {
  const classes = useStyles();
  
  return (
    <div className={[classes.listItem, classes.listItemNav].join(" ")}>
      <div className={classes.listItemIcon}>
        <i className="fas fa-circle-location-arrow" />
      </div> {label}
    </div>
  );
}

export const OmniMenuAction = ({label}) => {
  const classes = useStyles();
  
  return (
    <div className={[classes.listItem, classes.listItemAction].join(" ")}>
      <div className={classes.listItemIcon}>
        <i className="fas fa-circle-bolt" />
      </div> {label}
    </div>
  );
}

export const OmniMenuHelp = ({label, helpType}) => {
  const classes = useStyles();
  const [video, setVideo] = useState(false);
  
  return (
    <div className={[classes.listItem, classes.listItemHelp].join(" ")}>
      <div className={classes.labelWrap}>
        <div className={classes.listItemIcon}>
          <i className="fas fa-circle-question" />
        </div> {label}
      </div>
      {helpType === 'video'
        ? <div onClick={() => setVideo(true)} className={classes.listItemVideo}><i className="fas fa-play"/></div>
        : <div className={classes.listItemDoc}><i className="far fa-arrow-up-right-from-square" /></div>
      }
      {video && <div className={classes.listItemVideoFrame} onClick={() => setVideo(false)}>
        <iframe width="960" height="540" src="https://www.youtube.com/embed/RRMgCMJd9N4" title="Slido" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>}
    </div>
  );
}