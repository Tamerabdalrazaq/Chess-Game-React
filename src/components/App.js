import React, { useEffect, useState } from 'react'
import Board from './Board'
import Player from '../Player'
import PieceCemetery from './PieceCemetery'
import MovesHistory from './UI-Stuff/MovesHistory'
import GameOptions from './UI-Stuff/GameOptions'
import '../Board.css'

const player_black = new Player('b', 60);
const player_white = new Player('w', 60);
const game = {
    players: [player_white, player_black], 
    updateHistoryFunction: null, 
    movesHistory: [],
};

function App() {
    const [gameStart, setGameStart] = useState(false);
    const [gameType, setGameType] = useState(60);

    function startButton(){
        setGameStart(true);
        player_white.startTimer();
    }

    useEffect(() => {
        player_black.editTimer(gameType)
        player_white.editTimer(gameType)
    }, [gameType])

    return (
        <div className="container">
            <Board game={game} gameStart={gameStart} />

            <aside>
                <PieceCemetery player = {player_black} />
                <PlayerTimer player={player_black} className="player-black"/>

                <div className='menu'>
                    {!gameStart ? 
                    <GameOptions gameType={gameType} setGameType={setGameType} startButton={startButton} />
                    :
                    <MovesHistory game={game}/>
                    }
                </div>

                <PlayerTimer player={player_white} className="player-white"/>
                <PieceCemetery player = {player_white} />
            </aside>
        </div>
    )
}

function PlayerTimer({player}){
    const [pTimer, setPTimer] = useState(player.time);
    useEffect(() => player.updateTimerFunction = setPTimer , [player])
    return (
        <div className="div-player">
            <div className={`timer ${player.timer ? 'active-timer': ''}`} ><h1>{pTimer}</h1></div>
        </div>
    )
}

export default App