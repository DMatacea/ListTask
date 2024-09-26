import { ImSearch } from "react-icons/im";
import React from 'react';
import './OptionsButtons.css';

function OptionsButtons(props){
    return(

        <div id="optionsButtons">
            <button onClick={props.allTask}>
                Task
                <p id='complete'>
                    {props.totalTask}
                </p>
            </button>
            <button onClick={props.filterDoingTasks}>
                Doing
                <p id='complete'>
                    {props.doingTask}
                </p>
            </button>
            <button onClick={props.filterCompletedTasks}>
                Finished 
                <p id='complete'>
                    {props.completedTask}
                </p>
            </button>
            <input  
                placeholder='Search'
                value={props.searchValue}                
                id='input'
                onChange={(event) => {
                    props.setSearchValue(event.target.value)
                }}
            />
            <ImSearch id='iconSearch'/>
            
        </div>
    )
}

export {OptionsButtons}