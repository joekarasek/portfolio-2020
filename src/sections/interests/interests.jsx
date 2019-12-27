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
        {nodes[0].interests.map((node, index) => (
          <article className="interest" key={node.title}>
            <Headline decoration={index % 2 ? "left" : "both"} headingType="h4" color={index % 2 ? "seafoam" : "pastel-red"} className="interest__title">{node.title}</Headline>
            <p className="interest__body">{node.body}</p>
          </article>
          ))}
      </div>
    </>
  );
}

Interests.propTypes = {};
