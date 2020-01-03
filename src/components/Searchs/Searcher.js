import React, { useState } from 'react'

import SearchItem from './SearchItem';

import './searcher.css';

export default ({  suggest = false, suggested = [], onChange = ()=>{}, onSelect=()=>{} }) => {
  const [value, setValue] = useState("");
  const onChangeValue = (e) => {
    const { value: newValue } = e.target;
    setValue(newValue);
    onChange(newValue);
  }

  const onClickItem = (id) => {
    setValue("")
    onSelect(id);
  }
  return (
    <div>
      <div className="searcher-content">
        <div className="searcher-title">
          Add Character:
        </div>
        <input onChange={onChangeValue} value={value} />
      </div>
      { suggest && value.length > 0 && (<SearchItem items={suggested} onClick={onClickItem} />) }
    </div>
  )
};
