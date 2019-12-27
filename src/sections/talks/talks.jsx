import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
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
      .filter(talk => new Date(talk.date) > new Date(talk.date));
  const pastTalks = talks
      .sort((currentTalk, nextTalk) => new Date(nextTalk.date) - new Date(currentTalk.date))
      .filter(talk => new Date(talk.date) <= new Date(talk.date));

  return (
    <>
      <span id="talks" />
      <Headline decoration="right" className="talks__title">Talks</Headline>
      <div className="talks section container">
        <h3 className="talks__category">Upcoming</h3>
        {upComingTalks.length ? upComingTalks.map(talk => (
          <div className="talk" key={talk.id}>
            <h4 className="talk__name">{talk.name}</h4>
            <p className="talk__date">{talk.date}</p>
          </div>
          )) : (
              <p>Stay tuned for future talks...</p>
        )}
        <h3 className="talks__category">Past</h3>
        {pastTalks.map(talk => (
        <div className="talk" key={talk.id}>
          <h4 className="talk__name">{talk.name}</h4>
          <p className="talk__date">{talk.date} - {talk.location}</p>
        </div>
        ))}
      </div>
    </>
  );
}

Talks.propTypes = {};
