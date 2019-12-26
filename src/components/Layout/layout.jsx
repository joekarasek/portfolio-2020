import React from 'react';
import { Footer } from '../footer/footer.jsx';
import { Header } from '../header/header.jsx';
import '../../../node_modules/normalize.css/normalize.css';
import './fonts.css';

export const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);
