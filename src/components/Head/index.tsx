import React from 'react';
import { Helmet } from 'react-helmet';
import apple from './apple-touch-icon.png';
import favicon32 from './favicon-32x32.png';
import favicon16 from './favicon-16x16.png';
import manifest from './site.webmanifest';

const Head = () => (
  <Helmet title="matthew guo">
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="HandheldFriendly" content="true" />
    <link rel="apple-touch-icon" sizes="180x180" href={apple} />
    <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
    <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
    <script
      src="https://kit.fontawesome.com/a13d223deb.js"
      crossOrigin="anonymous"
    />
  </Helmet>
);

export default Head;
