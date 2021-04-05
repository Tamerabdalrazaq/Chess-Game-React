import Piece from './piece'
import {getVerticalMovement} from '../utilities/movement'

class Rook extends Piece{
    getPossibleMoves(board){
        const legalMoves = getVerticalMovement(board, this.position, this.color)
        return legalMoves;
    }
}

export default Rook;