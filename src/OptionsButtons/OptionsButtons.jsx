import React from 'react';
import './OptionsButtons.css';

function OptionsButtons({searchValue, setSearchValue, completedTask, totalTask, doingTask}){
    return(

        <div id="optionsButtons">
            <button>Task
                <p id='complete'>
                    {totalTask}
                </p>
            </button>
            <button>Doing
                <p id='complete'>
                    {doingTask}
                </p>
            </button>
            <button>Finished 
                <p id='complete'>
                    {completedTask}
                </p>
            </button>
            <input  
                placeholder='Search'
                value={searchValue}                
                id='input'
                onChange={(event) => {
                    setSearchValue(event.target.value)
                }}
            />
        </div>
    )
}

export {OptionsButtons}