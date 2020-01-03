import React from 'react'
import { Box, Grid, Table, TableHeader, TableRow, TableCell,TableBody } from 'grommet';


import './List.css';
import './ListHero.css';


export default ({ hero, player1=0, player2=0, selectPlayer=()=>{} }) => (
    <Box border="brand" onClick={() => {selectPlayer(hero.id)}}>
      {hero.name}
    </Box>
);

/*

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

*/
