import React, { useContext } from 'react'
import { Box, Grid, Text, ResponsiveContext } from 'grommet';

import LastFightItem from './LastFightItem';

export default ({ fight }) => {
  const size = useContext(ResponsiveContext);
  const vs = size === "small" ? 'xxsmall' : 'xsmall';
  const { first, second, winner } = fight;
  return (
    <Grid
      key={`${fight.first.id}_${fight.second.id}`}
      columns={['auto', vs, 'auto']}
      gap="small"
      fill
      margin={{ vertical: "small"}}
    >
      <Box border={{ color: "grey", side: "bottom"}}>
        <LastFightItem hero={first} winner={winner === 0 ? null : winner === 1} reverse={true} />
      </Box>
      <Box alignSelf="center" align="center" >
        <Text>
          VS
        </Text>
      </Box>
      <Box border={{ color: "grey", side: "bottom"}}>
        <LastFightItem hero={second} winner={winner === 0 ? null : winner === 2} />
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
