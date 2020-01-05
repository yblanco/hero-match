import React from 'react'
import { Box, Heading, Text } from 'grommet';

import Links from './Links';


export default ({ heros = 0, fights = 0}) => [
  (
    <Box
      key="navbar"
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
      <Links heros={heros} fights={fights} />
    </Box>
  ),
  (
    <Box
      key="subtitle"
      background='brand'
      pad={{ left: "medium", bottom: "small"}}
    >
      <Text size="small" alignSelf="start">
        Face your favorite heroes
      </Text>
    </Box>
  )
];
