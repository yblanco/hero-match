import React from 'react'
import { Box, Grid, Button, Text } from 'grommet';

import HeroItem from './HeroItem';

import './List.css';
import './ListHero.css';


export default ({ heros, player1, player2, selectPlayer, fight, last }) => (
  <Box margin="small">
    <Button primary onClick={fight} >
      <Box  pad="small" direction="row" align="center" gap="small" margin>
        <Text >Fight</Text>
      </Box>
    </Button>
    <Grid
      margin="small"
      columns={{
        count: 6,
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
);


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
