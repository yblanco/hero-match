import React, { useContext, useEffect, lazy, Fragment } from 'react';
import { Store } from '../reducers';
import { getHeros, selectPlayer, fight, search, add } from '../actions/heros.action';

const HeroList = lazy(() => import('../components/Lists/HeroList'));
const Searcher = lazy(() => import('../components/Searchs/Searcher'));


export default function HomePage() {
  const { state, dispatch } = useContext(Store);


  const loadHeros = () => {
    getHeros(dispatch)
  }

  const setHeros = (id) => {
    selectPlayer(dispatch, id)
  }

  const faceHeros = () => {
    fight(dispatch, state);
  }

  const changeSearch = (value) => {
    search(dispatch, value);
  }

  const selectSearch = (id) => {
    add(dispatch, id)
  }

  useEffect(() => {
    state.heros.list.length === 0 && loadHeros();
  });

  return (
    <Fragment>
      <Searcher
        suggest
        suggested={state.heros.search}
        onChange={changeSearch}
        onSelect={selectSearch}
      />
      <HeroList
        heros={state.heros.list}
        player1={state.heros.player1}
        player2={state.heros.player2}
        selectPlayer={setHeros}
        fight={faceHeros}
        last={state.fight.last}
      />
    </Fragment>
  );
}
