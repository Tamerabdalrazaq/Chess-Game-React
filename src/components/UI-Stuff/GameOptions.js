import React from 'react'

const gameTypes = [60, 300, 600]

export default function GameOptions({gameType, setGameType, startButton}){
    return (
        <div className="custom-game">
            <div className="games">
                <i className={`fas fa-brain ${gameType === gameTypes[0] ? 'selected': ''}`}
                style={{color:'rgb(189, 125, 65)'}}
                onClick={() => setGameType(gameTypes[0])}></i>
                <i className={`fas fa-bolt ${gameType === gameTypes[1] ? 'selected': ''}`}
                style={{color:"#ff0"}}
                onClick={() => setGameType(gameTypes[1])}></i>
                <i className={`fas fa-hourglass-half ${gameType === gameTypes[2] ? 'selected': ''}`}
                style={{color:'rgb(52, 159, 42)'}}
                onClick={() => setGameType(gameTypes[2])}></i>
            </div>
            <button className="btn-start" onClick={() => startButton()}>PLAY</button>
        </div>
    )
}