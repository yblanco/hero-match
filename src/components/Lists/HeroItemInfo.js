import React from 'react'
import {
  Box,
  Text,
} from 'grommet';
import { User, UserFemale, Favorite, Aed } from 'grommet-icons';


export default ({ hero  }) => {
  return (
    <Box pad="small">
      <Text size="large" textAlign="center" weight="bold" truncate>
        {
          hero.biography.alignment.toUpperCase() === "GOOD"
          ? <Favorite />
          : <Aed />
        }
        {' '}
        {hero.name}
        {' '}
        {
          hero.appearance.gender.toUpperCase() === "MALE"
          ? <User />
          : <UserFemale />
        }
      </Text>
      {
        Object.keys(hero.powerstats).map(item => (
          <Text size="small" key={item}>
            {item}: {hero.powerstats[item]}
          </Text>
        ))
      }
    </Box>
  )
};
