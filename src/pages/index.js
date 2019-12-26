import React from 'react';
import { Layout, SEO } from '../components';
import { Projects } from '../sections/projects/projects';

import '../styles/global.scss';

export default () => (
  <Layout>
    <SEO />
    <Projects />
  </Layout>
);
