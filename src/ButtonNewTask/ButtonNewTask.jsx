import React from 'react';
import './ButtonNewTask.css';

function CreateAndDeleteButton({onClear, onCreate}) {
  return (
    <section id='CreateAndDelete'>
      <button 
      className='CreateButton' 
      onClick={onCreate}
      >
        Create
      </button>
      <button 
        onClick={onClear}
      >
        Delete
      </button>
    </section>
  );
}

export { CreateAndDeleteButton };