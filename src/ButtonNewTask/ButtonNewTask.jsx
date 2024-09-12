import './ButtonNewTask.css'

function CreateAndDeleteButton(){
    return(
        <section id='CreateAndDelete'>
            <button
            className='CreateButton' onClick={() => console.log('Create button')}
            >Create</button> 
            <button>Delete</button>
        </section>


    )
}

export {CreateAndDeleteButton}