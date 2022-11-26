import React, { useEffect, useState } from 'react'

const ScreenLock = (props) => {
    const { screenLock,npc,setNpc,field,roundCounter,
            setField,finishTurn,setPlayedFields,playedFields}=props

    const arrAplha=["A","B","C"]
    const arrNum=[1,2,3]
    const d = document

    const arrLength=arrAplha.length
    var tag = d.createElement("p");
    var text = d.createTextNode(npc.playerModel);

    const alpa=Math.floor(Math.random()*arrLength)
    const num =Math.floor(Math.random()*arrLength)
    let npcMove = arrAplha[alpa]+arrNum[num.toString()]

    const [counter,setCounter]=useState(3)



useEffect(() => {
    const checkIfOccupied = playedFields.includes(npcMove)
    if(checkIfOccupied && roundCounter < 8){
        let check =true
        while (check) {
            const nAlpa=Math.floor(Math.random()*arrLength)
            const newNum =Math.floor(Math.random()*arrLength)
            var newMove = arrAplha[nAlpa]+arrNum[newNum.toString()]
            const checkIfOccupied2= playedFields.includes(newMove)
            if(!checkIfOccupied2){
                check=false
            }
        }
        setNpc({...npc,move:newMove})
        setPlayedFields([...playedFields,newMove])
    }else{
        setNpc({...npc,move:npcMove})
        setPlayedFields([...playedFields,npcMove])
    }

}, [screenLock]);



useEffect(() => {
    if(npc.playerModel==="X"){
        tag.className="test Color-Red"
    }else{
        tag.className="test Color-Green"
    }

    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    if(counter === 0){
        setField({...field,[npc.move]:npc.playerModel})
        tag.appendChild(text);
        var element = d.getElementById(npc.move);
        element.appendChild(tag);
        finishTurn()
    }
}, [counter]);



return (
    <div className='screenLock'></div>
)
}

export default ScreenLock