import React, { Suspense, lazy, useContext } from 'react';

import { Grommet, Box } from 'grommet';

import { Store } from './reducers';

import Header from './components/Commons/Header';
import Spinning from './components/Commons/Spinning';

import theme from './constants/theme.constant'

const Routes = lazy(() => import('./routes'));


export default function App() {
  const { state } = useContext(Store);
  return (
    <Grommet theme={theme} full>
      <Header heros={state.heros.list.length} fights={state.fight.list.length}  />
      <Box fill>
        <Box>
          <Suspense fallback={<Spinning />}>
            <Routes />
          </Suspense>
        </Box>
      </Box>
    </Grommet>
  );
}
