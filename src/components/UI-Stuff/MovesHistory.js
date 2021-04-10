import React, { useState, useEffect, useRef } from 'react'

function MovesHistory ({ game }) {
    const [movesHistory, setMovesHistory] = useState([]);
    const tableRef = useRef();
    useEffect(() =>  game.updateHistoryFunction = setMovesHistory, [game]);
    
    useEffect(() => tableRef.current.scrollTop = tableRef.current.scrollHeight,[movesHistory])
    return (
        <div id="table-wrapper" >
            <div id="table-scroll" ref={tableRef}>
                <table id="table">
                    <thead>
                        <tr>
                            <th>Move Num</th>
                            <th>From Square</th>
                            <th>To Square</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movesHistory.map((move, index) => (
                            <tr key = {index}>
                                <td>{index+1}</td>
                                <td>{move[0]}</td>
                                <td>{move[1]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MovesHistory;