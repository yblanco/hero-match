import { herosAction } from '../constants/action.constant';
import { heros } from '../constants/states.constant';

export default (state = heros, action = {}) => {
  switch (action.type) {
    case herosAction.fetch:
      return { ...state, list: action.data };
    default:
      return state;
  }
}
