import Piece from './piece'
import {getVerticalMovement} from '../utilities/movement'

class Rook extends Piece{
    getLegalMoves(board){
        const legalMoves = getVerticalMovement(board, this.position, this.color)
        return legalMoves;
    }
}

export default Rook;