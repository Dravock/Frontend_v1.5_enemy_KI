import React, { useEffect } from 'react'

export const GameTable = (props) => {
    var d = document
    const {getField,gameState,gamefield,cacheTurn,setChacheTurn}=props
    let played =[]

useEffect(() => {
    if(gameState.turn==="player-X"){
        played="O"
        if(cacheTurn===""){
            return
        }else{
            var tag = d.createElement("p");
            tag.className="test Color-Green"
            var text = d.createTextNode(played);
            tag.appendChild(text);
            var element = d.getElementById(cacheTurn);
            element.appendChild(tag);
            setChacheTurn("")
        }
    }else{
        played="X"
        if(cacheTurn===""){
            return
        }else{
            var tag = d.createElement("p");
            tag.className="test Color-Red"
            var text = d.createTextNode(played);
            tag.appendChild(text);
            var element = d.getElementById(cacheTurn);
            element.appendChild(tag);
            setChacheTurn("")
        }
    }





}, [gamefield])


return (
<div className='mt-4'>
    <div className='row1' id="A">
        <div className='field' id="A1" onClick={(e)=>getField(e)}></div>
        <div className='field' id="A2" onClick={(e)=>getField(e)}></div>
        <div className='field' id="A3" onClick={(e)=>getField(e)}></div>
    </div>
    <div className='row1' id="B">
        <div className='field' id="B1" onClick={(e)=>getField(e)}></div>
        <div className='field' id="B2" onClick={(e)=>getField(e)}></div>
        <div className='field' id="B3" onClick={(e)=>getField(e)}></div>
    </div>
    <div className='row1' id="C">
        <div className='field' id="C1" onClick={(e)=>getField(e)}></div>
        <div className='field' id="C2" onClick={(e)=>getField(e)}></div>
        <div className='field' id="C3" onClick={(e)=>getField(e)}></div>
    </div>
</div>
)};
