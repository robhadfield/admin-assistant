
  
export const event = {
    outer: {
      display: 'flex',
      flexDirection: 'column',
      padding: '40px 64px',
      fontFamily: '"Inter", sans-serif',
      letterSpacing: '-0.04em'
    },
    welcome: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      marginBottom: 24,
    },
    name: {
      fontSize: 24,
      color: '#3d3d3d',
      fontWeight: 700
    },
    event: {
      marginLeft: -12,
      maxWidth: 1100,
      
      '& img': {
        width: '100%',
        height: 'auto',
      }
    },
    addTemplateButton: {
      padding: '8px 16px',
      background: '#198038',
      color: 'white',
      borderRadius: 4
    },
    /**
     * 
     * Modal
     * 
     */
    modalBg: {
      background: 'rgba(0,0,0,0.65)',
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    modal: {
      background: 'white',
      padding: 24,
      borderRadius: 8,
      boxShadow: '0 24px 48px rgba(0,0,0,0.2), 0 0 1px 0 rgba(0,0,0,0.1)',
    }
}