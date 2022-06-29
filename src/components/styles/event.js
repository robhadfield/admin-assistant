
  
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
    }
}