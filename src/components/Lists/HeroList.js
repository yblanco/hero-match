import React from 'react'

import './List.css';
import './ListHero.css';


export default ({ heros, player1, player2, selectPlayer, fight, last }) => (
  <div style={{ borderTop: "1px solid grey"}}>
    <div style={{ textAlign: "right"}}>
      Total heros: {heros.length}
    </div>
    <div className={`listInfo ${player1 !== 0 && player2 !== 0 ? 'ready' : 'not-ready'}`}>
      {
        player1 !== 0 && player2 !== 0
        ? `${heros.find(i => i.id === player1).name} vs ${heros.find(i => i.id === player2).name}`
        : `Select players`
      }
    </div>
    <div style={{ textAlign: "right"}}>
      {
        last !== null
          && (
            <div style={{ textAlign: "center"}}>
              <u>Last Fight</u>
              <br/>
              <i>{last.first.name} vs {last.second.name}</i>
              <br/>
              {
                last.winner !== 0
                  && <strong>{ last.winner === 1 ? last.first.name : last.second.name }</strong>
              }
              { last.winner === 0 && "Tie"}
            </div>
          )
      }
      <button
        style={{ padding: "1em", width: "25%", margin:"1em"}}
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
            <section
              key={hero.id}
              onClick={() => {selectPlayer(hero.id)}}
              className={`first-${hero.id===player1} second-${hero.id===player2}`}
            >
              <figure>
                <img src={hero.image.url} alt={hero.name} />
              </figure>
              <div className='info'>
                <div className='name'>{hero.name}</div>
                <div className='description primary'>
                  <div title={hero.appearance.race === 'null' ? 'unknown' : hero.appearance.race}>
                    {hero.appearance.race === 'null' ? 'unknown' : hero.appearance.race}
                  </div>
                  <div title={hero.appearance.gender}>
                    {hero.appearance.gender}
                  </div>
                  <div title={hero.biography.alignment} className={hero.biography.alignment}>
                    {hero.biography.alignment}
                  </div>
                </div>
                <div className='description'>
                  <div>
                    {hero.appearance.height.slice().pop()}
                  </div>
                  <div>
                    {hero.appearance.weight.slice().pop()}
                  </div>
                </div>
                <div className='description power'>
                  {
                    Object.keys(hero.powerstats).map(item => (
                      <div key={item} className={item} title={item}>
                        {hero.powerstats[item]}
                      </div>
                    ))
                  }
                </div>
              </div>

            </section>

          );
      })
      }
    </div>
  </div>
);
