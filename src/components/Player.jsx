import {useState} from "react";

export default function Player({initialName, symbol, isActive, onChangeName}) {

  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);

    if(isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    console.log(event);
  setPlayerName(event.target.value);
  }

  let playerNameTag = <span className='player-name'>{playerName}</span>;
  let buttonCaption = 'Edit';

  if (isEditing) {
    playerNameTag = <input type="text" required value={playerName} onChange={handleChange} />;
    buttonCaption = 'Save';
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className='player'>
        {playerNameTag}
        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{buttonCaption}</button>
    </li>
  )
}