import React, {useState, useEffect} from 'react'
import './Board.css'
import Square from './components/Square'
// import {checkLegalMove} from './utilities/movement'
import {getPieceObject} from './utilities/helpers'

const NUM_OF_ROWS = 8;
const INITIAL_SETUP = 'r n b k q b n r'

function Board() {
  const [boardState, setBoardState] = useState(Array(NUM_OF_ROWS).fill(Array(NUM_OF_ROWS).fill(null)));
  const [currentPiece, setCurrentPiece] = useState(null)
  const [currentLegalMoves, setCurrentLegalMoves] = useState([])
  console.log(boardState);

  useEffect(() => {
    const initialPieces = INITIAL_SETUP.split(' ');
    let boardSetupUpdate = [];
    initialPieces.forEach((piece, index) =>
    boardSetupUpdate.push({row: NUM_OF_ROWS-1, col:index, type:getPieceObject(piece, 'w', [0, index])}))
    initialPieces.forEach((piece, index) =>
    boardSetupUpdate.push({row: 0, col:index, type:getPieceObject(piece,'b', [0, index])}))
    updateState(boardSetupUpdate);
  }, [])

  function handleSquareClick(type, position) {
    if(currentPiece){
      if(currentLegalMoves.find(move => (move.join('') === position.join('') ))){
        updateState([
          {row: currentPiece.row, col:currentPiece.col, type: null},
          {row: position[0], col:position[1], type: currentPiece.type},
        ])
      } else{ console.log('illegal')}
      setCurrentPiece(null);
      setCurrentLegalMoves([])
    }
    else if(type && !currentPiece){
      setCurrentPiece({row: position[0], col: position[1], type:type});
      setCurrentLegalMoves(type.getLegalMoves(boardState))
      console.log(type.getLegalMoves(boardState));
    }
  }

  function updateState(updatesArray){
    let stateCopy = [];
    for(let x = 0; x< NUM_OF_ROWS; x++){
      stateCopy[x] = [];
      for(let y = 0; y< NUM_OF_ROWS; y++)
        stateCopy[x].push(boardState[x][y]);
    }
    updatesArray.forEach(update => {
      stateCopy[update.row][update.col] = update.type;
      update.type?.setPosition([update.row, update.col])
    })
    setBoardState(stateCopy);
  }
  
  return (
    <div className="board">
      {boardState.map((row, rowIndex) => row.map((col, colIndex) =>
        <Square onClick={handleSquareClick} key={`${rowIndex}-${colIndex}`}
        piece={boardState[rowIndex][colIndex]}
        position={[rowIndex, colIndex]}
        dragEvenet={setCurrentPiece}
        isLegalMove = {currentLegalMoves?.find(move => move.join('') === (`${rowIndex}${colIndex}`))}
        />
      ))}
    </div>
  );
}

export default Board;
