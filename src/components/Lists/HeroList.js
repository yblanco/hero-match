import React, { useContext } from 'react'
import { Box, Grid, Button, Text, ResponsiveContext } from 'grommet';

import HeroItem from './HeroItem';


export default ({ heros, player1, player2, selectPlayer, fight, last }) => {
  const size = useContext(ResponsiveContext);
  const p1 = heros.find(i => i.id === player1);
  const p2 = heros.find(i => i.id === player2);
  const playerFight = ["first", "second"];
  let goFight = () => {};
  let label = "Select players"
  let disabled = true;
  let lastFight = "";
  let winner = "";
  if(p1 !== undefined && p2 !== undefined) {
    label = `${p1.name} vs ${p2.name}`;
    goFight = fight;
    disabled = false;
  }
  if(last !== null) {
    winner = last[playerFight[last.winner-1]] === undefined
      ? "Tie"
      : last[playerFight[last.winner-1]].name
    lastFight = `${last.first.name} vs ${last.second.name} => ${winner}`;
  }
  return (
    <Box margin="small">
      <Button
        primary
        onClick={goFight}
        label={label}
        disabled={disabled}
      >
      </Button>
      <Box margin="medium">
        <Text textAlign="center">
        Last Fight: { lastFight }
        </Text>
      </Box>
      <Grid
        margin="small"
        columns={{
          count: size === "small" ? 2 : 5,
          size: "auto"
        }}
        gap="small"
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
