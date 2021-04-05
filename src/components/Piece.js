import React, {useRef, useState}from 'react'

function Piece({type}) {
  const [dragged, setDragged] = useState(false)
  const pieceRef = useRef()
  return (
    <div className="piece">
        {type && 
        <img ref={pieceRef}
        style={{opacity: dragged? 0: 1}}
        alt={type}
        src={require(`../../public/static/img/${type.key}.png`).default}
        onDragStart={(e) => 
          setDragged(false)}
        onDragEnd = {(e) =>
          setDragged(false)}
        />}
    </div>
  );
}

export default Piece;