import React from 'react';
import './marquee.scss';

export const Marquee = () => (
  <header className="marquee">
    <div className="marquee__wrapper">
      <h1 className="marquee__title">Joe Karasek</h1>
      <h2 className="marquee__subtitle">Web Developer</h2>
      <div className="marquee__items">
        <p className="marquee__item">Design Systems</p>
        <p className="marquee__item">Tech Lead</p>
        <p className="marquee__item">Javascript</p>
        <p className="marquee__item">CSS</p>
        <p className="marquee__item">HTML</p>
        <p className="marquee__item">Tooling</p>
      </div>
      <nav className="marquee__nav">
        <a href="#projects" className="marquee__link">
          <img className="marquee__link-icon" src="/icons/hand-point-down-solid.svg" alt="pointing down" />
          <span>Portfolio</span>
        </a>
        <a href="#interests" className="marquee__link">
          <img className="marquee__link-icon" src="/icons/hand-point-down-solid.svg" alt="pointing down" />
          <span>Interests</span>
        </a>
        <a href="#skills" className="marquee__link">
          <img className="marquee__link-icon" src="/icons/hand-point-down-solid.svg" alt="pointing down" />
          <span>Skills</span>
        </a>
        <a href="#talks" className="marquee__link">
          <img className="marquee__link-icon" src="/icons/hand-point-down-solid.svg" alt="pointing down" />
          <span>Talks</span>
        </a>
        {/*<a href="#about" className="marquee__link">*/}
        {/*  <img className="marquee__link-icon" src="/icons/hand-point-down-solid.svg" alt="pointing down" />*/}
        {/*<span>About Me</span>*/}
        {/*</a>*/}
        <a href="#contact" className="marquee__link">
          <img className="marquee__link-icon" src="/icons/hand-point-down-solid.svg" alt="pointing down" />
          <span>Contact</span>
        </a>
      </nav>
      <div className="marquee__social">
        <a href="https://github.com/joekarasek"><img className="marquee__social-icon" src="/icons/github.svg" alt="Github" /></a>
        <a href="https://www.linkedin.com/in/joe-karasek/"><img className="marquee__social-icon" src="/icons/linkedin.svg" alt="LinkedIn" /></a>
        <a href="https://twitter.com/karasek_joe"><img className="marquee__social-icon" src="/icons/twitter.svg" alt="Twitter" /></a>
        <a href="mailto:jozin.joe@gmail.com"><img className="marquee__social-icon" src="/icons/email.svg" alt="Email" /></a>
      </div>
    </div>
  </header>
);
