import React from "react";
import './project.scss';

export default ({ pageContext }) => {
  const {
    client,
    deliverables,
    description,
    images,
    links,
    tech,
    title,
  } = pageContext;
  return (
    <div className="container project-page">
      <div className="project-page__images">
        {images.map(image => (<img key={image.alt} src={image.url} alt={image.alt} />))}
      </div>
      <h1>{client}</h1>
      <h2>{title}</h2>
      <p>{description}</p>
      <h3>Deliverables</h3>
      <ul>
        {deliverables.map(deliverable => <li key={deliverable}>{deliverable}</li>)}
      </ul>
      <h3>Links</h3>
      <ul>
        {links.map(link => <a key={link.title} href={link.url || link.link}>{link.title}</a>)}
      </ul>
    </div>
  )
}
