import React from 'react'

import './List.css';
import './ListHero.css';


export default ({ heros }) => (
  <div className='list-layout'>
    {
      heros.map(hero => {
        console.log(hero)
        return (
          <section key={hero.id}>
            <figure>
              <img src='http://www.animalistic.com.co/animalistic/publico/sin-perfil/img-no-disponible.jpg' alt={hero.name} />
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
              <div className='description'>
                {
                  Object.keys(hero.powerstats).map(item => (
                    <div key={item} className={item}>
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
);
