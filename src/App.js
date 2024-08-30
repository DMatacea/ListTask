import React from 'react';
import { Counter } from './Counter/Counter';
import { Filter } from './Filter/Filter';
import { List } from './List/List';
import { Task } from './Task/Task';
import { CreateNewButton } from './ButtonNewTask/ButtonNewTask';

const list =[ 
{text : "Dormir", completed : false},
{text : "Comer", completed : true},
{text : "Bañarse", completed : false}
]
function App() {
  return (
    <>
      <div>
        <Counter completed={16} total={25} />
        <Filter />

        <List>
          {list.map(todo =>(
            <Task 
              key={todo.text} 
              text={todo.text}
              completed={todo.completed}
            />
            ))}
        </List>

        <CreateNewButton />
      </div>
    </>
  );
}

export default App;
