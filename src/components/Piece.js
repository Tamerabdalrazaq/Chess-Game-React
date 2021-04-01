import React, {useState, useEffect} from 'react'

function Piece({type}) {
  return (
    <div className="piece">
        <img src={require(`../img/queen-w.png`).default} />
    </div>
  );
}

export default Piece;
