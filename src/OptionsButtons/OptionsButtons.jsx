import { ImSearch } from "react-icons/im";
import React, { useState } from 'react';
import './OptionsButtons.css';
import { ActivationInputSearch } from '../ActivationInputSearch/ActivationInputSearch'

function OptionsButtons(props){
    const [changeColor, setChangeColor] = useState(null)

    const buttonChangeColor = (buttonId) => {
        setChangeColor(buttonId)
    }
    
    return(
        <div className="optionsButtons">
            <section className="sectionOptionsButtons">
                <button 
                    className={`buttonAll${changeColor === 1 ? 'Active': ''}`}
                    onClick={() => {props.allTask(); buttonChangeColor(1)}}
                >
                    All
                    <p className='complete'>
                        {props.totalTask}
                    </p>
                </button>
                <button 
                    className={`buttonDoing${changeColor === 2 ? 'Active': ''}`}
                    onClick={() => {props.filterDoingTasks(); buttonChangeColor(2)}}
                >
                    Doing
                    <p className='complete'>
                        {props.doingTask}
                    </p>
                </button>
                <button 
                    className={`buttonEnding${changeColor === 3 ? 'Active': ''}`}
                    onClick={() => {props.filterCompletedTasks(); buttonChangeColor(3)}}
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
                    onClear = {props.onClear}
                />    
            </section>
            <ImSearch id='iconSearch' onClick={props.inputActivation}/>
            
        </div>
    )
}

export {OptionsButtons}