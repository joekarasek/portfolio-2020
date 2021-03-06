import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Fade from 'react-reveal/Fade';
import { Headline } from '../../components';
import './talks.scss';

export const Talks = () => {
  const {
    allTalksJson: { nodes: talks },
  } = useStaticQuery(
      graphql`
          {
              allTalksJson {
                  nodes {
                      name
                      id
                      location
                      date
                  }
              }
          }
      `
  );

  const now = new Date();
  const upComingTalks = talks
      .sort((currentTalk, nextTalk) => new Date(nextTalk.date) - new Date(currentTalk.date))
      .filter(talk => new Date(talk.date) > new Date());
  const pastTalks = talks
      .sort((currentTalk, nextTalk) => new Date(nextTalk.date) - new Date(currentTalk.date))
      .filter(talk => new Date(talk.date) <= new Date());

  return (
    <>
      <span id="talks" />
      <Fade>
        <Headline decoration="right" className="talks__title">Talks</Headline>
      </Fade>
      <div className="talks section container">
        <h3 className="talks__category">Upcoming</h3>
        {upComingTalks.length ? upComingTalks.map(talk => (
          <Fade key={talk.id}>
            <div className="talk">
              <h4 className="talk__name">{talk.name}</h4>
              <p className="talk__date">{talk.date} - {talk.location}</p>
            </div>
          </Fade>
          )) : (
              <p>Stay tuned for future talks...</p>
        )}
        <h3 className="talks__category">Past</h3>
        {pastTalks.map(talk => (
          <Fade key={talk.id}>
            <div className="talk">
              <h4 className="talk__name">{talk.name}</h4>
              <p className="talk__date">{talk.date} - {talk.location}</p>
            </div>
          </Fade>
        ))}
      </div>
    </>
  );
}

Talks.propTypes = {};
