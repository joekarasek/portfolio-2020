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
    </div>
  </header>
);
