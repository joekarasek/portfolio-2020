import React from 'react';
import './footer.scss';

const social = [
  {
    id: 0,
    name: 'Telegram',
    link: 'https://t.me/smakosh',
    icon: '/icons/telegram.svg',
  },
  {
    id: 1,
    name: 'Github',
    link: 'https://github.com/smakosh',
    icon: '/icons/github.svg',
  },
  {
    id: 2,
    name: 'StackOverflow',
    link: 'https://stackoverflow.com/users/story/7396786',
    icon: '/icons/stackoverflow.svg',
  },
  {
    id: 3,
    name: 'Twitter',
    link: 'https://twitter.com/smakosh',
    icon: '/icons/twitter.svg',
  },
];

export const Footer = () => (
  <div className="footer">
    <div className="footer__wrapper">
      <div className="footer__text">
        <h2>Joe Karasek</h2>
        <span>© All rights are reserved | {new Date().getFullYear()} | Made with HTML, CSS, and Javascript </span>
      </div>
      <div className="footer__social">
        {social.map(({ id, name, link, icon }) => (
          <a key={id} href={link} target="_blank" rel="noopener noreferrer" aria-label={`follow me on ${name}`}>
            <img width="24" src={icon} alt={name} />
          </a>
        ))}
      </div>
    </div>
  </div>
);
