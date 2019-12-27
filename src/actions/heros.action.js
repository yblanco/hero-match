import { herosAction } from '../constants/action.constant';
import heros from '../constants/heros.constant';
import dispatchAction from './action';
import heroRest from '../apis/heros.api'

export const getHeros = (dispatch) => {
  Promise.all(heros.map(id => heroRest.byId(id)))
    .then(herosInfo => {
      dispatch(dispatchAction(herosAction.fetch, herosInfo ))
    });
}
