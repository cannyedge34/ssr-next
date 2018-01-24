import React from 'react';
import Link from 'next/link';

const errorPage = () => (
  <div>
    <h1>Hahaha, something went wrong</h1>
    <p>
      <Link href="/">
        <a>Try going back!</a>
      </Link>
    </p>
  </div>
);

export default errorPage;
