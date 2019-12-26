import React from 'react';
import { Footer } from '../footer/footer.jsx';
import { Header } from '../header/header.jsx';
import '../../../node_modules/normalize.css/normalize.css';
import '../../styles/fonts.scss';

export const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);
