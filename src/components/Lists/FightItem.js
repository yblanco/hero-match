import React, { useContext } from 'react'
import { Box, Grid, Text, ResponsiveContext } from 'grommet';

import HeroItem from './HeroItem';

export default ({ fight }) => {
  const size = useContext(ResponsiveContext);
  const vs = size === "small" ? 'xxsmall' : 'xsmall';
  let first = "tie";
  let second = "tie";
  if(fight.winner === 1) {
    first = "win";
    second = "lose";
  } else if(fight.winner === 2) {
    first = "lose";
    second = "win";
  }
  return (
    <Grid
      key={`${fight.first.id}_${fight.second.id}`}
      columns={['auto', vs, 'auto']}
      gap="small"
      fill
      margin={{ vertical: "small"}}
    >
      <Box background={first}>
        <HeroItem hero={fight.first} />
      </Box>
      <Box alignSelf="center" align="center" >
        <Text>
          VS
        </Text>
      </Box>
      <Box background={second}>
        <HeroItem hero={fight.second} />
      </Box>
      </Grid>
  )
};
/*

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

*/
