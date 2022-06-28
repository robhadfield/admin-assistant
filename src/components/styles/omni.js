
  
export const omni = {
  inactive: {
    position: 'fixed',
    transform: 'translate(-50%, -30%)',
    opacity: 0
  },
  outer: {
    position: 'fixed',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    opacity: 1,
    width: 600,
    display: 'flex',
    flexDirection: 'row',
    padding: 56,
    background: 'white',
    padding: 24,
    borderRadius: 16,
    boxShadow: '0 24px 48px rgba(0,0,0,0.2), 0 0 1px 0 rgba(0,0,0,0.1)',
    transition: 'opacity, transform 300ms ease-out'
  },
  input: {
    display: 'block',
    padding: 16,
    fontSize: 16,
    fontFamily: '"Inter", sans-serif',
    border: 'none',
    width: '100%'
  }
}