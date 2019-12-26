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
            date {
              end
              start
            }
          }
        }
      }
    `
  );
  return (
    <div id="projects" className="projects container">
      <h2 className="projects__title">Projects</h2>
      <div className="projects__grid">
        {nodes.map(node => (
          <Card {...node}></Card>
        ))}
      </div>
    </div>
  );
};