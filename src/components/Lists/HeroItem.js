import React from 'react'
import {
  Box,
  Image,
  Text,
} from 'grommet';


import './List.css';
import './ListHero.css';


export default ({ hero, player1=0, player2=0, selectPlayer=()=>{} }) => {
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
    >
      <Image
        fit="contain"
        fill
        src={hero.image.url}
      />
      <Text size="large" truncate weight="bold" textAlign="center">
        {hero.name}
      </Text>
      <Box>
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
      </Box>
    </Box>
  )
};
