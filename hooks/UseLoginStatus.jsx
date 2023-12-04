import { useEffect, useState } from "react";

function useLoginStatus(status){
    const[isLoggedIn,setIsLoggedIn]=useState(status);

    useEffect(()=>{
        setIsLoggedIn(status);
    });

    return isLoggedIn;
}

export default useLoginStatus;