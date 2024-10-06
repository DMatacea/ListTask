import { MdDelete } from "react-icons/md";
import './Task.css'

function Task({ text, completed, onToggle, onDelete }) {
  return (
    <li className="listOfTask">
      <section className="sectionCheckbox">
        <input 
          className="inputcheckbox"
          type="checkbox" 
          checked={completed} 
          onChange={onToggle} 
        />
      </section>
      <section className="sectionTextTask">
        <span 
          translate = "no"
          className = "textTask"
          style={
            { textDecoration: completed ? 'line-through' : 'none' }
          }
        >
          {text}
        </span>
      </section>
      <section className="sectionIconDelete">
        <MdDelete onClick={onDelete} className="iconDelete"/>
      </section>
    </li>
  );
}

export {Task}