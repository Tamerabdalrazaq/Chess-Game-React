import Rook from '../pieces/rook'
import Bishop from '../pieces/bishop'
import Queen from '../pieces/queen'
import King from '../pieces/king'
import Knight from '../pieces/knight'

function getPieceObject(key, color, position){
    switch(key){
        case('r'):
            return (new Rook(color, position, `r-${color}`))
        case('b'):
            return (new Bishop(color, position, `b-${color}`))
        case ('q'):
            return (new Queen(color, position, `q-${color}`))
        case ('k'):
            return (new King(color, position, `k-${color}`))
        case ('n'):
            return (new Knight(color, position, `n-${color}`))
        default:
            return null
    }
}

function notBeyondMatrix(row, col){
    return (row >= 0 && row < 8 && col >= 0 && col < 8);
}

export {getPieceObject, notBeyondMatrix}