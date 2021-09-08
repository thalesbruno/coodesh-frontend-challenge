import React from 'react';
import PropTypes from 'prop-types';
import MuiLink from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';

const Link = ({
  children,
  to,
  color,
  underline,
}) => (
  <MuiLink color={color} underline={underline}>
    <RouterLink to={to} style={{ color: 'inherit', display: 'inline-flex', textDecoration: 'none' }}>
      {children}
    </RouterLink>
  </MuiLink>

);

Link.defaultProps = {
  color: 'primary',
  underline: 'none',
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  color: PropTypes.string,
  underline: PropTypes.string,
};

export default Link;
