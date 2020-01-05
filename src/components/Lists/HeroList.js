import React, { useContext } from 'react'
import { Box, Grid, Button, Text, ResponsiveContext } from 'grommet';

import HeroItem from './HeroItem';

import './List.css';
import './ListHero.css';


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
      >
      </Button>
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


/*
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




*/
