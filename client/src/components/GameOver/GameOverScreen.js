import React, { useEffect } from 'react'
import PlayerO from '../choosePlayer/PlayerO'

const GameOverScreen = (props) => {
    const {gameState,startNewGame,player}=props
    let msgWin="Sie haben gewonnen :)"
    let msgLoose="Sie haben Verloren :("

useEffect(() => {
    const markMainBorderInPlayerColor=document.getElementById("App")

}, [gameState.winner])


const newGameButton=()=>{
    startNewGame()
}
console.log("gewinner ist",gameState.winner)
console.log("player ist",player.playerModel)

return (
<div className='mt-4'>
    {<h3 className='text-center mt-5'>{gameState.winner===player.playerModel ? msgWin : msgLoose}</h3>}
    <div className='text-center'>
        <h3 className='mt-5'>Gewinner ist</h3>
        <h1 className={gameState.winner === "X" ? "Color-Red" : "Color-Green" }> {gameState.winner} </h1>
    </div>
    <div className='text-center mt-5'>
        <button className='btn' onClick={()=>newGameButton()}>Neues Spiel</button>
    </div>
    
</div>
)
}

export default GameOverScreen