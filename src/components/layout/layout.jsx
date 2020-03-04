import React from 'react';
import { Header } from '../header/header.jsx';
import '../../../node_modules/normalize.css/normalize.css';
import '../../styles/fonts.scss';

export const Layout = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);
