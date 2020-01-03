import React from 'react'
import { Box, Heading, Text } from 'grommet';

import Links from './Links';


export default ({ heros = 0, fights = 0}) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    fixed
  >
    <Heading level='3' margin='none'>
      Heros Match
    </Heading>
    <Text size="small">
      Face your favorite heroes
    </Text>
    <Links heros={heros} fights={fights} />
  </Box>
);
