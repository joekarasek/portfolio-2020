import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Card } from '../../components';
// import starIcon from 'assets/icons/star.svg';
// import forkIcon from 'assets/icons/fork.svg';
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
    <div id="projects" className="projects section container">
      <h2 className="projects__title">Portfolio</h2>
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
  );
};
