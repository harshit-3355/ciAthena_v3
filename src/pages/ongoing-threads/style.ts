// #/pages/ongoing-threads/style.ts

export const styles = {
  sharedCentered: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  introTitle: {
    color: '#646464',
    textAlign: 'center',
    marginTop: '18%',
    fontWeight: 700,
    fontSize: '26px',
    fontFamily: 'Helvetica',
  },
  resultContainer: {
    backgroundColor: '#f4f4f4',
    borderRadius: 1,
    marginTop: '20px',
  },
  mainQueryTitle: {
    fontSize: 20,
    fontWeight: 500,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: '100%',
    '&::first-letter': { textTransform: 'uppercase' },
  },
  sectionBoxLeft: {
    width: '25%',
    borderRight: '1px solid #E2E8F0',
  },
  sectionBoxRight: {
    width: '25%',
    borderLeft: '1px solid #E2E8F0',
  },
  pageContainer: {
    display: 'flex',
    height: '100vh',
  },
  centerSection: (width: string, background: string) => ({
    width,
    background,
  }),
  queryBox: {
    paddingLeft: 4,
    paddingRight: 4,
    paddingTop: 2,
    paddingBottom: 2,
    height: '100%',
  },
  resultTitle: {
    marginTop: 3,
  },
  resultText: {
    marginTop: 2,
  },
  sqlQueryText: {
    marginTop: 4,
  },
};
