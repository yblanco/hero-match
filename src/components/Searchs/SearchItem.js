import React from 'react'

import './searcher.css';

export default ({ items= [], onClick=()=>{} }) => (
  <div className="searcher-suggest">
    {
      items.length > 0
      ? items.map(item =>(
        <div className="searcher-suggest-item" onClick={() => onClick(item.id)} key={item.id}>
          {item.name}
        </div>
      ))
      : "Character with given name not found"
    }
  </div>
);
