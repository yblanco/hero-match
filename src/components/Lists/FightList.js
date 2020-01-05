import React from 'react'
import { Box } from 'grommet';
import FightItem from './FightItem';

export default ({ fights }) => (
  <Box pad="small">
    {
      fights.map(fight => (
        <FightItem
          key={`${fight.first.id}_${fight.second.id}`}
          fight={fight}
        />
      ))
    }
  </Box>
);
