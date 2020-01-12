import React, { useContext } from 'react'
import { Box, Grid, Button, ResponsiveContext } from 'grommet';

import HeroItem from './HeroItem';
import LastFight from './LastFight';


export default ({ heros, player1, player2, selectPlayer, fight, last }) => {
  const size = useContext(ResponsiveContext);
  const p1 = heros.find(i => i.id === player1);
  const p2 = heros.find(i => i.id === player2);
  let goFight = () => {};
  let label = "Select players"
  let disabled = true;
  if(p1 !== undefined && p2 !== undefined) {
    label = `${p1.name} vs ${p2.name}`;
    goFight = fight;
    disabled = false;
  }
  return (
    <Box margin="small">
      <Button
        primary
        onClick={goFight}
        label={label}
        disabled={disabled}
        focusIndicator={false}
      >
      </Button>
      <LastFight last={last} />
      <Grid
        margin="small"
        columns={{
          count: size === "small" ? 2 : 5,
          size: "auto"
        }}
        gap="small"
        rows="small"
      >
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
      </Grid>
    </Box>
  )
};
