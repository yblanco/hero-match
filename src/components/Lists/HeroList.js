import React from 'react'

import HeroItem from './HeroItem';

import './List.css';
import './ListHero.css';


export default ({ heros, player1, player2, selectPlayer, fight, last }) => (
  <div style={{ borderTop: "1px solid grey"}}>
    <div className={`listInfo ${player1 !== 0 && player2 !== 0 ? 'ready' : 'not-ready'}`}>
      {
        player1 !== 0 && player2 !== 0
        ? `${heros.find(i => i.id === player1).name} vs ${heros.find(i => i.id === player2).name}`
        : `Select players`
      }
    </div>
    <div style={{ textAlign: "right"}}>
      <div style={{ textAlign: "left",padding: "0 1em" }}>
        <u>Last Fight</u>{': '}
        {
          last !== null
          && (
            <span>
            <i>{last.first.name}</i> vs <i>{last.second.name}</i>
            {' => '}
              <strong>
                {
                  last.winner !== 0
                    && <u>{ last.winner === 1 ? last.first.name : last.second.name }</u>
                }
                { last.winner === 0 && "Tie"}
              </strong>
            </span>
          )
        }
      </div>
      <button
        style={{ padding: "2em", width: "25%" }}
        disabled={player1===0 || player2===0}
        onClick={() => { player1 > 0 && player2 > 0 && fight() }}
      >
        Fight
      </button>
    </div>
    <div className='list-layout'>
      {
        heros.map(hero => {
          return (
            <HeroItem
              key={hero.id}
              hero={hero}
              player1={player1}
              player2={player2}
              selectPlayer={selectPlayer}
            />
          );
      })
      }
    </div>
  </div>
);
