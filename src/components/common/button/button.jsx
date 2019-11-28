import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

export const Button = ({ children, url, type }) => {
  if (url) {
    return (
      <a className={`button button--${type}`} href={url}>
        {children}
      </a>
    );
  }
  return <button className={`button button--${type}`}>{children}</button>;
};

Button.propTypes = {
  children: PropTypes.any,
  url: PropTypes.string,
  type: PropTypes.oneOf(['primary', 'secondary']),
};
