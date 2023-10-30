/* eslint-disable react/no-unescaped-entities */
// pages/404.js
import Link from 'next/link';

function Custom404() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <Link href="/">Return to the homepage</Link>
    </div>
  );
}

export default Custom404;
