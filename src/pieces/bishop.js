import Piece from './piece'
import {getDiagonalMovement} from '../utilities/movement'

class Bishop extends Piece{

    getPossibleMoves(board){
        return getDiagonalMovement(board, this.position, this.color);
    }

}

export default Bishop;