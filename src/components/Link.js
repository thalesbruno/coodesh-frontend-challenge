/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
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

Link.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Link;
