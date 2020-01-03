import React from 'react'
import { Box, Button } from 'grommet';
import { Group, Achievement } from 'grommet-icons';

import { Link } from 'react-router-dom';


export default ({ heros = 0, fights = 0}) => (
  <Box
    direction='row'
  >
    <Link to='/'>
      <Button
        as="span"
        icon={<Group />}
        label={`${heros}`}
        title="Heros"
      />
    </Link>
    <Link to='/fight'>
      <Button
        as="span"
        icon={<Achievement />}
        label={`${fights}`}
        title="Fights"
      />
    </Link>
  </Box>
);
