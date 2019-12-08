import React from 'react';
import { Layout, SEO } from 'components/common';
import { Contact } from 'components/templates';
import { Projects } from '../sections/projects/projects';

import '../styles/global.scss';

export default () => (
  <Layout>
    <SEO />
    <Projects />
    <Contact />
  </Layout>
);
