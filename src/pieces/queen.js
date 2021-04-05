import Piece from './piece'
import {getDiagonalMovement, getVerticalMovement} from '../utilities/movement'

class Queen extends Piece{
    getPossibleMoves(board){
        return [...getVerticalMovement(board, this.position, this.color),
               ...getDiagonalMovement(board, this.position, this.color)]
    }
}

export default Queen