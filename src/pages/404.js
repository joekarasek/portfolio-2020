import React from 'react';
import { SiteMeta } from 'components';
import { Link } from 'gatsby';
import { Headline } from '../components';

export default () => (
  <>
    <SiteMeta title="404: Not found" location="/404" />
    <div className="project-page__home container">
      <Link to="/"><img src="/icons/home.svg" alt="Homepage" /></Link>
    </div>
    <Headline headingType="h1" decoration="left">Dead Link</Headline>
    <img src="/images/dead-link.png" alt="Dead Link from Zelda game series" style={{ maxWidth: '200px' }} />
  </>
);
