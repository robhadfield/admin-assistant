
  
export const content = {
    outer: {
      display: 'flex',
      justifyContent: 'center',
      padding: '40px 64px',
      fontFamily: '"Inter", sans-serif',
      letterSpacing: '-0.04em'
    },
    inner: {
      maxWidth: 1200,
    },
    welcome: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      marginBottom: 24,
    },
    avatar: {
      width: 56,
      height: 56,
      borderRadius: 56,
      overflow: 'hidden',
      marginRight: 20,

      '& img': {
        width: 56,
        height: 56,
      }
    },
    name: {
      fontSize: 24,
      color: '#3d3d3d',
      fontWeight: 700
    },
    intro: {
      display: 'flex',
      padding: 40,
      background: 'white',
      borderRadius: 16,
      maxWidth: 1152,
      marginBottom: 24,

      '& > .left': {
        width: '40%',
        paddingTop: 56
      },
      '& > .right': {
        width: '60%'
      },
    },
    introTitle: {
      fontSize: 32,
      fontWeight: 700,
      maxWidth: 380,
      marginBottom: 24,
    },
    introP: {
      fontSize: 24,
      fontWeight: 500,
      maxWidth: 320,
    },
    createNewSlidoWrap: {
      paddingTop: 16,
      paddingBottom: 32,
    },
    createNewSlido: {
      padding: '16px 16px',
      borderRadius: 8,
      background: '#198038',
      width: 180,
      fontWeight: 500,
      color: 'white',
      textAlign: 'center',
      marginBottom: 24,
      textDecoration: 'none',

      '& svg': {
        fontWeight: 'normal',
        marginRight: 8
      }
    },
    homePageTools: {
      maxWidth: 1200,
      backgroundSize: '100% auto',
    }
}