import { useEffect, useState } from "react";
import { CheckWin } from "./logic/CheckWin";
import AlertBox from "./components/alertBox/AlertBox";
import ChoosePlayerWindow from "./components/choosePlayer/ChoosePlayerWindow";
import GameOverScreen from "./components/GameOver/GameOverScreen";
import MainGameWindow from "./components/MainGame/MainGameWindow";
import DrawScreen from "./components/GameOver/DrawScreen";
import ScreenLock from "./components/MainGame/ScreenLock";

function Main() {
const markMainBorderInPlayerColor=document.getElementById("App")
const [field,setField]=useState({ A1:"",B1:"",C1:"",
                                A2:"",B2:"",C2:"",
                                A3:"",B3:"",C3:""
                                })
const [gameState,setGameState]=useState({state:"start",turn:""})
const [player,setPlayer]=useState({playerModel:"",player:""})
const [npc,setNpc]=useState({npcModel:"",npc:"",move:""})
const [cacheTurn,setChacheTurn]=useState("")
const [roundCounter,setRoundCounter]=useState(0)
const [alert,setAlert]=useState({state:false,msg:""})
const [screenLock,setScreenLock]=useState(false)
const [playedFields,setPlayedFields]=useState([])


useEffect(() => {
    (async function() {
    const checkWinner = await CheckWin(field,gameState)
    if(checkWinner === "O"){
        if(checkWinner===player.playerModel){
            setGameState({...gameState,state:"gameOver",winner:player.playerModel})
        }
        else{
            setGameState({...gameState,state:"gameOver",winner:npc.npcModel})
        markMainBorderInPlayerColor.className="App choice2"
        }
    }
    if(checkWinner === "X"){
        if(checkWinner===player.playerModel){
            setGameState({...gameState,state:"gameOver",winner:player.playerModel})
        }
        else{
            setGameState({...gameState,state:"gameOver",winner:npc.npcModel})
        }
    }
    })();
}, [roundCounter]);

useEffect(() => {
    if(roundCounter>=9){
        setGameState({...gameState,state:'draw'})
}
}, [roundCounter])


useEffect(() => {
const markMainBorderInPlayerColor=document.getElementById("App")
    if(gameState.state === "run" && gameState.turn === "player-O"){
        markMainBorderInPlayerColor.className="App choice1"
    }else if(gameState.state === "run" && gameState.turn === "player-X"){
        markMainBorderInPlayerColor.className="App choice2"
    }else{
        markMainBorderInPlayerColor.className="App"
    }
}, [gameState.turn,gameState.state])

const startNewGame =  () => {
    setField({  A1:"",B1:"",C1:"",
                A2:"",B2:"",C2:"",
                A3:"",B3:"",C3:""})
    setGameState({state:"start",turn:""})
    setPlayer({playerModel:"",player:""})
    setNpc({npcModel:"",npc:"",move:""})
    setChacheTurn("")
    setRoundCounter(0)
    setPlayedFields([])
}

const finishTurn = async ()=>{
    if(cacheTurn==="" &&gameState.turn===player.player){
        setAlert({state:true,msg:"Machen Sie ihren Zug"})
    }else{
        if(alert.state===true){
            setAlert({state:false,msg:""})
        }
    
        if(gameState.turn===player.player){
            setGameState({...gameState,turn:npc.npc})
            setField({...field,[cacheTurn]:player.playerModel})
            setPlayedFields([...playedFields,cacheTurn])
            setScreenLock(true)
        }else {
            setGameState({...gameState,turn:player.player})
            setScreenLock(false)
        }
        setRoundCounter(roundCounter+1)
    }
}

console.log(playedFields)
return (
    <>  
        <div className="testdiv">
            {alert.state && <AlertBox alertMsg={alert.msg} setAlert={setAlert}/>}
            
        </div>

        <div className="App" id="App">
            {gameState.state==="run" && screenLock && <ScreenLock   screenLock={screenLock}  field={field} finishTurn={finishTurn} roundCounter={roundCounter} 
                                                                    npc={npc} setNpc={setNpc} setField={setField} setPlayedFields={setPlayedFields} playedFields={playedFields}/>}
            <h1 className="text-center text-underline"> Tic Tac Toe </h1>
            <div className="text-box">
                {gameState.state==="start" &&<p>Klassisches Tic-Tac-Toe. Wer drei in einer Reihe hat gewinnt!</p> }
                {gameState.state==="start" && <ChoosePlayerWindow gameState={gameState} setGameState={setGameState} player={player} setPlayer={setPlayer} 
                                                                setNpc={setNpc} setAlert={setAlert}/>}

                {gameState.state==="run" &&   <MainGameWindow player={player} gameState={gameState}  roundCounter={roundCounter} startNewGame={startNewGame} 
                                                            field={field} finishTurn={finishTurn} cacheTurn={cacheTurn} setChacheTurn={setChacheTurn}/> }
                                                            

                {gameState.state==="gameOver"&& <GameOverScreen gameState={gameState} startNewGame={startNewGame} player={player}/>}
                {gameState.state==="draw"&& <DrawScreen gameState={gameState} startNewGame={startNewGame}/>}
            </div>
        </div>
    </>
)};

export default Main;
