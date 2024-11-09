import { NamePage } from '../Counter/Counter';
import { OptionsButtons } from '../OptionsButtons/OptionsButtons';
import { List } from '../List/List';
import { Task } from '../Task/Task';
import { ChatGPT } from '../ChatGPT/ChatGPT';
import { SetUpTask } from '../SetUpTask/SetUpTask';
import { LoadingTask } from '../LoadingTask/LoadingTask';
import { ErrorTask } from '../ErrorTask/ErrorTask';
import { WithoutTask } from '../WithoutTask/WithoutTask';
import { CompletedTask } from '../completedTask/completedTask'

function AppComputer(props) {
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
                    onClear = {props.clearInput}
                />
                <List>
                    {props.loading && <LoadingTask/>}
                    {props.error && <ErrorTask/>}
                    {(!props.loading && props.searchedTask.length === 0) && <WithoutTask/>}
                    {(!props.loading && props.completedTask === 0 && !props.searchedTask.length === 0) && <CompletedTask/>}
                    {(!props.loading && props.doingTask === 0 && !props.searchedTask.length === 0) && <CompletedTask/>}

                    {props.searchedTask.length > 0 && props.searchedTask.map(task => (
                        <Task
                            key = {task.id}
                            text ={task.text}
                            completed = {task.completed}
                            onToggle = {() => props.toggleTask(task.id)}
                            onDelete = {() => props.deleteTask(task.id)}
                        />
                        ))
                    }
                </List>
            </div>

            <div className='search'>
                <SetUpTask
                    inputValue = {props.inputValue}
                    setInputValue = {props.setInputValue}
                    onClear = {props.clearInput}
                    onCreate = {props.addTask}
                />
            </div>
            <div className='chatGPT'>
                <ChatGPT />
            </div>
        </>
    )
}

export { AppComputer }