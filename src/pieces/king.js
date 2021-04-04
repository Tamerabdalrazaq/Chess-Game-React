import {notBeyondMatrix} from '../utilities/helpers'
import Piece from './piece'
class King extends Piece{
    getLegalMoves(board){
        let legalMoves = [];
        const [row, col] = this.position
        for(let x = -1; x<=1; x++){
            for(let y = -1; y<=1; y++){
                if(notBeyondMatrix(row+x, col+y))
                if(!board[row+x][col+y] || board[row+x][col+y].color !== this.color)
                    legalMoves.push([row+x,col+y]);
            }
        }
        return legalMoves;
    }
}

export default King;