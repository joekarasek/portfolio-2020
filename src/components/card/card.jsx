import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
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
       fields,
       images = []
    }) => (
      <Link to={fields.slug} className="card">
        <div className="card__body">
          {client && <h4 className="card__client">{client}</h4>}
          {title && <h3 className="card__title">{title}</h3>}
        </div>
        {images[0] ? (
            <div className="card__image" style={{ backgroundImage: `url(${images[0].url})` }} />
        ) : (
            <div className="card__image" style={{ backgroundImage: "url(http://placekitten.com/g/200/300)" }} />
        )}
      </Link>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  client: PropTypes.string.isRequired,
  date: PropTypes.shape({
    start: PropTypes.string.isRequired,
    end: PropTypes.string,
  }).isRequired,
  description: PropTypes.string.isRequired,
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
  fields: PropTypes.shape({
    slug: PropTypes.string.isRequired,
  }).isRequired,
};

Card.defaultProps = {
  deliverables: null,
  tech: null,
  links: null,
  images: null,
};
