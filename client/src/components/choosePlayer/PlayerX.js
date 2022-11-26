import React from 'react'

const PlayerX = (props) => {
    const{player}=props
return (
    <div className="box"id="playerBox2" onClick={(e)=>player("player-X")}>
        <div className="playerX">
            <div className="cross1"/></div>
            <div className="cross2"/><div>
        </div>
    </div>
)};

export default PlayerX