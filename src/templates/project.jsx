import React from "react";
import { Link } from 'gatsby';
import { Headline } from '../components/index';
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
    <div className="project-page">
      <div className="project-page__home container">
        <Link to="/"><img src="/icons/home.svg" alt="Homepage"/></Link>
      </div>
      <Headline headingType="h1" decoration="left">{client}</Headline>
      <div className="project-page__main container">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="project-page__deliverables-wrapper">
          <h3>Deliverables</h3>
          <ul>
            {deliverables.map(deliverable => <li key={deliverable}>{deliverable}</li>)}
          </ul>
        </div>
        {tech.length !== 0 && (
          <div className="project-page__tech-wrapper">
            <h3>Tech</h3>
            <ul>
              {tech.map(tech => <li key={tech}>{tech}</li>)}
            </ul>
          </div>
        )}
        {links.length !== 0 && (
          <div className="project-page__links-wrapper">
          <h3>Links</h3>
          <div>
          {links.map(link => <a key={link.title} href={link.url || link.link}>{link.title}</a>)}
          </div>
          </div>
        )}
      </div>
      <Headline headingType="h3" decoration="right">Images</Headline>
      <div className="container">
        {images.length > 1 && (<p>Swipe left to see more...</p>)}
        <div className="project-page__images">
          {images.map(image => (<img key={image.alt} src={image.url} alt={image.alt} />))}
          <div className="projects__scroll-fix-spacer" />
        </div>
      </div>
    </div>
  )
}
