import { getKingMovement } from '../utilities/movement';
import Piece from './piece'
class King extends Piece{
    getPossibleMoves(board){
        return getKingMovement(board, this.position, this.color)
    }
}

export default King;