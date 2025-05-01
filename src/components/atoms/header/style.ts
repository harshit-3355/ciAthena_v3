export const styles = {
  headerContainer: (backgroundImage: string) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    height: '75px',
    color: '#fff',
  }),
  leftBox: {
    ml: 4,
    display: 'flex',
    alignItems: 'center',
  },
  divider: {
    ml: '24px',
    mr: '8px',
    borderLeft: '1px solid transparent',
    width: '1px',
    height: '25px',
    backgroundColor: '#A9A9A9',
  },
  logoBox: {
    mx: 1,
  },
  headingText: {
    fontSize: '18px',
    fontWeight: 700,
  },
  rightBox: {
    mr: 2,
    display: 'flex',
    alignItems: 'center',
    px: 1.5,
    py: 0.5,
    borderRadius: 1,
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    '&:hover': {
      backgroundColor: '#165379',
    },
  },
  rightText: {
    mb: '2px',
    ml: 1,
  },
};
