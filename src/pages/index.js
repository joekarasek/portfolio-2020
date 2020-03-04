import React from 'react';
import { Marquee, SiteMeta } from '../components';
import { Projects, Skills, Interests, Talks, Contact } from '../sections';

import '../styles/global.scss';

export default () => (
  <>
    <Marquee />
    <SiteMeta />
    <Projects />
    <Interests />
    <Skills />
    <Talks />
    <Contact />
  </>
);
