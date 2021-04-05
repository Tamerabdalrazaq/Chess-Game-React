import {isVirtualBoardInCheck} from '../utilities/virtualBoard'
class Piece{
    constructor(color, position, key, player){
        this.color = color;
        this.position = position;
        this.key = key;
        this.player = player;
    }

    setPosition(position){
        this.position= position
    }

    getLegalMoves(board){
        let possibleMoves = this.getPossibleMoves(board);
        let legalMoves = possibleMoves.filter(move => {
            return isVirtualBoardInCheck(board, [this, move]);
        })
        return legalMoves; 
    }
}

export default Piece;