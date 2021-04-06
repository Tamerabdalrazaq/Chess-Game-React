import Piece from './piece'
import {getPawnMovement} from '../utilities/movement'

class Pawn extends Piece{
    constructor(...args){
        super(...args)
        this.firstMove = true;
    }
    getPossibleMoves(board){
        const legalMoves = getPawnMovement(board, this.position, this.color, this.firstMove)
        return legalMoves;
    }
    setPosition(position){
        this.position= position
        if(this.firstMove) this.firstMove = false;
    }
}

export default Pawn;