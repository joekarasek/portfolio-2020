import React from 'react';
import ReactWordcloud from 'react-wordcloud';
import { graphql, useStaticQuery } from 'gatsby';
import './skills.scss';

export const Skills = () => {
  const {
    allSkillsJson: { nodes },
  } = useStaticQuery(
      graphql`
          {
              allSkillsJson {
                  nodes {
                      id
                      title
                      words {
                          text
                          value
                      }
                  }
              }
          }
      `
  );

  const options = {
    colors: ['#fff', '#8fffff'],
    enableTooltip: false,
    deterministic: true,
    fontSizes: [12, 45],
    fontFamily: "My Sans",
    fontStyle: 'normal',
    fontWeight: 'normal',
    padding: 1,
    rotations: 4,
    rotationAngles: [-45, 90],
    scale: 'linear',
    transitionDuration: 1000,
  };

  return (
    <div id="skills" className="skills section container">
      <h2 className="skills__title">Skills</h2>
      {nodes.map(node => (
          <div className="skill__cloud" key={node.id}>
            <h3 className="skill__title">{node.title}</h3>
            <ReactWordcloud options={options} words={node.words} key={node.id} />
          </div>
      ))}
    </div>
  );
}

Skills.propTypes = {};
