import { useEffect, useState } from "react";

function useStateValues(...data){
    const[stateValue,setStateValue]=useState(...data);

    useEffect(()=>{
        setStateValue(...data);
        console.table(data);
    });

    return stateValue;
}

export default useStateValues;