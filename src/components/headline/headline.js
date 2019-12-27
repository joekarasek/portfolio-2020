import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Grid, Column, Container } from "../index";
import "./headline.scss";

export const Headline = ({
  children,
  offsetXs,
  offsetSm,
  offsetMd,
  offsetLg,
  offsetXl,
  decoration,
  headingType,
}) => {
  const classes = classNames("my-headline", `my-headline--${decoration}`);
  const Tag = headingType;
  return (
    <div className={classes}>
      <Container>
        <Grid>
          <Column
            aboveXs={{ offset: offsetXs }}
            aboveSm={{ offset: offsetSm }}
            aboveMd={{ offset: offsetMd }}
            aboveLg={{ offset: offsetLg }}
            aboveXl={{ offset: offsetXl }}
          >
            <Tag className="my-headline__text">
              {(decoration === "left" || decoration === "both") && (
                <div className="my-headline__preline">
                  <div className="my-headline__dash"></div>
                  {/*<div className="my-headline__dot"></div>*/}
                  {/*<div className="my-headline__dot"></div>*/}
                </div>
              )}
              {children}
              {(decoration === "right" || decoration === "both") && (
                <div className="my-headline__postline">
                  {/*<div className="my-headline__dot"></div>*/}
                  {/*<div className="my-headline__dot"></div>*/}
                  <div className="my-headline__dash"></div>
                </div>
              )}
            </Tag>
          </Column>
        </Grid>
      </Container>
    </div>
  );
};

Headline.defaultProps = {
  decoration: "right",
  headingType: "h2",
};

Headline.propTypes = {
  /** type of heading element */
  headingType: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  /** position of the decoration */
  decoration: PropTypes.oneOf(["left", "right", "both", "none"]),
  // color: PropTypes.oneOf(["yellow"]), @todo for now these are all yellow, however this is an easy refactor to get more colors
  /** offset at Xs and above screen width */
  offsetXs: PropTypes.number,
  /** offset at Sm and above screen width */
  offsetSm: PropTypes.number,
  /** offset at Md and above screen width */
  offsetMd: PropTypes.number,
  /** offset at Lg and above screen width */
  offsetLg: PropTypes.number,
  /** offset at Xl and above screen width */
  offsetXl: PropTypes.number,
};
