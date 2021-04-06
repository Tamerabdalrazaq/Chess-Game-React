import React, { useEffect, useState } from 'react'
import Board from './Board'
import Player from '../Player'
import '../Board.css'

const player_black = new Player('b', 60);
const player_white = new Player('w', 60);

function Game() {
    const [gameStart, setGameStart] = useState(false);


    function startButton(){
        setGameStart(true);
        if(!gameStart) player_white.startTimer()
    }

    return (
        <div className="container">
            <Board player_black={player_black} player_white={player_white} gameStart={gameStart}/>
            <div className='menu'>
                <PlayerView player={player_white}/>
                <button className="btn-start"
                onClick={() => startButton()}>START GAME</button>
                <PlayerView player={player_black}/>
            </div>
        </div>
    )
}

function PlayerView({player}){
    const [pTimer, setPTimer] = useState(player.time);
    useEffect(() => player.updateFunction = setPTimer , [])
    return (
        <div className="div-player">
            <h1>Name</h1>
            <h1>{pTimer}</h1>
        </div>
    )
}

export default Game