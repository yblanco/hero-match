import React, { Fragment, Suspense, useContext } from 'react';

import { Store } from './reducers';
import Routes from './routes'

export default function App() {
  const  { state } = useContext(Store);
  return (
    <Fragment>
      <header className='header'>
        <div>
          <h1>Heros</h1>
          <p>Face your favorite heroes</p>
        </div>
        <div>
          Pending Fights {state.heros.list.length}
        </div>
      </header>
      <Suspense fallback={<div style={{ textAlign: "center" }}>Loading...</div>}>
        <Routes />
      </Suspense>
    </Fragment>
  );
}
