import React from 'react'
import Piece from './Piece'

function Square ({piece, onClick, position, dragStartEvent, isLegalMove}) {
    return (
        <div 
        style={{background: (position[0] + position[1])%2 ? '#333': '#fff' }}
        className={`square ${isLegalMove ? 'legal-move' : ''}`}
        onClick= {() => onClick(piece, [...position])}
        onDragStart={() => onClick(piece, [...position])}
        onDragOver = {(e) => {e.preventDefault()}}
        onDrop={(e) => onClick(piece, [...position])}
        >
            <Piece type={piece} onClick={onClick}/>
        </div>
    )
}

export default Square