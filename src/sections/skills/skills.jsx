import React from 'react';
import ReactWordcloud from 'react-wordcloud';
import { graphql, useStaticQuery } from 'gatsby';
import { Headline } from '../../components';
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
    colors: ['#fff', '#FF6B6B', '#4ECDC4', '#E8FFE8'],
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
    <>
      <span id="skills" />
      <Headline decoration="left" className="skills__title">Skills</Headline>
      <div className="skills section container">
        {nodes.map(node => (
          <div className="skill__cloud" key={node.id}>
            <h3 className="skill__title">{node.title}</h3>
            <ReactWordcloud options={options} words={node.words} key={node.id} />
          </div>
      ))}
      </div>
    </>
  );
}

Skills.propTypes = {};
