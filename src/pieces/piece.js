class Piece{
    constructor(color, position, key){
        this.color = color;
        this.position = position;
        this.key = key;
    }

    setPosition(position){
        this.position= position
    }
}

export default Piece;