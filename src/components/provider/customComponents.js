import colors from './colors';
const blockquote = {
  margin: 0,
  padding: '10px',
  borderLeft: '3px solid',
  borderColor: colors.primary,
  background: colors.lightGrey,
  fontStyle: 'italic',
  fontSize: '20px'
};

const anchor = {
  textDecoration: 'none',
  color: colors.primary,
  fontWeight: '500'
};

const paragraph = {
  textDecoration: 'none',
  color: colors.greyText,
  fontWeight: '400'
};

const table = {
  display: 'block',
  overflow: 'auto',
  width: '100%'
};

export { blockquote, anchor, paragraph };
