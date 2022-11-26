import React from 'react'
import ChoosePlayer from './ChoosePlayer'

const ChoosePlayerWindow = (props) => {
    const {gameState,setGameState,setNpc,player,setPlayer,setAlert}=props

const choosePlayer =(player)=>{
    const markPlayerChoiec1=document.getElementById("playerBox1")
    const markPlayerChoiec2=document.getElementById("playerBox2")
    
    switch (player) {
        case "player-O":
                markPlayerChoiec1.className="box choice1"
                markPlayerChoiec2.className="box"
                setPlayer({playerModel:"O",player:"player-O"})
                setGameState({...gameState,turn:player})
                
                setNpc({playerModel:"X",npc:"player-X"})
        break;
        case "player-X":
                markPlayerChoiec1.className="box"
                markPlayerChoiec2.className="box choice2"
                setPlayer({playerModel:"X",player:"player-X"})
                setGameState({...gameState,turn:player})
                
                setNpc({playerModel:"O",npc:"player-O"})
        break;
        default:
        break;
    }
}

const submitPlayerModel =()=>{
    if(player.playerModel!==""){
        if(alert.state===true){
            setAlert({state:false,msg:""})
        }
        setGameState({...gameState,state:"run"})
    }else{
        setAlert({state:true,msg:"Bitte wählen Sie ihre Figur aus!"})
    }
}

return (
    <>
        <h3>Wählen Sie Ihre Spielfigur:</h3>
        <div className="choosePlayer">
            <ChoosePlayer player={choosePlayer} />
        </div>
        <div className="text-center mt-3">
            <button className="btn" onClick={()=>submitPlayerModel()}> Spiel Starten</button>
        </div>
    </>
)}

export default ChoosePlayerWindow