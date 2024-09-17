import './Task.css'

function Task({ text, completed, onToggle, onDelete }) {
  return (
    <li>
      <input 
        type="checkbox" 
        checked={completed} 
        onChange={onToggle} 
      />
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {text}
      </span>
      <img id="imgDelete"
      src="https://i.imgur.com/fiVyYSv.png" 
      alt="Delete task"
      onClick={onDelete}
      />
    </li>
  );
}

export {Task}