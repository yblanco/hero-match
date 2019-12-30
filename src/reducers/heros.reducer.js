import { herosAction } from '../constants/action.constant';
import { heros } from '../constants/states.constant';

export default (state = heros, action = {}) => {
  let player1;
  let player2;
  let player;
  switch (action.type) {
    case herosAction.fetch:
      return { ...state, list: action.data };
    case herosAction.set_player:
      ({ player1, player2 } = state);
      player = action.data;
      if(player1 === player){
        player1 = 0;
      }else if(player2 === player) {
        player2 = 0
      } else if(player1 === 0 && player2 === 0){
        player1 = player;
      } else if(player1 > 0 && player2 === 0) {
        player2 = player;
      } else if(player1 === 0 && player2 > 0) {
        player1 = player;
      }
      return { ...state, player1, player2 }
    default:
      return state;
  }
}
