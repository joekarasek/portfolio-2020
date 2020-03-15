import React from 'react';
import { Marquee, SiteMeta } from '../components';
import Fade from 'react-reveal/Fade'; // Importing Zoom effect
import { Projects, Skills, Interests, References, Talks, Contact } from '../sections';

import '../styles/global.scss';

export default () => (
  <>
    <Marquee />
    <SiteMeta />
    <Projects />
    {/*<Interests />*/}
    <References />
    <Skills />
    <Talks />
    <Contact />
  </>
);
