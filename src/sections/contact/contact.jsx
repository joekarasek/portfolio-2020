import React from 'react';
import Fade from 'react-reveal/Fade';
import { Headline } from '../../components';
import './contact.scss';

export const Contact = () => {
  return (
    <>
      <span id="contact" />
      <Fade>
        <Headline decoration="left" className="interests__title">Contact Me</Headline>
      </Fade>
      <div className="contact section container">
        <Fade>
          <div className="contact__social">
            <a className="contact__social-icon" href="https://github.com/joekarasek"><img src="/icons/github.svg" alt="Github" /></a>
            <a className="contact__social-icon" href="https://www.linkedin.com/in/joe-karasek/"><img src="/icons/linkedin.svg" alt="LinkedIn" /></a>
            <a className="contact__social-icon" href="https://twitter.com/karasek_joe"><img src="/icons/twitter.svg" alt="Twitter" /></a>
            <a className="contact__social-icon" href="mailto:jozin.joe@gmail.com"><img src="/icons/email.svg" alt="Email" /></a>
          </div>
        </Fade>
      </div>
    </>
  );
};

Contact.propTypes = {};
