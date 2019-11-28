import React from 'react';
import PropTypes from 'prop-types';
import { Chip } from '../chip/chip';
import './card.scss';

export const Card = ({ title, client, date: { start, end } = {}, description, deliverables, tech, links }) => (
  <div className="card">
    {client && <h4 className="card__client">{client}</h4>}
    {title && <h3 className="card__title">{title}</h3>}
    {start && end && <p className="card__date">{`${start} - ${end}`}</p>}
    {tech && (
      <div className="card__technologies">
        {tech.map(tec => (
          <Chip className="card__technology">{tec}</Chip>
        ))}
      </div>
    )}
  </div>
);

Card.propTypes = {
  title: PropTypes.string,
  client: PropTypes.string,
  date: {
    start: PropTypes.string,
    end: PropTypes.string,
  },
  description: PropTypes.string,
  deliverables: [PropTypes.string, PropTypes.string],
  tech: PropTypes.arrayOf(PropTypes.string),
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      url: PropTypes.string,
    })
  ),
  images: PropTypes.arrayOf(PropTypes.string),
};
