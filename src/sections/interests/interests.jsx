import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
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
    <div id="interests" className="interests section container">
      <h2 className="interests__title">Professional Interests</h2>
      {nodes[0].interests.map(node => (
        <article className="interest" key={node.title}>
          <h3 className="interest__title">{node.title}</h3>
          <p className="interest__body">{node.body}</p>
        </article>
        ))}
    </div>
  );
}

Interests.propTypes = {};
