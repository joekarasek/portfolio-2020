import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./grid.scss";

export const Grid = ({
  alignRowItemHeights,
  children,
  className,
  hasGutter,
  gutterSize,
}) => {
  const classes = classNames(
    "my-grid",
    {
      "my-grid--align-row-item-heights": alignRowItemHeights,
      "my-grid--has-gutter": hasGutter,
      [`my-grid--gutter-size--${gutterSize}`]: gutterSize,
    },
    className,
  );

  return <div className={classes}>{children}</div>;
};

Grid.defaultProps = {
  hasGutter: true,
  gutterSize: null,
  alignRowItemHeights: false,
};

Grid.propTypes = {
  /** Should there be a gutter between the items */
  hasGutter: PropTypes.bool,
  /** The size of the gutter, defaults to 'default' */
  gutterSize: PropTypes.string,
  /** Sets children in a row to be the same height as the largest item. NOTE: If true, Column components MUST have a single DOM node, not a nodeList */
  alignRowItemHeights: PropTypes.bool,
  /** @ignore */
  className: PropTypes.string,
};
