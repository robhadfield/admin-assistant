
  
export const omni = {
  inactive: {
    position: 'fixed',
    transform: 'translate(-50%, 40px)',
    opacity: 0
  },
  outer: {
    position: 'fixed',
    left: '50%',
    top: 200,
    transform: 'translate(-50%, 0)',
    opacity: 1,
    width: 600,
    display: 'flex',
    flexDirection: 'column',
    padding: 56,
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
    border: '2px solid transparent',

    '&:focus, &:active, &:hover': {
      border: '2px solid #198038',
      outline: 'none'
    }
  },


  omniList: {
    marginTop: 8
  },
  omniListItem: {
    display: 'flex',
    padding: 16,
    fontSize: 14,
    background: '#f5f5f5',
    borderRadius: 4,
    marginBottom: 2,

    '&:hover': {
      background: '#f1f1f1',
      cursor: 'pointer'
    }
  },
  omniListItemIcon: {
    opacity: '0.8',
    marginRight: 12
  }
}