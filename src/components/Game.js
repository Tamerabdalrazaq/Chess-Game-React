import React, { useEffect, useState } from 'react'
import Board from './Board'
import Player from '../Player'
import PieceCemetery from './PieceCemetery'

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
                <div>
                    <PlayerView player={player_black} className="player-black"/>
                    <PieceCemetery player = {player_black} />
                </div>
                {!gameStart && <button className="btn-start" onClick={() => startButton()}>START GAME</button>}
                <div>
                    <PieceCemetery player = {player_white} />
                    <PlayerView player={player_white} className="player-white"/>
                </div>
            </div>
        </div>
    )
}

function PlayerView({player}){
    const [pTimer, setPTimer] = useState(player.time);
    useEffect(() => player.updateTimerFunction = setPTimer , [player])
    return (
        <div className="div-player">
            <h1>Player</h1>
            <h1>{pTimer}</h1>
        </div>
    )
}

export default Game