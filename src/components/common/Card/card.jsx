import React from 'react';
import PropTypes from 'prop-types';

export const Card = ({ title, client, date: { start, end } = {}, description, deliverables, tech, links }) => (
  <div className="card">
    {title && <h3 className="card__title">{title}</h3>}
    {client && <h4 className="card__client">{client}</h4>}
    {start && end && <p className="card__date">{`${start} - ${end}`}</p>}
    {description && <p className="card__description">{description}</p>}
    {deliverables && (
      <ul className="card__deliverables">
        {deliverables.map(deliverable => (
          <li className="card__deliverable">{deliverable}</li>
        ))}
      </ul>
    )}
    {tech && (
      <ul className="card__technologies">
        {tech.map(tec => (
          <li className="card__technology">{tec}</li>
        ))}
      </ul>
    )}
    {links && (
      <ul className="card__links">
        {links.map(link => (
          <a href={link.url} className="card__link">
            {link.title}
          </a>
        ))}
      </ul>
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
