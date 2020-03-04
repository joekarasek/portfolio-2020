import React from 'react';
import PropTypes from 'prop-types';
import './chip.scss';

export const Chip = ({ children, text }) => {
  return (
      <span className="chip">
        {text || children}
      </span>
  );
};

Chip.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  text: PropTypes.string.isRequired,
};
