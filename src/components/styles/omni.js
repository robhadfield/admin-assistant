
  
export const omni = {
  inactive: {
    position: 'fixed',
    transform: 'translate(-50%, 40px)',
    opacity: 0,
    left: '50%',
    top: 140,
    pointerEvents: 'none',
  },
  outer: {
    position: 'fixed',
    transform: 'translate(-50%, 0)',
    opacity: 1,
    left: '50%',
    top: 140,
    width: 600,
    display: 'flex',
    flexDirection: 'column',
    background: 'white',
    padding: 24,
    fontFamily: '"Inter", sans-serif',
    borderRadius: 16,
    boxShadow: '0 24px 48px rgba(0,0,0,0.2), 0 0 1px 0 rgba(0,0,0,0.1)',
    transition: 'opacity, transform 300ms ease-out'
  },
  input: {
    display: 'block',
    padding: 16,
    borderRadius: 8,
    fontSize: 24,
    fontFamily: '"Inter", sans-serif',
    border: '2px solid #eaeaea',

    '&:focus, &:active, &:hover': {
      border: '2px solid #198038',
      outline: 'none'
    }
  },


  list: {
    marginTop: 8
  },

  listItem: {
    display: 'flex',
    alignItems: 'center',
    padding: 16,
    fontSize: 16,
    color: '#161616',
    background: '#f5f5f5',
    borderRadius: 4,
    marginBottom: 2,

    '&:hover': {
      background: '#f1f1f1',
      cursor: 'pointer'
    }
  },
  listItemIcon: {
    opacity: '0.8',
    marginRight: 12,
    fontSize: 32
  },
  listDivider: {
    marginTop: 8,
    marginBottom: 8,
    border: 'none',
    borderTop: '1px solid #eaeaea'
  },
  /**
   * 
   * Variants
   * 
   */
  listItemUser: {
    background: '#FEF0E6',
    '&:hover': {
      background: '#FFEBDD',
    },
  },
  listItemNav: {
    background: '#F0EBFF',
    '&:hover': {
      background: '#EAE3FF',
    },
    '& svg': {
      color: '#8438F5'
    }
  },
  listItemAction: {
    background: '#DCFEFE',
    '&:hover': {
      background: '#D1FEFE'
    },
    '& svg': {
      color: '#009999'
    }
  },
  listItemHelp: {
    display: 'flex',
    justifyContent: 'space-between',
  },


  /**
   * Helpers
   */
  listItemAvatar: {
    
    '& img': {
      display: 'block',
      height: 32,
      width: 32,
      borderRadius: 16,
    },
  },
  labelWrap: {
    display: 'flex',
    alignItems: 'center',

    '& svg': {
      color: '#24A148'
    }
  },
  listItemVideo: {
    padding: '6px 16px',
    borderRadius: 4,
    background: '#24A148',
    '& svg': {
      color: 'white'
    }
  },
  listItemVideoFrame: {
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    zIndex: 1,
    top: -140,
    left: '-148%',
    background: 'rgba(255,255,255,.85)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}