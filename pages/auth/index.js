import React from 'react';
import User from '../../components/User';

const authIndexPage = props => (
  <div>
    <h1>Auth Index page {props.appName}</h1>
    <User name="John" age={31} />
  </div>
);

authIndexPage.getInitialProps = context => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ appName: 'Nice App' });
    }, 1000);
  });
  return promise;
};

export default authIndexPage;
