import React from 'react'
import { GameTable } from './GameTable'

const MainGameWindow = (props) => {
    const   {   player,finishTurn,gameState,roundCounter,
                startNewGame,field,cacheTurn,setChacheTurn,
            } = props



const getField =(e)=>{
    setChacheTurn(e.target.id)
}

return (
    <>
        <p>Sie haben <span className="text-bold">{player.playerModel}</span> gewählt</p>
        {gameState.turn===player.player ? <h3 className="text-bold">Sie sind an der Reihe<br/></h3>:<h3 className="text-bold">Der Gegenspieler ist dran</h3>}
        <div className="gameTable">
            <GameTable gameState={gameState} getField={getField} gamefield={field} cacheTurn={cacheTurn} setChacheTurn={setChacheTurn}/>
        </div >
        <div className="text-center" >  
            {roundCounter >= 9 ? <button className="btn mt-1" onClick={()=>startNewGame()}>Spiel Neustarten</button> :<button className="btn mt-1" onClick={()=>finishTurn()}>Zug beenden</button>}
            <h4>Verbleibende Züge</h4>
            <h2>{9-roundCounter}</h2>
        </div>
    </>
)}

export default MainGameWindow