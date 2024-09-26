import './SetUpTask.css'

function SetUpTask(props){
    return(
        <>
            <div className='setUpTask'>
                <p>
                    Set up task
                </p>
                <input
                type='text'
                value={props.inputValue}
                onChange={(e) => props.setInputValue(e.target.value)}
                placeholder="Write a new task"
                id='input'
                />
                <section id='CreateAndDelete'>
                <button 
                    className='CreateButton' 
                    onClick={props.onCreate}
                >
                    Create
                </button>
                <button 
                    onClick={props.onClear}
                >
                    Delete
                </button>
                </section>
            </div>
        </>
    )
}

export {SetUpTask}