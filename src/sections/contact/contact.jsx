import React from 'react';
// import { graphql, useStaticQuery } from 'gatsby';
import { Headline } from '../../components';
import './contact.scss';

export const Contact = () => {
  return (
      <>
        <span id="contact" />
        <Headline className="interests__title">Contact Me</Headline>
        <div className="contact section container">
          <div className="contact__social">
            <a href="https://github.com/joekarasek"><img className="contact__social-icon" src="/icons/github.svg" alt="Github" /></a>
            <a href="https://www.linkedin.com/in/joe-karasek/"><img className="contact__social-icon" src="/icons/linkedin.svg" alt="LinkedIn" /></a>
            <a href="https://twitter.com/karasek_joe"><img className="contact__social-icon" src="/icons/twitter.svg" alt="Twitter" /></a>
            <a href="mailto:jozin.joe@gmail.com"><img className="contact__social-icon" src="/icons/email.svg" alt="Email" /></a>
          </div>
        </div>
      </>
  );
};

Contact.propTypes = {};
