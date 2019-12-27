import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Card, Headline } from '../../components';
import './projects.scss';

export const Projects = () => {
  const {
    allProjectsJson: { nodes },
  } = useStaticQuery(
    graphql`
      {
        allProjectsJson {
          nodes {
            title
            tech
            client
            links {
              title
              url
            }
            description
            id
            deliverables
            images {
              url
              alt
            }
            date {
              end
              start
            }
            fields {
              slug
            }
          }
        }
      }
    `
  );
  return (
    <>
      <span id="projects" />
      <Headline decoration="left" className="projects__title">Portfolio</Headline>
      <div className="projects section container">
        <p className="projects__lead">Below is a collection of some of the recent projects I have worked on.</p>
        <p className="projects__help-text">
        Swipe left to see more...
        </p>
        <div className="projects__grid">
          {nodes.sort((currentNode, nextNode) => new Date(nextNode.date.start) - new Date(currentNode.date.start)).map(node => (
            <Card key={node.id} {...node} />
        ))}
          <div className="projects__scroll-fix-spacer" />
        </div>

      </div>
    </>
  );
};
