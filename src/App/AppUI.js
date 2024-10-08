import { NamePage } from '../Counter/Counter';
import { OptionsButtons } from '../OptionsButtons/OptionsButtons';
import { ActivationInputSearch } from '../ActivationInputSearchActivation/ActivationInputSearch'
import { List } from '../List/List';
import { Task } from '../Task/Task';
import { FloatingCreate } from '../FloatingCreate/FloatingCreate'
import { ChatGPT } from '../ChatGPT/ChatGPT';
import { SetUpTask } from '../SetUpTask/SetUpTask';

function AppUI(props) {
    return (
        <>
        <div id='yourListTask'>
            <NamePage /> 
            
            <OptionsButtons 
            completedTask = {props.completedTask}
            totalTask = {props.totalTask}
            doingTask = {props.doingTask}
            allTask = {props.allTask}
            filterDoingTasks = {props.filterDoingTasks}
            filterCompletedTasks = {props.filterCompletedTasks}
            inputActivation = {props.InputSearchMobile}
            isMobile = {props.isMobile}
            searchValue = {props.searchValue}
            setSearchValue = {props.setSearchValue}
            /> 
            {props.isMobile && (
            <section id={`inputActivation${props.isInputVisible? 'Visible':''}`} >
                <ActivationInputSearch
                searchValue = {props.searchValue}
                setSearchValue = {props.setSearchValue}
                />
            </section>)}
            
            <List>
            {props.searchedTask.map(task => (
                <Task 
                key = {task.id} 
                text ={task.text}
                completed = {task.completed}
                onToggle = {() => props.toggleTask(task.id)}
                onDelete = {() => props.deleteTask(task.id)}
                />
            ))}
            </List>
            <FloatingCreate
                floatingActivation = {props.floatingCreateTask}
            />

        </div>
        {props.isMobile ? (
            <div className={`search${props.isWindowVisible ? 'Show' : ''}`}>
            <SetUpTask 
                inputValue = {props.inputValue} 
                setInputValue = {props.setInputValue}
                onClear = {props.clearInput}
                onCreate = {props.addTask}
            />
            </div>
        ) : (
            <div className='search'>
            <SetUpTask 
            inputValue = {props.inputValue} 
            setInputValue = {props.setInputValue}
            onClear = {props.clearInput}
            onCreate = {props.addTask}
            />
            </div>
        )
        }
        <div className='chatGPT'>
            <ChatGPT />
        </div>
        </>
    );
}

export { AppUI }