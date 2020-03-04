import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./grid.scss";
import "./column.scss";

export const Column = ({
  children,
  className,
  base,
  aboveXs,
  aboveSm,
  aboveMd,
  aboveLg,
  aboveXl,
}) => {
  const classes = classNames(
    "my-column",
    {
      // base
      [`my-column--base-span-${base.span}`]: base && base.span,
      [`my-column--base-offset-${base.offset}`]: base && base.offset,
      // xs
      [`my-column--above-xs-span-${aboveXs.span}`]: aboveXs && aboveXs.span,
      [`my-column--above-xs-offset-${aboveXs.offset}`]:
        aboveXs && typeof aboveXs.offset === "number",
      // sm
      [`my-column--above-sm-span-${aboveSm.span}`]: aboveSm && aboveSm.span,
      [`my-column--above-sm-offset-${aboveSm.offset}`]:
        aboveSm && typeof aboveSm.offset === "number",
      // md
      [`my-column--above-md-span-${aboveMd.span}`]: aboveMd && aboveMd.span,
      [`my-column--above-md-offset-${aboveMd.offset}`]:
        aboveMd && typeof aboveMd.offset === "number",
      // lg
      [`my-column--above-lg-span-${aboveLg.span}`]: aboveLg && aboveLg.span,
      [`my-column--above-lg-offset-${aboveLg.offset}`]:
        aboveLg && typeof aboveLg.offset === "number",
      // xl
      [`my-column--above-xl-span-${aboveXl.span}`]: aboveXl && aboveXl.span,
      [`my-column--above-xl-offset-${aboveXl.offset}`]:
        aboveXl && typeof aboveXl.offset === "number",
    },
    className,
  );

  return <div className={classes}>{children}</div>;
};

Column.defaultProps = {
  base: {
    span: 12,
    offset: 0,
  },
  aboveXs: {},
  aboveSm: {},
  aboveMd: {},
  aboveLg: {},
  aboveXl: {},
};

Column.propTypes = {
  /** Contents of the Column */
  children: PropTypes.node.isRequired,
  /** @ignore */
  className: PropTypes.string,
  /** base column span and offset */
  base: PropTypes.shape({
    /** Columns to span  */
    span: PropTypes.number,
    /** Column offset from the left */
    offset: PropTypes.number,
  }),
  /** Breakpoint extra small */
  aboveXs: PropTypes.shape({
    /** Columns to span  */
    span: PropTypes.number,
    /** Column offset from the left */
    offset: PropTypes.number,
  }),
  /** Breakpoint small  */
  aboveSm: PropTypes.shape({
    /** Columns to span  */
    span: PropTypes.number,
    /** Column offset from the left  */
    offset: PropTypes.number,
  }),
  /** Breakpoint medium  */
  aboveMd: PropTypes.shape({
    /** Columns to span  */
    span: PropTypes.number,
    /** Column offset from the left  */
    offset: PropTypes.number,
  }),
  /** Breakpoint large  */
  aboveLg: PropTypes.shape({
    /** Columns to span  */
    span: PropTypes.number,
    /** Column offset from the left  */
    offset: PropTypes.number,
  }),
  /** Breakpoint extra large  */
  aboveXl: PropTypes.shape({
    /** Columns to span  */
    span: PropTypes.number,
    /** Column offset from the left  */
    offset: PropTypes.number,
  }),
};
