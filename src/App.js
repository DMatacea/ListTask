import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoFilter } from './TodoFilter';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';

const defaultTodo =[ 
{text : "Dormir", completed : false},
{text : "Comer", completed : true},
{text : "Bañarse", completed : false}
]
function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={16} total={25} />
      <TodoFilter />

      <TodoList>
        {defaultTodo.map(todo =>(
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
          />
          ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
