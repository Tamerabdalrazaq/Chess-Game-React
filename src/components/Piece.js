import React, {useRef, useState}from 'react'

function Piece({type, onClick}) {
  const [dragged, setDragged] = useState(false)
  const pieceRef = useRef()
  return (
    <div className="piece">
        {type && 
        <img ref={pieceRef}
        style={{opacity: dragged? 0: 1}}
        alt={type}
        src={require(`../../public/static/img/${type}.png`).default}
        onDragStart={(e) => {
          setDragged(true)
        }}
        onDragEnd = {(e) => {
          setDragged(false);
          console.log(e);
        }}
        />}
    </div>
  );
}

export default Piece;