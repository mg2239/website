import { Helmet } from 'react-helmet';
import apple from './apple-touch-icon.png';
import favicon32 from './favicon-32x32.png';
import favicon16 from './favicon-16x16.png';

export default () => (
  <Helmet title="matthew guo">
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="HandheldFriendly" content="true" />
    <link rel="apple-touch-icon" sizes="180x180" href={apple} />
    <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
    <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <script
      src="https://kit.fontawesome.com/a13d223deb.js"
      crossOrigin="anonymous"
    />
  </Helmet>
);
