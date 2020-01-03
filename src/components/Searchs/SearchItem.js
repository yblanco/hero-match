import React from 'react'
import { Image, Box, Text } from 'grommet';

export default ({ item, bottom }) => (
  <Box
    direction="row"
    align="center"
    gap="small"
    border={bottom}
    pad="small"
  >
    <Image
      width="30em"
      height="30em"
      src={item.image.url}
      style={{ borderRadius: "100%" }}
    />
    <Text>
      <strong>{item.name}</strong>
    </Text>
  </Box>
);
