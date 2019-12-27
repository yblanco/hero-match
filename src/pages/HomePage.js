import React, { useContext, useEffect, lazy, Fragment } from 'react';
import { Store } from '../reducers';
import { getHeros } from '../actions/heros.action';

const HeroList = lazy(() => import('../components/Lists/HeroList'));

export default function HomePage() {
  const { state, dispatch } = useContext(Store);


  const loadHeros = () => {
    getHeros(dispatch)
  }

  useEffect(() => {
    state.heros.list.length === 0 && loadHeros();
  });

  return (
    <Fragment>
      <div>
        AGREGAR 
      </div>
      <HeroList heros={state.heros.list} />
    </Fragment>
  );
}
