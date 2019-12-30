import { fightAction } from '../constants/action.constant';
import { fight } from '../constants/states.constant';

export default (state = fight, action = {}) => {
  let list = [];
  let last = null;
  switch (action.type) {
    case fightAction.match:
      ({ list } = state);
      last = action.data;
      list.push(last);
      return { ...state, list,last };
    default:
      return state;
  }
}
