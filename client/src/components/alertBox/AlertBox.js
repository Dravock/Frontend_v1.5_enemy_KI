import React, { useEffect, useState } from 'react'
import CloseButton from '../../includes/img/svg/CloseButton'
import ProgressBar from "@ramonak/react-progress-bar";

const AlertBox = (props) => {
    const {alertMsg,setAlert}=props

    const [counter,setCounter]=useState(4)

useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    if(counter === 0){
        closeAlertBtn()
    }
}, [counter]);

const closeAlertBtn =()=>{
    setCounter(0)
    setAlert({state:false,msg:""})
}

return (

    <div className="alert alert-warning" role="alert">
        <div className='row'>
            <p >{alertMsg}</p>
            <div className='pos-close-alertBtn'onClick={()=>closeAlertBtn()}>
                <CloseButton size={"22"}/>
            </div>
        </div>
        <div className='alert-progBar'>
            <ProgressBar completed={counter} maxCompleted={4} height={'15px'} width={'100%'} isLabelVisible={false} bgColor={'rgba(255, 0, 0, 0.815)'}/>
        </div>
    </div>

)}

export default AlertBox