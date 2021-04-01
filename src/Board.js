import React, {useState, useEffect} from 'react'
import './Board.css'
import Piece from './components/Piece'
const NUM_OF_ROWS = 8;

class Square {
  constructor(type = null, player = null) {
      this.type = type;
      this.player = player;
  }
}

function Board() {
  const [boardState, setBoardState] = useState(Array(NUM_OF_ROWS).fill(Array(NUM_OF_ROWS).fill(new Square('queenw'))));
  console.log(boardState);
  console.log(boardState);
  return (
    <div className="board">
      {boardState.map((row, rowIndex) => row.map((col, colIndex) =>
      <div key={`${rowIndex}-${colIndex}`}
      style={{background: (rowIndex + colIndex)%2 ? '#333': '#fff' }}
      className={`square ${boardState[rowIndex][colIndex].type}`}
    >
            <Piece type='queenw' />
      </div>))}
    </div>
  );
}

export default Board;
