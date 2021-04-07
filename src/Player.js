import King from './pieces/king'
export default class Player {
    constructor(color, time=60, alivePieces=[]){
        this.color = color;
        this.time = time;
        this.alivePieces = alivePieces; 
        this.castled = false;
        this.inCheck = false;
        this.timer = null;
        this.deadPieces = [];
    }
    getAllLegalMoves(board){
        let possibleMoves = [];
        this.alivePieces.forEach(piece => {
            piece.getLegalMoves(board).forEach(move => possibleMoves.push(move))
        });
        return (possibleMoves);
    }

    kill(position){
        let index = this.alivePieces.findIndex(piece => 
            piece.position.join('') === position.join(''))
        console.log((this.alivePieces));
        this.deadPieces.push(this.alivePieces[index].key);
        console.log(this.deadPieces);
        this.updateCemetry([...this.deadPieces]);
        this.alivePieces.splice(index, 1);
    }

    isInCheck(players, board){
        let enemy = this.color === 'w' ?  players[1]: players[0];
        let enemyMoves = enemy.getAllLegalMoves(board);
        const kingPosition = this.getKing().position.join('')
        if(enemyMoves.find(move => kingPosition === move.join(''))){
            this.inCheck = true;
            return true;
        }
        else {
            this.inCheck = false;
            return false;
        }
    }

    getKing(){
        return this.alivePieces.find(piece => piece instanceof King)
    }

    startTimer(){
        this.timer = setInterval(() => {
            this.time = this.time - 1;
            this.updateTimerFunction(this.time)
        }, 1000)
    }

    stopTimer(){
        clearInterval(this.timer);
        this.timer = null;
    }
}