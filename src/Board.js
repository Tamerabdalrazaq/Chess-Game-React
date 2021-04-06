import React, {useState, useEffect} from 'react'
import './Board.css'
import Square from './components/Square'
import {getPieceObject} from './utilities/helpers'
import Player from './Player'

const NUM_OF_ROWS = 8;
const INITIAL_SETUP = 'r n b q k'
const player_black = new Player('b')
const player_white = new Player('w', '5:00')

function Board() {
  const [boardState, setBoardState] = useState(Array(NUM_OF_ROWS).fill(Array(NUM_OF_ROWS).fill(null)));
  const [currentPiece, setCurrentPiece] = useState(null)
  const [currentLegalMoves, setCurrentLegalMoves] = useState([])
  const [playerTurn, setPlayerTurn] = useState('w')
  
  useEffect(() => {
    if(playerTurn === 'w'){}
  }, [playerTurn])
  useEffect(() => {
    const initialPieces = INITIAL_SETUP.split(' ');
    let boardSetupUpdate = [];
    initialPieces.forEach((key, index) =>{
      const piece_white = getPieceObject(key, 'w', [0, index], player_white);
      const piece_black = getPieceObject(key,'b', [0, index], player_white)
      boardSetupUpdate.push({row: NUM_OF_ROWS-1, col:index, type: piece_white})
      boardSetupUpdate.push({row: 0, col:index, type: piece_black})
      player_white.alivePieces.push(piece_white);
      player_black.alivePieces.push(piece_black);
    })
    setBoardState(updateState(boardSetupUpdate))
  }, [])

  function handleSquareClick(type, position) {
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
        setPlayerTurn(playerTurn === 'w' ? 'b':'w')
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
    return stateCopy;
  }
  
  function checkEndGame(board){
    const currentPlayer = playerTurn === 'w' ? player_black:player_white;
      if(currentPlayer.isInCheck([player_white, player_black], board)
      && !currentPlayer.getAllLegalMoves(board).length){
        alert('white won!')
      }
      if(!currentPlayer.isInCheck([player_white, player_black], board)
      && !currentPlayer.getAllLegalMoves(board).length){
        alert('Stale Mate')
      }
  }

  return (
    <div className="container">
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
      <div className={playerTurn === 'w' ? 'white-turn':'black-turn'}></div>
    </div>
  );
}

export default Board;