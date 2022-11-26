import React from 'react'

const PlayerO = (props) => {
    const{player}=props
return (
    <div className="box" id="playerBox1"onClick={(e)=>player("player-O")}>
        <div className="playerO"></div>
    </div>
)};

export default PlayerO