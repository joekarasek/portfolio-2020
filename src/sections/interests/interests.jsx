import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Headline } from '../../components';
import './interests.scss';

export const Interests = () => {
  const {
    allInterestsJson: { nodes },
  } = useStaticQuery(
      graphql`
          {
              allInterestsJson {
                  nodes {
                      interests {
                          body
                          title
                      }
                  }
              }
          }
      `
  );

  return (
    <>
      <span id="interests" />
      <Headline className="interests__title">Professional Interests</Headline>
      <div className="interests section container">
        {nodes[0].interests.map(node => (
          <article className="interest" key={node.title}>
            <h3 className="interest__title">{node.title}</h3>
            <p className="interest__body">{node.body}</p>
          </article>
          ))}
      </div>
    </>
  );
}

Interests.propTypes = {};
