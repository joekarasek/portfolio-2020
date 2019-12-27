import React from 'react';
import './header.scss';

export const Header = () => (
  <header className="header">
    <div className="header__wrapper">
      <h1 className="header__title">Joe Karasek</h1>
      <h2 className="header__subtitle">Web Developer</h2>
      <div className="header__items">
        <p className="header__item">Design Systems</p>
        <p className="header__item">Tech Lead</p>
        <p className="header__item">Javascript</p>
        <p className="header__item">CSS</p>
        <p className="header__item">HTML</p>
        <p className="header__item">Tooling</p>
      </div>
      <nav className="header__nav">
        <a href="#projects" className="header__link">
          <img className="header__link-icon" src="/icons/hand-point-down-solid.svg" alt="pointing down" />
          Portfolio
        </a>
        <a href="#interests" className="header__link">
          <img className="header__link-icon" src="/icons/hand-point-down-solid.svg" alt="pointing down" />
          Interests
        </a>
        <a href="#skills" className="header__link">
          <img className="header__link-icon" src="/icons/hand-point-down-solid.svg" alt="pointing down" />
          Skills
        </a>
        <a href="#talks" className="header__link">
          <img className="header__link-icon" src="/icons/hand-point-down-solid.svg" alt="pointing down" />
          Talks
        </a>
        <a href="#about" className="header__link">
          <img className="header__link-icon" src="/icons/hand-point-down-solid.svg" alt="pointing down" />
          About Me
        </a>
        <a href="#contact" className="header__link">
          <img className="header__link-icon" src="/icons/hand-point-down-solid.svg" alt="pointing down" />
          Contact
        </a>
      </nav>
      <div className="header__social">
        <a href="https://github.com/joekarasek"><img className="header__social-icon" src="/icons/github.svg" alt="Github" /></a>
        <a href="https://www.linkedin.com/in/joe-karasek/"><img className="header__social-icon" src="/icons/linkedin.svg" alt="LinkedIn" /></a>
        <a href="https://twitter.com/karasek_joe"><img className="header__social-icon" src="/icons/twitter.svg" alt="Twitter" /></a>
        <a href="mailto:jozin.joe@gmail.com"><img className="header__social-icon" src="/icons/email.svg" alt="Email" /></a>
      </div>
    </div>
  </header>
);
