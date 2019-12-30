import React, { Fragment, Suspense, useContext } from 'react';

import Routes from './routes'

export default function App() {
  return (
    <Fragment>
      <header className='header'>
        <div>
          <h1>Heros</h1>
          <p>Face your favorite heroes</p>
        </div>
      </header>
      <Suspense fallback={<div style={{ textAlign: "center" }}>Loading...</div>}>
        <Routes />
      </Suspense>
    </Fragment>
  );
}
