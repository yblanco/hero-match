import React, { useState } from 'react'
import {
  Box,
  Image,
} from 'grommet';

import HeroItemInfo from './HeroItemInfo';


export default ({ hero, player1=0, player2=0, selectPlayer=()=>{} }) => {
  const [details, setDetails] = useState(false);
  let bg = "";
  if(hero.id === player1) {
    bg = "player1";
  } else if(hero.id === player2) {
    bg = "player2";
  }
  return (
    <Box
      border
      onClick={() => {selectPlayer(hero.id)}}
      background={bg}
      fill="vertical"
      onMouseEnter={()=>{setDetails(true) }}
      onMouseLeave={()=>{ setDetails(false) }}
    >
      {
        details
        ? <HeroItemInfo hero={hero} />
        : <Image fit="cover" fill src={hero.image.url} />
      }

    </Box>
  )
};

/*
<Text size="small">
  {hero.appearance.race === 'null' ? 'unknown' : hero.appearance.race}
</Text>
<Text size="small">
  {hero.appearance.gender}
</Text>
<Text size="small">
  {hero.biography.alignment}
</Text>
{
  Object.keys(hero.powerstats).map(item => (
    <Text size="small" key={item}>
      {item}: {hero.powerstats[item]}
    </Text>
  ))
}
*/
