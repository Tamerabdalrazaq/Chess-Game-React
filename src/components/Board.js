import React, {useState, useEffect} from 'react'
import Square from './Square'
import {getPieceObject} from '../utilities/helpers'
import {createVirtualBoard} from '../utilities/virtualBoard'

const NUM_OF_ROWS = 8;
const INITIAL_SETUP = 'r n b k q b n r'

function Board({player_black, player_white, gameStart}) {
  const [boardState, setBoardState] = useState(Array(NUM_OF_ROWS).fill(Array(NUM_OF_ROWS).fill(null)));
  const [currentPiece, setCurrentPiece] = useState(null)
  const [currentLegalMoves, setCurrentLegalMoves] = useState([])
  const [playerTurn, setPlayerTurn] = useState('w')
  console.log(boardState);
  useEffect(() => {
    const initialPieces = INITIAL_SETUP.split(' ');
    let boardSetupUpdate = [];
    initialPieces.forEach((key, index) =>{
      const piece_white = getPieceObject(key, 'w', [NUM_OF_ROWS-1, index], player_white);
      const piece_black = getPieceObject(key,'b', [0, index], player_black)
      const pawn_white = getPieceObject('p', 'w', [NUM_OF_ROWS-1, index], player_white);
      const pawn_black = getPieceObject('p','b', [0, index], player_black)
      boardSetupUpdate.push({row: NUM_OF_ROWS-1, col:index, type: piece_white})
      boardSetupUpdate.push({row: 0, col:index, type: piece_black})
      boardSetupUpdate.push({row: NUM_OF_ROWS-2, col:index, type: pawn_white})
      boardSetupUpdate.push({row: 1, col:index, type: pawn_black})
      player_white.alivePieces.push(piece_white);
      player_black.alivePieces.push(piece_black);
      player_white.alivePieces.push(pawn_white);
      player_black.alivePieces.push(pawn_black);
    })
    for(let x = 0; x<8; x++){

    }
    setBoardState(updateState(boardSetupUpdate))
  }, [])

  function handleSquareClick(type, position) {
    if(!gameStart) return false;
    if(currentPiece){
      if(currentLegalMoves.find(move => (move.join('') === position.join('') ))){
        const updatedBoard = updateState([
          {row: currentPiece.row, col:currentPiece.col, type: null},
          {row: position[0], col:position[1], type: currentPiece.type},
        ])
        setBoardState(updatedBoard);
        if(type){
          if(playerTurn === 'w') player_black.kill(position);
          else player_white.kill(position);
        }
        checkEndGame(updatedBoard);
        flipTurns();
      }
      setCurrentPiece(null);
      setCurrentLegalMoves([])
    }

    else if(type && !currentPiece){
      if(type.color !== playerTurn) return false;
      setCurrentPiece({row: position[0], col: position[1], type:type});
      setCurrentLegalMoves(type.getLegalMoves(boardState))
    }
  }

  function updateState(updatesArray){
    let stateCopy = createVirtualBoard(boardState);
    updatesArray.forEach(update => {
      stateCopy[update.row][update.col] = update.type;
      update.type?.setPosition([update.row, update.col])
    })
    return stateCopy;
  }
  
  function checkEndGame(board){
    const currentPlayer = playerTurn === 'w' ? player_black:player_white;
    const isInCheck = (currentPlayer.isInCheck([player_white, player_black], board))
    const numOfLegalMoves = currentPlayer.getAllLegalMoves(board).length;
    if(isInCheck && !numOfLegalMoves) alert(`${currentPlayer} checkmated`)
    if(!isInCheck && !numOfLegalMoves) alert(`STALEMATE`)
  }

  function flipTurns(){
    const current = playerTurn === 'w' ? player_white:player_black; 
    const next = playerTurn === 'w' ? player_black:player_white;
    current.stopTimer();
    next.startTimer();
    setPlayerTurn(playerTurn === 'w' ? 'b':'w');
    
  }

  return (
      <div className="board">
        {boardState.map((row, rowIndex) => row.map((col, colIndex) =>
          <Square onClick={handleSquareClick} key={`${rowIndex}-${colIndex}`}
          piece={boardState[rowIndex][colIndex]}
          position={[rowIndex, colIndex]}
          dragStartEvent={setCurrentPiece}
          isLegalMove = {currentLegalMoves?.find(move => move.join('') === (`${rowIndex}${colIndex}`))}
          />
        ))}
      </div>
  );
}

export default Board;