import React from 'react'

const DrawScreen = (props) => {
    const{gameState,startNewGame}=props

const newGameButton=()=>{
    startNewGame()
}
return (
    <>  <h1 className='text-center mt-5'>Unentschieden</h1>
        <div className='text-center mt-5'>
            <p>Was ein Spannendes Match! Lust auf eine Revanche?</p>
        </div>
        <div className='text-center mt-5'>
            <button className='btn' onClick={()=>newGameButton()}>Neues Spiel</button>
        </div>
    </>
)}

export default DrawScreen