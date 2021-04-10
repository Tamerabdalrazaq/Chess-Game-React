import React, { useEffect, useState } from 'react'

function PlayerCemetery({player}){
    const [deadPieces, updateDeadPieces] = useState([]);
    useEffect(() => player.updateCemetry = updateDeadPieces , [player])
    return(
        <div className="piece-cemetry">
            {deadPieces.map((piece, index) =>
            <img src={require(`../../public/static/img/${piece}.png`).default}
            key={index}
            alt={piece}>
            </img>)}
        </div>
    )
}

export default PlayerCemetery