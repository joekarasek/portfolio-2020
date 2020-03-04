import React from 'react';
import { Layout, SiteMeta } from '../components';
import { Projects, Skills, Interests, Talks, Contact } from '../sections';

import '../styles/global.scss';

export default () => (
  <Layout>
    <SiteMeta />
    <Projects />
    <Interests />
    <Skills />
    <Talks />
    <Contact />
  </Layout>
);
