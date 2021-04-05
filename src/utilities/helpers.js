import Rook from '../pieces/rook'
import Bishop from '../pieces/bishop'
import Queen from '../pieces/queen'
import King from '../pieces/king'
import Knight from '../pieces/knight'

function getPieceObject(key, color, position, player){
    switch(key){
        case('r'):
            return (new Rook(color, position, `r-${color}`, player))
        case('b'):
            return (new Bishop(color, position, `b-${color}`, player))
        case ('q'):
            return (new Queen(color, position, `q-${color}`, player))
        case ('k'):
            return (new King(color, position, `k-${color}`, player))
        case ('n'):
            return (new Knight(color, position, `n-${color}`, player))
        default:
            return null
    }
}

function notBeyondMatrix(row, col){
    return (row >= 0 && row < 8 && col >= 0 && col < 8);
}

export {getPieceObject, notBeyondMatrix}