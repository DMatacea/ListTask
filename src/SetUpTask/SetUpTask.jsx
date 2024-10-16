import { useState } from 'react'
import { FaDeleteLeft } from "react-icons/fa6";
import './SetUpTask.css'

function SetUpTask(props){
    const [inputFocus, setInputFocus] = useState(false)

    return(
        <>
            <div className='setUpTask'>
                <p>
                    Set up task
                </p>
                <section className = "InputAndIconDeleteSetup">
                    <input
                        onFocus = {() => setInputFocus(true)}
                        onBlur = {() => setInputFocus(false)}
                        type='text'
                        value={props.inputValue}
                        onChange={(e) => 
                            props.setInputValue(e.target.value)
                        }
                        placeholder="Write a new task"
                        className= {`inputCreation${inputFocus ? 'Color' : ''}`}
                    />
                    <FaDeleteLeft 
                        className = "IconDeleteSetup"
                        onClick={props.onClear}
                    />
                </section>
                
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