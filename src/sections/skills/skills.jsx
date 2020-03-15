import React from 'react';
import ReactWordcloud from 'react-wordcloud';
import Fade from 'react-reveal/Fade';
import { Headline } from '../../components';
import './skills.scss';
import softSkills from '../../data/skills/soft-skills';
import techSkills from '../../data/skills/technical-skills';

export const Skills = () => {
  const options = {
    colors: ['#fff', '#FF6B6B', '#4ECDC4', '#E8FFE8', '#FFED65'],
    enableTooltip: false,
    deterministic: false,
    fontSizes: [10, 30],
    fontFamily: "My Sans",
    fontStyle: 'normal',
    fontWeight: 'normal',
    padding: 2,
    rotations: 2,
    rotationAngles: [0, 90],
    scale: 'linear',
    transitionDuration: 1000,
    minSize: [300, 600]
  };

  return (
    <Fade>
      <span id="skills" />
      <Headline decoration="left" className="skills__title">Skills</Headline>
      <div className="skills section container">
        <div className="skill__cloud">
          <ReactWordcloud options={options} words={techSkills.words.concat(softSkills.words)} minSize={[300, 400]} key={techSkills.title} />
        </div>
      </div>
    </Fade>
  );
};

Skills.propTypes = {};
