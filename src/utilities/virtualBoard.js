function isVirtualBoardInCheck(board, move){
    const [piece, newPosition] = move;
    let virtualBoard = createVirtualBoard(board);
    virtualBoard[newPosition[0]][newPosition[1]] = piece;
    virtualBoard[piece.position[0]][piece.position[1]] = null;
    return !isInVirtualCheck(virtualBoard, piece.color);
}

function createVirtualBoard(board){
    let virtualBoard = [];
    for(let x = 0; x<board.length; x++){
        virtualBoard[x] = [];
        for(let y = 0; y < board[x].length; y++){
            virtualBoard[x][y] = board[x][y];
        }
    }
    return virtualBoard;
}

function isInVirtualCheck(virtualBoard, color){
    const enemy = color === 'w' ? 'b':'w';
    const kingPosition = getVirtualKingPosition(virtualBoard, color);
    let enemyPieces = [];
    virtualBoard.forEach(row => row.forEach(square => {
        if(square?.color === enemy)
            enemyPieces.push(square);
    } ));
    let possibleEnemyMoves = [];
    enemyPieces.forEach(piece =>
        (piece.getPossibleMoves(virtualBoard).forEach(pieceMoves => possibleEnemyMoves.push(pieceMoves))));
    let cond = (possibleEnemyMoves.find(move => kingPosition.join('') === move.join('')));
    return cond;
}

function getVirtualKingPosition(virtualBoard, color){
    for(let x = 0; x<virtualBoard.length; x++){
        for(let y = 0; y<virtualBoard[x].length; y++){
            if(virtualBoard[x][y]?.key === `k-${color}`) return [x,y]
        }
    }
}
export {isVirtualBoardInCheck, createVirtualBoard}