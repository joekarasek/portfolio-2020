import React from 'react';
import Helmet from 'react-helmet';
import Thumbnail from './thumbnail.png';
import {
  url,
  defaultDescription,
  defaultTitle,
} from '../../config';

export const SiteMeta = ({ title = defaultTitle, description = defaultDescription, location = '' }) => {
  return (
    <Helmet>
      <meta name="description" content={description} />
      <meta name="application-name" content={title} />
      <meta name="image" content={Thumbnail} />
      <meta property="og:url" content={`${url}${location}`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={Thumbnail} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={'@karasek_joe'} />
      <meta name="twitter:site" content={"https://twitter.com/karasek_joe"} />
      <meta name="twitter:title" content={"Software Engineer"} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image:src" content={Thumbnail} />
      <title>{title}</title>
      <html lang="en" dir="ltr" />
    </Helmet>
  );
};
