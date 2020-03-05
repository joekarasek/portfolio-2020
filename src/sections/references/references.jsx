import React from 'react';
import { Headline } from '../../components';
import referenceData from '../../data/references/references.json'
import './references.scss';

export const References = () => {
  return (
    <>
      <span id="references" />
      <Headline className="references__title">Professional References</Headline>
      <div className="references section container">
        {referenceData.map((node) => (
          <blockquote className="reference" key={node.referer}>
            <span className="reference__body">{node.reference}</span>
            <footer className="reference__referer">
              -
              {node.referer}
            </footer>
          </blockquote>
          ))}
      </div>
    </>
  );
};

References.propTypes = {};
