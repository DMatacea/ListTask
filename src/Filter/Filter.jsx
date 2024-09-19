import React from 'react';
import './Filter.css';

function Filter({inputValue, setInputValue}) {

  return (
    <>
      <input
        type='text'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Write a new task"
        id='input'
      />
    </>
  );
}

export { Filter };