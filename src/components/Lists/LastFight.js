import React from 'react'
import {
  Grid,
  Box,
  Text,
} from 'grommet';

import LastFightItem from './LastFightItem';


export default ({ last }) => {
  let vs = "";
  let first = null;
  let second = null;
  let winner = null;
  if(last !== null) {
    vs = "VS";
    first = last.first;
    second = last.second;
    winner = last.winner;
  }
  return (
    <Grid
      columns={["small", "auto", "xxsmall" , "auto"]}
      rows="xxsmall"
      gap="small"
      margin={{ vertical:"small" }}
    >
      <Box alignSelf="center" align="center" >
        <Text size="large">Last Fight:</Text>
      </Box>
      <LastFightItem hero={first} winner={winner === 1} reverse={true} />
      <Box alignSelf="center" align="center" >
        {vs}
      </Box>
      <LastFightItem hero={second} winner={winner === 2} />
    </Grid>
  )
}
