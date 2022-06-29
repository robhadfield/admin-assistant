
  
export const menu = {
    wrap: {
      display: 'flex',
      flexDirection: 'column',
      width: 160,
      height: '100vh',
      background: 'white',
      borderRight: '1px solid #e5e5e5'
    },
    expand: {
      position: 'absolute',
      top: 10,
      left: 132,
      fontSize: 16,
      padding: 8,
      background: 'white',
      border: '1px solid #e5e5e5',
      borderRadius: 4,
      color: '#525252',
    },
    logo: {
      width: 72,
      height: 24,
      paddingTop: 16,
      paddingLeft: 38,
      marginBottom: 40
    },
    menuList: {
      padding: 16,

      '& a': {
        textDecoration: 'none'
      }
    },
    menuItem: {
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      borderRadius: 8,
      marginBottom: 4,

      '&.active': {
        background: '#E5FAEC',
      },

      '&:hover': {
        background: '#E5FAEC',
        cursor: 'pointer'
      }
    },
    menuIcon: {
      fontSize: 16,
      color: '#525252',
      marginBottom: 8,
    },
    menuLabel: {
      fontSize: 12,
      color: '#525252'
    }
}