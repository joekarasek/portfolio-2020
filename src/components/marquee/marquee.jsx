import React from 'react';
import './marquee.scss';

export const Marquee = () => (
  <header className="marquee section">
    <div className="marquee__wrapper">
      <h1 className="marquee__title">Joe Karasek</h1>
      <h2 className="marquee__subtitle">Web Developer</h2>
      <div className="marquee__items">
        <p className="marquee__item">Design Systems</p>
        <p className="marquee__item">Tech Lead</p>
        <p className="marquee__item">Javascript</p>
        <p className="marquee__item">HTML / CSS</p>
        <p className="marquee__item">Tooling</p>
      </div>
      <nav className="marquee__nav">
        <a href="#projects" className="marquee__link">
          <img className="marquee__link-icon" src="/icons/hand-point-down-solid.svg" alt="pointing down" />
          <span>Projects</span>
        </a>
        <a href="#references" className="marquee__link">
          <img className="marquee__link-icon" src="/icons/hand-point-down-solid.svg" alt="pointing down" />
          <span>References</span>
        </a>
        {/*<a href="#interests" className="marquee__link">*/}
        {/*  <img className="marquee__link-icon" src="/icons/hand-point-down-solid.svg" alt="pointing down" />*/}
        {/*  <span>Interests</span>*/}
        {/*</a>*/}
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
        <a className="marquee__social-icon" href="https://github.com/joekarasek"><img src="/icons/github.svg" alt="Github" /></a>
        <a className="marquee__social-icon" href="https://www.linkedin.com/in/joe-karasek/"><img src="/icons/linkedin.svg" alt="LinkedIn" /></a>
        <a className="marquee__social-icon" href="https://twitter.com/karasek_joe"><img src="/icons/twitter.svg" alt="Twitter" /></a>
        <a className="marquee__social-icon" href="mailto:jozin.joe@gmail.com"><img src="/icons/email.svg" alt="Email" /></a>
      </div>
    </div>
  </header>
);
