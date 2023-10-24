import React from "react";
import useLoginStatus from "../../hooks/useLoginStatus";
import './Header.css';
import useStateValues from "../../hooks/useStateValues";

function Header(){
        const [loggedIn,setLoggedIn]=React.useState("Log in");
        const [loggedInText,setLoggedInText]=React.useState("Log in for more experience");
        const [logInStatus,setLogInStatus]=React.useState(true);
        
        const [count,setCount]=React.useState(0);
        React.useEffect(()=>{console.log(count)},[count]);

        const counter=()=>{setCount(count+1)};

        const isUserLoggedIn=useLoginStatus(logInStatus);
        useStateValues(loggedInText,loggedIn);

        const handleLogIn=()=>{
                setLogInStatus(!logInStatus);
                if (isUserLoggedIn) {
                        setLoggedIn("Log out"); setLoggedInText("Welcome back, user");
                } 
                else {
                        setLoggedIn("Log in"); setLoggedInText("Log in for more experience");
                } 
        }

        return(<div>
        <div className="RightBox">
        {loggedInText}
        <button onClick={handleLogIn}>{loggedIn}</button>
        </div>    
        <h1>Welcome to LR4 {isUserLoggedIn}</h1>
        <button onClick={counter}>counter + 1</button>
        </div>
        );
}
export default Header;