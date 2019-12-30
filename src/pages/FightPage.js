import React, { useContext, lazy, Fragment } from 'react';
import { Store } from '../reducers';

const FightList = lazy(() => import('../components/Lists/FightList'));


export default function FightPage() {
  const { state } = useContext(Store);
  return (
    <Fragment>
      <FightList fights={state.fight.list} />
    </Fragment>
  );
}
