import React, {useState, useEffect} from 'react'
import './Board.css'
import Square from './components/Square'
import {checkLegalMove} from './utilities/movement'

const NUM_OF_ROWS = 8;
const INITIAL_SETUP = 'r n b q k b n r'

function Board() {
  const [boardState, setBoardState] = useState(Array(NUM_OF_ROWS).fill(Array(NUM_OF_ROWS).fill(null)));
  const [currentPiece, setCurrentPiece] = useState(null)
  console.log(boardState);
  useEffect(() => {
    const initialPieces = INITIAL_SETUP.split(' ');
    let boardSetupUpdate = [];
    initialPieces.forEach((piece, index) => boardSetupUpdate.push({row: NUM_OF_ROWS-1, col:index, type:`${piece}-w`}))
    initialPieces.forEach((piece, index) => boardSetupUpdate.push({row: 0, col:index, type:`${piece}-b`}))
    updateState(boardSetupUpdate);
  }, [])

  function handleSquareClick(type, position) {
    if(currentPiece){
      checkLegalMove({row: position[0], col: position[1], type: type}, boardState)
      updateState([
        {row: currentPiece.row, col:currentPiece.col, type: null},
        {row: position[0], col:position[1], type: currentPiece.type},
      ])
      setCurrentPiece(null);
    }
    else if(type && !currentPiece){
      setCurrentPiece({row: position[0], col: position[1], type:type});
    }
  }

  function updateState(updatesArray){
    let stateCopy = JSON.parse(JSON.stringify(boardState));
    updatesArray.forEach(update => stateCopy[update.row][update.col] = update.type)
    setBoardState(stateCopy);
  }
  return (
    <div className="board">
      {boardState.map((row, rowIndex) => row.map((col, colIndex) =>
        <Square onClick={handleSquareClick} key={`${rowIndex}-${colIndex}`}
        piece={boardState[rowIndex][colIndex]}
        color={rowIndex+colIndex}
        position={[rowIndex, colIndex]}
        dragEvenet={setCurrentPiece}
        />
      ))}
    </div>
  );
}

export default Board;
