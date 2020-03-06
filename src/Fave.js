import React, {useState} from 'react';

export default function Fave(props) {
  const [isFave, setIsFave] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation()
    setIsFave(!isFave);
  }

  return (
    <div className={`film-row-fave ${!isFave ? 'add_to_queue' : 'remove_from_queue'}`} onClick={handleClick} >
      <p className="material-icons">{isFave ? 'remove_from_queue' : 'add_to_queue'}</p>
    </div>
  )
}