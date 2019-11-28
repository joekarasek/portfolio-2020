import React from 'react';
import { Footer } from '../footer/footer.jsx';
import { Header } from '../header/header.jsx';
import { Global } from './styles';
import './fonts.css';

export const Layout = ({ children }) => (
  <>
    <Global />
    <Header />
    {children}
    <Footer />
  </>
);
