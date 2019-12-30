import React from 'react'

import HeroItem from './HeroItem';

import './List.css';
import './ListHero.css';
import './ListFight.css';


export default ({ fights }) => (
  <div>
    {
      fights.map(fight => {
        console.log(fight, fight.winner, fight.winner !== 0)
        return (
          <div
            className='fight list-layout'
            key={`${fight.first.id}_${fight.second.id}`}
            style={{ borderBottom: "1px solid rgba(0,0,0,0.5)"}}
          >
            <HeroItem hero={fight.first} />
            <div className="uniontext vs">
              vs
            </div>
            <HeroItem hero={fight.second} />
            <div className="uniontext resutl">
              =>
            </div>
            {
              fight.winner !== 0
              &&
              (  fight.winner === 1
                ? <HeroItem hero={fight.first} />
                : <HeroItem hero={fight.second} />)

            }
            {
              fight.winner === 0
              && (
                <div className="uniontext">Tie</div>
              )
            }
          </div>
        );
      })
    }
  </div>
);
