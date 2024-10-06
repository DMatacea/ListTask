import { useState } from 'react'
import './SetUpTask.css'

function SetUpTask(props){
    const [inputFocus, setInputFocus] = useState(false)

    return(
        <>
            <div className='setUpTask'>
                <p>
                    Set up task
                </p>
                <input
                onFocus = {() => setInputFocus(true)}
                onBlur = {() => setInputFocus(false)}
                type='text'
                value={props.inputValue}
                onChange={(e) => props.setInputValue(e.target.value)}
                placeholder="Write a new task"
                className= {`inputCreation${inputFocus ? 'Color' : ''}`}
                />
                <section id='CreateAndDelete'>
                    <button 
                        className='CreateButton' 
                        onClick={props.onCreate}
                    >
                        Create
                    </button>
                    {/* <button 
                        onClick={props.onClear}
                    >
                        Delete
                    </button> */}
                </section>
            </div>
        </>
    )
}

export {SetUpTask}