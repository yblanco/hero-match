import { herosAction } from '../constants/action.constant';
import { heros } from '../constants/states.constant';

export default (state = heros, action = {}) => {
  let player1 = 0;
  let player2 = 0;
  let player;
  let list = [];
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
    case herosAction.clear_player:
      return { ...state, player1, player2 }
    case herosAction.search_hero:
      return { ...state, search: action.data}
    case herosAction.clear_search:
      return { ...state, search: []}
    case herosAction.add:
      ({ list } = state);
      player = action.data;
      if(list.find(item => item.id === player.id) === undefined) {
        list.push(player);
      }
      return { ...state, list }
    default:
      return state;
  }
}
