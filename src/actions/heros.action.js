import { herosAction } from '../constants/action.constant';
import heros from '../constants/heros.constant';
import dispatchAction from './action';
import heroRest from '../apis/heros.api'

import { fightExecu } from './fight.action';

export const getHeros = (dispatch) => {
  Promise.all(heros.map(id => heroRest.byId(id)))
    .then(herosInfo => {
      dispatch(dispatchAction(herosAction.fetch, herosInfo))
    });
}

export const selectPlayer = (dispatch, id) => {
  return dispatch(dispatchAction(herosAction.set_player, id))
}

export const fight = (dispatch, state) => {
  const { player1, player2, list } = state.heros;
  const player1Get = list.find(item => item.id === player1);
  const player2Get = list.find(item => item.id === player2);
  fightExecu(dispatch, player1Get, player2Get);
  dispatch(dispatchAction(herosAction.clear_player));
}
