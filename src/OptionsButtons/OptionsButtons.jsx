import { ImSearch } from "react-icons/im";
import React from 'react';
import './OptionsButtons.css';
import { ActivationInputSearch } from '../ActivationInputSearchActivation/ActivationInputSearch'

function OptionsButtons(props){
    return(
        <div className="optionsButtons">
            <section className="sectionOptionsButtons">
                <button 
                    className="buttonAll"
                    onClick={props.allTask}
                >
                    All
                    <p className='complete'>
                        {props.totalTask}
                    </p>
                </button>
                <button 
                    className="buttonDoing"
                    onClick={props.filterDoingTasks}
                >
                    Doing
                    <p className='complete'>
                        {props.doingTask}
                    </p>
                </button>
                <button 
                    className="buttonEnding"
                    onClick={props.filterCompletedTasks}
                >
                    Ending 
                    <p className='complete'>
                        {props.completedTask}
                    </p>
                </button> 
            </section>
            <section className="inputSearchPC">
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