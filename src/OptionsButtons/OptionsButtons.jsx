import React from 'react';
import './OptionsButtons.css'

function OptionsButtons({searchValue, setSearchValue}){
    return(

        <div id="optionsButtons">
            <button>Task</button>
            <button>Doing</button>
            <button>Finished <p id='complete'>0</p></button>
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