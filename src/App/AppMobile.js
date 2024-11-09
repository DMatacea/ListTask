import { NamePage } from '../Counter/Counter';
import { OptionsButtons } from '../OptionsButtons/OptionsButtons';
// import { ActivationInputSearch } from '../ActivationInputSearch/ActivationInputSearch'
import { List } from '../List/List';
import { Task } from '../Task/Task';
import { FloatingCreate } from '../FloatingCreate/FloatingCreate'
// import { ChatGPT } from '../ChatGPT/ChatGPT';
// import { SetUpTask } from '../SetUpTask/SetUpTask';
import { LoadingTask } from '../LoadingTask/LoadingTask';
import { ErrorTask } from '../ErrorTask/ErrorTask';
import { WithoutTask } from '../WithoutTask/WithoutTask';

function AppMobile(props) {
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
                <FloatingCreate
                    floatingActivation = {props.floatingCreateTask}
                />
            </div>
        </>
    )
}

export { AppMobile }