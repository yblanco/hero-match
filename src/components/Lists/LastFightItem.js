import React from 'react'
import {
  Box,
  Text,
  Image,
} from 'grommet';
import { CaretDown, CaretUp } from 'grommet-icons';


export default ({ hero, winner, reverse = false }) => {
  let win = "grey";
  let lose = "grey"
  if(hero === null) {
    return ""
  }
  if(winner === true){
    win = "green";
    lose = "none"
  } else if (winner === false) {
    win = "none";
    lose = "red"
  }
  return (
    <Box
      direction={reverse === true ? "row-reverse" : "row"}
      gap="small"
    >
      <Box height="xxsmall" width="xxsmall" alignSelf="center" align="center" >
        <CaretUp color={win} />
        <CaretDown color={lose} />
      </Box>
      <Box height="xxsmall" width="xxsmall">
        <Image
          fit="cover"
          fill
          src={hero.image.url}
        />
      </Box>
      <Box alignSelf="center" align="center" >
        <Text
          textAlign="center"
          weight="bold"
        >
          {hero.name}
        </Text>
      </Box>

    </Box>
  )
}
