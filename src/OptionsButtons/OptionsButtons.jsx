import { ImSearch } from "react-icons/im";
import React from 'react';
import './OptionsButtons.css';
import { ActivationInputSearch } from '../ActivationInputSearchActivation/ActivationInputSearch'

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
            <section id="inputSearchPC">
                <ActivationInputSearch 
                    searchValue = {props.searchValue}
                    setSearchValue = {props.setSearchValue}
                />    
            </section>
            <ImSearch id='iconSearch' onClick={props.inputActivation}/>
            
        </div>
    )
}

export {OptionsButtons}