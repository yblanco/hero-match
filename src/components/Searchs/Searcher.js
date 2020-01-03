import React, { useState } from 'react'

import { Box, TextInput } from 'grommet';
import { UserAdd } from 'grommet-icons';

import SearchItem from './SearchItem';


export default ({  suggest = false, suggested = [], onChange = ()=>{}, onSelect=()=>{} }) => {
  const [value, setValue] = useState("");
  const onChangeValue = (e) => {
    const { value: newValue } = e.target;
    setValue(newValue);
    onChange(newValue);
  }

  const onClickItem = (id) => {
    setValue("")
    onSelect(id.suggestion.value);
  }
  const renderSuggestion = () => (suggested.map((item, index) => ({
    label: <SearchItem item={item} bottom={index < suggested.length - 1 ? "bottom" : undefined} />,
    value: item.id
  })));

  return (
      <Box
        background="light-5"
        direction="row"
        fill="horizontal"
        pad={{ horizontal: "small", vertical: "medium" }}
        align="center"
        height="xxsmall"
      >
        <UserAdd/>
        <TextInput
          type="search"
          plain
          value={value}
          onChange={onChangeValue}
          onSelect={onClickItem}
          placeholder="Search for new character..."
          suggestions={renderSuggestion()}
        />
      </Box>
  );
};
