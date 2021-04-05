import King from './pieces/king'
export default class Player {
    constructor(color, time='10:00', alivePieces=[],){
        this.color = color;
        this.time = time;
        this.alivePieces = alivePieces; 
        this.castled = false;
        this.inCheck = false;
    }
    getAllLegalMoves(board){
        let possibleMoves = [];
        this.alivePieces.forEach(piece => possibleMoves.push(piece.getLegalMoves(board)));
        return (possibleMoves);
    }

    kill(position){
        let index = this.alivePieces.findIndex(piece => 
            piece.position.join('') === position.join(''))
        this.alivePieces.splice(index, 1);
    }

    isInCheck(players, board){
        let enemy = this.color === 'w' ?  players[1]: players[0];
        let enemyMoves = [];
        enemy.getAllLegalMoves(board).forEach(pieceMoves => pieceMoves.forEach(move => enemyMoves.push(move)))
        const kingPosition = this.getKing().position.join('')
        if(enemyMoves.find(move => kingPosition === move.join(''))){
            this.inCheck = true;
            console.log(`${this.color} is in check!`);
            return true;
        }
        else {
            console.log(`${this.color} is out of check`);
            this.inCheck = false;
            return false;
        }
    }

    getKing(){
        return this.alivePieces.find(piece => piece instanceof King)
    }
}