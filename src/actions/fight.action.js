import { fightAction } from '../constants/action.constant';
import dispatchAction from './action';

export const fightExecu = (dispatch, first, second) => {
  let player1 = 0;
  let player2 = 0;
  let last = {
    first, second, winner: 0
  };
  Object.keys(first.powerstats).forEach(item => {
    if(first.powerstats[item] > second.powerstats[item]){
      player1+=2;
    } else if(first.powerstats[item] < second.powerstats[item]) {
      player2+=2;
    } else {
      player1+=1;
      player2+=1;
    }
  });
  if(player1 > player2) {
    last.winner = 1
  } else if (player1 < player2) {
    last.winner = 2;
  } else {
    last.winner = 0;
  }
  dispatch(dispatchAction(fightAction.match, last));

}
