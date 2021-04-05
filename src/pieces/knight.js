import Piece from './piece'
import {getKnightMovement} from '../utilities/movement'

class Knight extends Piece{
    getPossibleMoves(board){
        return getKnightMovement(board, this.position, this.color)
    }
}

export default Knight;