import Piece from './piece'
import {getPawnMovement} from '../utilities/movement'

class Pawn extends Piece{
    constructor(...args){
        super(...args)
        this.moves = 0;
    }
    getPossibleMoves(board){
        const legalMoves = getPawnMovement(board, this.position, this.color, this.moves)
        return legalMoves;
    }
    setPosition(position){
        this.position= position
        if(this.moves < 2) this.moves = this.moves + 1;
    }
}

export default Pawn;