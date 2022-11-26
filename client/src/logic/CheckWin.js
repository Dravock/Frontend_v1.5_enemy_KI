export const CheckWin = async (data) => {
    var winner =""
    //ROW WIN O
    if(data.A1==="O"&&data.A2==="O"&&data.A3==="O"){
        winner="O"
        return winner 
    }
    if(data.B1==="O"&&data.B2==="O"&&data.B3==="O"){
        winner="O"
        return winner 
    }
    if(data.C1==="O"&&data.C2==="O"&&data.C3==="O"){
        winner="O"
        return winner 
    }
    // COLUM WIN O
    if(data.A1==="O"&&data.B1==="O"&&data.C1==="O"){
        winner="O"
        return winner 
    }
    if(data.A2==="O"&&data.B2==="O"&&data.C2==="O"){
        winner="O"
        return winner 
    }
    if(data.A3==="O"&&data.B3==="O"&&data.C3==="O"){
        winner="O"
        return winner 
    }

    //SCHRÄG GEWINN O
    if(data.A1==="O"&&data.B2==="O"&&data.C3==="O"){
        winner="O"
        return winner 
    }
    if(data.A3==="O"&&data.B2==="O"&&data.C1==="O"){
        winner="O"
        return winner 
    }


    //ROW WIN X
    if(data.A1==="X"&&data.A2==="X"&&data.A3==="X"){
        winner="X"
        return winner     
    }
    if(data.B1==="X"&&data.B2==="X"&&data.B3==="X"){
        winner="X"
        return winner     
    }
    if(data.C1==="X"&&data.C2==="X"&&data.C3==="X"){
        winner="X"
        return winner    
    }
    // COLUM WIN X
    if(data.A1==="X"&&data.B1==="X"&&data.C1==="X"){
        winner="X"
        return winner    
    }
    if(data.A2==="X"&&data.B2==="X"&&data.C2==="X"){
        winner="X"
        return winner    
    }
    if(data.A3==="X"&&data.B3==="X"&&data.C3==="X"){
        winner="X"
        return winner    
    }

    //SCHRÄG GEWINN X
    if(data.A1==="X"&&data.B2==="X"&&data.C3==="X"){
        winner="X"
        return winner    
    }
    if(data.A3==="X"&&data.B2==="X"&&data.C1==="X"){
        winner="X"
        return winner    
    }
    return winner="kein Gewinner"
}