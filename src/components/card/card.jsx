import React from 'react';
import PropTypes from 'prop-types';
import { Chip } from '../chip/chip';
import './card.scss';

export const Card = (
    { title,
       client,
       date: {
         start,
         end
       } = {},
       description,
       deliverables,
       tech,
       links,
       images = []
    }) => (
      <article className="card">
        {images[0] ? (
          <div className="card__image" style={{ backgroundImage: `url(${images[0].url})` }} />
        ) : (
          <div className="card__image" style={{ backgroundImage: "url(http://placekitten.com/g/200/300)" }} />
        )}
        <div className="card__body">
          {client && <h4 className="card__client">{client}</h4>}
          {title && <h3 className="card__title">{title}</h3>}
        </div>
      </article>
);

Card.propTypes = {
  title: PropTypes.string,
  client: PropTypes.string,
  date: PropTypes.shape({
    start: PropTypes.string,
    end: PropTypes.string,
  }),
  description: PropTypes.string,
  deliverables: PropTypes.arrayOf(PropTypes.string),
  tech: PropTypes.arrayOf(PropTypes.string),
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      url: PropTypes.string,
    })
  ),
  images: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      alt: PropTypes.string,
    })
  ),
};
