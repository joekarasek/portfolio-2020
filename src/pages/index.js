import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Skills, Contact, Projects } from 'components/templates';

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <Projects />
    <Skills />
    <Contact />
  </Layout>
);
