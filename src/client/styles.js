const wrapper = {
  width: '100%',
  maxWidth: '1000px',
  margin: '1em auto',
  padding: '1em',
  boxSizing: 'border-box',
};

const isStriped = {
  backgroundColor: 'rgba(233, 200, 147, 0.2)',
  boxSizing: 'border-box',
};

const rtable = {
  display: 'flex',
  flexWrap: 'wrap',
  margin: '0 0 3em 0',
  padding: '0',
  boxShadow: '0 0 40px rgba(0, 0, 0, 0.2)',
  boxSizing: 'border-box',
};

const rtableRowHeader = {
  backgroundColor: '#ff6600',
  display: 'flex',
  boxSizing: 'border-box',
};

const rtableRow = {
  width: '100%',
  display: 'flex',
  fontSize: 'small',
  boxSizing: 'border-box',
};

const rtableCell = {
  boxSizing: 'border-box',
  flexGrow: '1',
  padding: '0.2em 0.4em',
  overflow: 'hidden',
  listStyle: 'none',
  boxSizing: 'border-box',
};

const columnHeading = {
  color: 'white',
  /* padding: 1em, */
  fontWeight: 'bold',
  textAlign: 'start',
  alignSelf: 'flex-end',
  boxSizing: 'border-box',
};

const commentCell = {
  width: '8%',
  boxSizing: 'border-box',
};

const countCell = {
  width: '6%',
  boxSizing: 'border-box',
};

const textCell = {
  width: '80%',
  boxSizing: 'border-box',
};

const footerContainer = {
  display: 'flex',
  justifyContent: 'flex-end',
  boxSizing: 'border-box',
};

const linkSeparator = {
  color: '#ff6600',
  fontWeight: 'bold',
  boxSizing: 'border-box',
};

const linkButton = {
  backgroundColor: 'transparent',
  fontWeight: 'bold',
  border: 'none',
  cursor: 'pointer',
  color: '#ff6600',
  display: 'inline',
  margin: '0',
  padding: '0',
  boxSizing: 'border-box',
};

const divider = {
  border: '1px solid #ff6600',
  boxSizing: 'border-box',
};

const subtext = {
  fontFamily: '"Verdana", "Geneva", "sans-serif"',
  fontSize: '7pt',
  color: '#828282',
};

const hideButton = {
  cursor: 'pointer',
};

export {
  wrapper,
  isStriped,
  rtable,
  rtableRowHeader,
  rtableRow,
  rtableCell,
  columnHeading,
  commentCell,
  countCell,
  textCell,
  footerContainer,
  linkSeparator,
  linkButton,
  divider,
  subtext,
  hideButton,
};
