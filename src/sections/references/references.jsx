import React from 'react';
import { Headline } from '../../components';
import referenceData from '../../data/references/references.json'
import './references.scss';
import Fade from 'react-reveal/Fade';

export const References = () => {
  return (
      <>
        <span id="references" />
        <Headline className="references__title">Professional References</Headline>
        <div className="references section container">
          {referenceData.map((node) => (
              <Fade key={node.referer}>
                <blockquote className="reference">
                  <span className="reference__body">{node.reference}</span>
                  <footer className="reference__referer">
                    -
                    {node.referer}
                  </footer>
                </blockquote>
              </Fade>
          ))}
        </div>
      </>
  );
};

References.propTypes = {};
