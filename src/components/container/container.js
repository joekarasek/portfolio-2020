import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./container.scss";

export const Container = ({ children, isFullPage, className }) => {
  const classes = classNames(
    "container",
    {
      container__isFullPage: isFullPage,
    },
    className,
  );

  return <div className={classes}>{children}</div>;
};

Container.defaultProps = {
  isFullPage: false,
  className: "",
};

Container.propTypes = {
  /** @ignore */
  children: PropTypes.node.isRequired,
  /** Makes the container full width and fluid, as opposed to the default step-wise container behavior. */
  isFullPage: PropTypes.bool,
  /** @ignore */
  className: PropTypes.string,
};
