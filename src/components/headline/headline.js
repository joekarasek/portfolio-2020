import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Column } from "../grid/column";
import { Grid } from "../grid/grid";
import { Container } from "../container/container";
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
  color,
}) => {
  const classes = classNames("my-headline", `my-headline--${decoration}`, `my-headline--${color}` );
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
                  <div className="my-headline__dash" />
                  {/*<div className="my-headline__dot"></div>*/}
                  {/*<div className="my-headline__dot"></div>*/}
                </div>
              )}
              {children}
              {(decoration === "right" || decoration === "both") && (
                <div className="my-headline__postline">
                  {/*<div className="my-headline__dot"></div>*/}
                  {/*<div className="my-headline__dot"></div>*/}
                  <div className="my-headline__dash" />
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
  color: 'english-green',
  offsetXs: null,
  offsetSm: null,
  offsetMd: null,
  offsetLg: null,
  offsetXl: null,
};

Headline.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  headingType: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  decoration: PropTypes.oneOf(["left", "right", "both", "none"]),
  offsetXs: PropTypes.number,
  offsetSm: PropTypes.number,
  offsetMd: PropTypes.number,
  offsetLg: PropTypes.number,
  offsetXl: PropTypes.number,
  color: PropTypes.string,
};
