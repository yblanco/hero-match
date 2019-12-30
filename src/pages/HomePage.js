import React, { useContext, useEffect, lazy, Fragment } from 'react';
import { Store } from '../reducers';
import { getHeros, selectPlayer } from '../actions/heros.action';

const HeroList = lazy(() => import('../components/Lists/HeroList'));

export default function HomePage() {
  const { state, dispatch } = useContext(Store);


  const loadHeros = () => {
    getHeros(dispatch)
  }

  const setHeros = (id) => {
    selectPlayer(dispatch, id)
  }

  useEffect(() => {
    state.heros.list.length === 0 && loadHeros();
  });

  return (
    <Fragment>
      <div>
        AGREGAR
      </div>
      <HeroList
        heros={state.heros.list}
        player1={state.heros.player1}
        player2={state.heros.player2}
        selectPlayer={setHeros}
      />
    </Fragment>
  );
}
