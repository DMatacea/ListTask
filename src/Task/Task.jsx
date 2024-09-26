import { MdDelete } from "react-icons/md";
import './Task.css'

function Task({ text, completed, onToggle, onDelete }) {
  return (
    <li>
      <div id="divTask">
        <input 
          type="checkbox" 
          checked={completed} 
          onChange={onToggle} 
        />
      </div>
      <div id="divTask">
        <span 
          id="textTask"
          style={
            { textDecoration: completed ? 'line-through' : 'none' }
          }
        >
          {text}
        </span>
      </div>
      <div id="divTask divTaskDelete">
        <MdDelete onClick={onDelete} id="iconDelete"/>
      </div>
    </li>
  );
}

export {Task}