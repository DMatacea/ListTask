import React, { useState, useEffect } from 'react';
import './App.css'
import { NamePage } from './Counter/Counter';
import { OptionsButtons } from './OptionsButtons/OptionsButtons';
import { ActivationInputSearch } from './ActivationInputSearchActivation/ActivationInputSearch'
import { List } from './List/List';
import { Task } from './Task/Task';
import { FloatingCreate } from './FloatingCreate/FloatingCreate'
import { ChatGPT } from './ChatGPT/ChatGPT';
import { SetUpTask } from './SetUpTask/SetUpTask';

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try{
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error){
      console.error('Error accesing (getItem) localStorage: ', error)
      return initialValue
    }
  })

  const setValue = (value) => {
    try {
      setStoredValue(value)
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error('Error setting (setItem) localStorage: ', error)
    }
  }

  return [storedValue, setValue]
}

function App() {
  const [taskOption, setTaskOption] = useLocalStorage('YOURLISTTASK_V1', [])

  const [filterFinishedTask, setFilterFinishedTask] = useState(taskOption)
  
  const [searchValue, setSearchValue] = useState('')
  
  const [inputValue, setInputValue] = useState('')

  const [isWindowVisible, setisWindowVisible] = useState(false)

  const [isInputVisible, setIsInputVisible] = useState(false)

  const [isMobile, setIsMobile] = useState(false);
  
  const totalTask = taskOption.length

  //useEffect se encarga de detectar los cambios de tamaño del ordenador.
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); 
    };

    window.addEventListener('resize', checkMobile);
    checkMobile();

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  //ToggleTask se encarga de marcar las tareas finalizadas.

  const toggleTask = (id) => {
    const updatedTask = taskOption.map(stateTask => 
      stateTask.id === id ? { ...stateTask, completed: !stateTask.completed } : stateTask
    )
    setTaskOption(updatedTask)
    setFilterFinishedTask(updatedTask)
  }

  //deleteTask se encarga de eliminar las tareas finilizadas.

  const deleteTask = (id) => {
    const updatedTaks = taskOption.filter(task => task.id !== id)
    setTaskOption(updatedTaks)
    setFilterFinishedTask(updatedTaks)
  };
  
  //completedTask y doingTask se encargan de ennumerar las tareas completas y finalizadas.

  const completedTask = taskOption.filter(
    task => !!task.completed
  ).length

  const doingTask = taskOption.filter(
    task => !task.completed
  ).length

  //filterCompletedTasks mantiene filtradas las tareas completadas.

  const filterCompletedTasks = () => {
    const finishTask = taskOption.filter(
      task => task.completed === true
    )
    setFilterFinishedTask(finishTask)
  }

  //filterDoingTasks  filtra las tareas completas.

  const filterDoingTasks  = () => {
    const finishTask = taskOption.filter(
      task => task.completed === false
    )
    setFilterFinishedTask(finishTask)
  }

  //searchedTask filtra las tareas por medio del input de OptionsButtons.
  
  const searchedTask = filterFinishedTask.filter(
    (textLower) => {
      const taskText = textLower.text.toLowerCase()
      const searchtext = searchValue.toLowerCase()
      return taskText.includes(searchtext)
    })
    
  //addTask crea y añade las nuevas tareas.

  const addTask = () => {
    if(inputValue.trim()){
      const newTask = {
        id: taskOption.length > 0 ? taskOption[taskOption.length -1].id + 1 : 1,
        text: inputValue,
        completed: false
      }
      setTaskOption([...taskOption, newTask])
      setFilterFinishedTask([...taskOption, newTask])
      setInputValue('')
    }
  }
  
  //clearInput se encarga de mantener limpio el input del boton Create.

  const clearInput = () => {
    setInputValue('');
  };

  //allTask se encarga de volver a mostrar todas las tareas por medio del boton Task.
  
  const allTask = () => {
    setFilterFinishedTask(taskOption)
  }

  //floatingCreateTask se encarga de la visualizacion de la ventana flotante create.

  const floatingCreateTask = () => {
    if (isMobile){
      setisWindowVisible(!isWindowVisible)
    }
  }  
  
  const InputSearchMobile = () => {
    setIsInputVisible(!isInputVisible)
  }

  return (
    <>
      <div id='yourListTask'>
        <NamePage /> 
        
        <OptionsButtons 
          completedTask = {completedTask}
          totalTask = {totalTask}
          doingTask = {doingTask}
          allTask = {allTask}
          filterDoingTasks = {filterDoingTasks}
          filterCompletedTasks = {filterCompletedTasks}
          inputActivation = {InputSearchMobile}
          isMobile = {isMobile}
          searchValue = {searchValue}
          setSearchValue = {setSearchValue}
        /> 
        {isMobile && (
          <section id={`inputActivation${isInputVisible? 'Visible':''}`} >
            <ActivationInputSearch
            searchValue = {searchValue}
            setSearchValue = {setSearchValue}
            />
          </section>)}
        
        <List>
          {searchedTask.map(task => (
            <Task 
            key = {task.id} 
            text ={task.text}
            completed = {task.completed}
            onToggle = {() => toggleTask(task.id)}
            onDelete = {() => deleteTask(task.id)}
            />
          ))}
        </List>
        <FloatingCreate
          floatingActivation = {floatingCreateTask}
        />

      </div>
      {isMobile ? (
        <div className={`search${isWindowVisible ? 'Show' : ''}`}>
          <SetUpTask 
            inputValue = {inputValue} 
            setInputValue = {setInputValue}
            onClear = {clearInput}
            onCreate = {addTask}
          />
        </div>
      ) : (
        <div className='search'>
        <SetUpTask 
          inputValue = {inputValue} 
          setInputValue = {setInputValue}
          onClear = {clearInput}
          onCreate = {addTask}
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

export default App;
