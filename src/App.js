import React, { useState } from 'react';
import './App.css'
import { NamePage } from './Counter/Counter';
import { Filter } from './Filter/Filter';
import { List } from './List/List';
import { Task } from './Task/Task';
import { CreateAndDeleteButton } from './ButtonNewTask/ButtonNewTask';
import { OptionsButtons } from './OptionsButtons/OptionsButtons';
import { Chat_GPT } from './Chat-GPT/Chat-GPT';
import { SetUpTask } from './SetUpTask/SetUpTask';


function App() {
  const [taskOption, setTaskOption] = useState([ 
    { id: 1, text: "Dormir", completed: true },
    { id: 2, text: "Comer", completed: false },
    { id: 3, text: "Bañarse", completed: false }
  ]);

  const toggleTask = (id) => {
    const updatedTask = taskOption.map(stateTask => 
      stateTask.id === id ? { ...stateTask, completed: !stateTask.completed } : stateTask
    );
    setTaskOption(updatedTask);
  }

  return (
    <>
      <div id='YourListTask'>
        <NamePage /> 

        <OptionsButtons />
        <List>
          {taskOption.map(task => (
            <Task 
              key={task.id} 
              text={task.text}
              completed={task.completed}
              onToggle={() => toggleTask(task.id)}
            />
          ))}
        </List>
      </div>
      <div id='SetAndChat'>
        <section id='Search'>
          <SetUpTask />
          <Filter />
          <section className='Create_delete_button'>
            <CreateAndDeleteButton />
          </section>
          
        </section>
        <section id='Chat_GPT'>
          <Chat_GPT />
        </section>
      </div>
    </>
  );
}

export default App;
