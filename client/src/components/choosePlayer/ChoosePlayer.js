import React from 'react'
import PlayerO from './PlayerO'
import PlayerX from './PlayerX'

const ChoosePlayer = (props) => {
    const {player}=props
    
return (<>
          <PlayerO player={player}/>
          <PlayerX player={player}/>
        </>
)};

export default ChoosePlayer