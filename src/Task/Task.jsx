import { MdDelete } from "react-icons/md";
import { useState } from "react";
import './Task.css'

function Task({ text, completed, onToggle, onDelete, onUpdateText }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleTextChange = (e) => { 
    setEditedText(e.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
    onUpdateText(editedText); // Actualiza el texto al salir del campo de edición
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setIsEditing(false);
      onUpdateText(editedText); // Actualiza el texto al presionar Enter
    }
  };

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
        {isEditing ? (
          <textarea
            type="text"
            value={editedText}
            onChange={handleTextChange}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            className="textTask"
            autoFocus
          />
        ) : (
          <span
            translate="no"
            className="textTask"
            onDoubleClick={handleDoubleClick}
            style={{ textDecoration: completed ? 'line-through' : 'none' }}
          >
            {text}
          </span>
        )}
      </section>
      <section className="sectionIconDelete">
        <MdDelete onClick={onDelete} className="iconDelete"/>
      </section>
    </li>
  );
}

export {Task}