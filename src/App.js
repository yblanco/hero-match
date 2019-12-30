import React, { Fragment, Suspense,useContext } from 'react';
import { Link } from 'react-router-dom';

import { Store } from './reducers';
import Routes from './routes'

export default function App() {
  const { state } = useContext(Store);
  return (
    <Fragment>
      <header className='header'>
        <div>
          <h1>Heros Match</h1>
          <p>Face your favorite heroes</p>
        </div>
        <div>
        <Link to='/'>
          Heros ({state.heros.list.length})
        </Link>
        {' | '}
        <Link to='/fight'>
          Fights ({state.fight.list.length})
        </Link>
        </div>
      </header>
      <Suspense fallback={<div style={{ textAlign: "center" }}>Loading...</div>}>
        <Routes />
      </Suspense>
    </Fragment>
  );
}
