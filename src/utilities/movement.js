import {notBeyondMatrix} from '../utilities/helpers'

function getKingMovement(board, position, color){
    let legalMoves = [];
        const [row, col] = position
        for(let x = -1; x<=1; x++){
            for(let y = -1; y<=1; y++){
                if(notBeyondMatrix(row+x, col+y))
                if(!board[row+x][col+y] || board[row+x][col+y].color !== color)
                    legalMoves.push([row+x,col+y]);
            }
        }
        return legalMoves;
}

function getVerticalMovement(board, position, color){
    let legalMoves = [];
    const [row, col] = position
    for(let x = 1; notBeyondMatrix(row, col+x); x++){
        if(board[row][col+x]){
            if(board[row][col+x].color !== color)
                legalMoves.push([row, col+x]);
            break
        }
        legalMoves.push([row, col+x]);
    }
    for(let x = -1; notBeyondMatrix(row, col+x); x--){
        if(board[row][col+x]){
            if(board[row][col+x].color !== color)
                legalMoves.push([row, col+x]);
            break
        }
        legalMoves.push([row, col+x]);
    }
    for(let x = 1; notBeyondMatrix(row+x, col); x++){
        if(board[row+x][col]){
            if(board[row+x][col].color !== color)
                legalMoves.push([row+x, col]);
            break
        }
        legalMoves.push([row+x, col]);
    }
    for(let x = -1; notBeyondMatrix(row+x, col); x--){
        if(board[row+x][col]){
            if(board[row+x][col].color !== color)
                legalMoves.push([row+x, col]);
            break
        }
        legalMoves.push([row+x, col]);
    }
    return legalMoves
}

function getDiagonalMovement(board, position, color){
    let legalMoves = [];
    const [row, col] = position
    for(let x = 1; notBeyondMatrix(row+x, col+x); x++){
        if(board[row+x][col+x]){
            if(board[row+x][col+x].color !== color)
                legalMoves.push([row+x, col+x]);
            break
        }
        legalMoves.push([row+x, col+x]);
    }
    for(let x = -1; notBeyondMatrix(row+x, col+x); x--){
        if(board[row+x][col+x]){
            if(board[row+x][col+x].color !== color)
                legalMoves.push([row+x, col+x]);
            break
        }
        legalMoves.push([row+x, col+x]);
    }
    for(let x = -1, y=1; notBeyondMatrix(row+x, col+y); x--, y++){
        if(board[row+x][col+y]){
            if(board[row+x][col+y].color !== color)
                legalMoves.push([row+x, col+y]);
            break
        }
        legalMoves.push([row+x, col+y]);
    }
    for(let x = 1, y = -1; notBeyondMatrix(row+x, col+y); x++, y--){
        if(board[row+x][col+y]){
            if(board[row+x][col+y].color !== color)
                legalMoves.push([row+x, col+y]);
            break
        }
        legalMoves.push([row+x, col+y]);
    }
    return legalMoves
}

function getKnightMovement(board, position, color){
    let legalMoves = [];
    const [row, col] = position;
    if (isValidSquare(row+2, col+1, board, color)) legalMoves.push([row+2, col+1]);
    if (isValidSquare(row+2, col-1, board, color)) legalMoves.push([row+2, col-1]);
    if (isValidSquare(row+1, col-2, board, color)) legalMoves.push([row+1, col-2]);
    if (isValidSquare(row+1, col+2, board, color)) legalMoves.push([row+1, col+2]);
    if (isValidSquare(row-1, col+2, board, color)) legalMoves.push([row-1, col+2]);
    if (isValidSquare(row-1, col-2, board, color)) legalMoves.push([row-1, col-2]);
    if (isValidSquare(row-2, col+1, board, color)) legalMoves.push([row-2, col+1]);
    if (isValidSquare(row-2, col-1, board, color)) legalMoves.push([row-2, col-1]);
    return legalMoves;
}

function getPawnMovement(board, position, color, moves){
    let legalMoves = [];
    const [row, col] = position;
    const pawnDirection = (color === 'w' ? -1:1);
    if (!board[row+(1*pawnDirection)][col]) legalMoves.push([row+(1*pawnDirection), col]);
    if (moves < 2 && !board[row+(2*pawnDirection)][col]) legalMoves.push([row+(2*pawnDirection), col]);
    if (isValidPawnEat(row+(1*pawnDirection), col+1, board, color)) legalMoves.push([row+(1*pawnDirection), col+1]);
    if (isValidPawnEat(row+(1*pawnDirection), col+-1, board, color)) legalMoves.push([row+(1*pawnDirection), col+-1]);
    return legalMoves;
}

function isValidSquare(row, col, board, color){
    return (notBeyondMatrix(row, col) && (!board[row][col] || board[row][col].color !== color))
}

function isValidPawnEat(row, col, board, color){
    return (notBeyondMatrix(row, col) && board[row][col] && board[row][col].color !== color);
}
export {getVerticalMovement, getDiagonalMovement, getKnightMovement, getKingMovement, getPawnMovement}