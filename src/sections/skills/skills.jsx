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
    colors: ['#fff', '#FF6B6B', '#4ECDC4', '#E8FFE8', '#FFED65'],
    enableTooltip: false,
    deterministic: false,
    fontSizes: [10, 30],
    fontFamily: "My Sans",
    fontStyle: 'normal',
    fontWeight: 'normal',
    padding: 1,
    rotations: 1,
    rotationAngles: [0, 0],
    scale: 'linear',
    transitionDuration: 1000,
    minSize: [300, 600]
  };

  return (
    <>
      <span id="skills" />
      <Headline decoration="left" className="skills__title">Skills</Headline>
      <div className="skills section container">
        {nodes.map(node => (
          <div className="skill__cloud" key={node.id}>
            <h3 className="skill__title">{node.title}</h3>
            <ReactWordcloud options={options} words={node.words} minSize={[300, 400]} key={node.id} />
          </div>
      ))}
      </div>
    </>
  );
};

Skills.propTypes = {};
