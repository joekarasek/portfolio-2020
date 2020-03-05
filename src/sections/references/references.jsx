import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Headline } from '../../components';
import './references.scss';

export const References = () => {
  const {
    allReferencesJson: { nodes },
  } = useStaticQuery(
      graphql`
          {
              allReferencesJson {
                  nodes {
                      reference
                      referer
                  }
              }
          }
      `
  );

  return (
    <>
      <span id="references" />
      <Headline className="references__title">Professional References</Headline>
      <div className="references section container">
        {nodes.map((node) => (
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
}

References.propTypes = {};
