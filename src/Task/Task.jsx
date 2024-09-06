import './Task.css'

function Task({ text, completed, onToggle }) {
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
    </li>
  );
}

export {Task}