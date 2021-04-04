import React from 'react'
import Piece from './Piece'

function Square ({piece, onClick, position, dragEvent, isLegalMove}) {
    return (
        <div 
        style={{background: (position[0] + position[1])%2 ? '#333': '#fff' }}
        className={`square ${isLegalMove ? 'legal-move' : ''}`}
        onClick= {() => onClick(piece, [...position])}
        // onDrag={() => dragEvent({row: position[0], col: position[1], type: piece})}
        onDragOver = {(e) => {e.preventDefault()}}
        onDrop={(e) => {console.log(e); onClick(piece, [...position])}}
        >
            <Piece type={piece} onClick={onClick}/>
        </div>
    )
}

export default Square