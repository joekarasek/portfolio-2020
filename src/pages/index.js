import React from 'react';
import { Layout, SEO } from '../components';
import { Projects, Skills, Interests, Talks } from '../sections';

import '../styles/global.scss';

export default () => (
  <Layout>
    <SEO />
    <Projects />
    <Interests />
    <Skills />
    <Talks />
  </Layout>
);
