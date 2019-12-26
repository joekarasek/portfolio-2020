import React from 'react';
import './header.scss';

export const Header = () => (
  <header className="header">
    <div className="header__wrapper">
      <h1 className="header__title">Joe Karasek</h1>
      <h2 className="header__subtitle">Web Developer</h2>
      <p className="header__item">Design System Engineer</p>
      <p className="header__item">Tech Lead</p>
      <p className="header__item">Javascript</p>
      <p className="header__item">CSS</p>
      <p className="header__item">HTML</p>
      <p className="header__item">Tooling</p>
      <nav className="header__nav">
        <a href="#projects" className="header__link">Projects</a>
        <a href="#interests" className="header__link">Interests</a>
        <a href="#skills" className="header__link">Skills</a>
        <a href="#talks" className="header__link">Talks</a>
        <a href="#about" className="header__link">About Mee</a>
        <a href="#contact" className="header__link">Contact</a>
      </nav>
    </div>
  </header>
);
