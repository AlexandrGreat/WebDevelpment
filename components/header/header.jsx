import React from "react";
import './Header.css';
import { useLocation } from "react-router-dom";

function Header(){
        const location=useLocation();
        console.log(location.pathname);

        return(<div>  
        <h1>Welcome to LR5</h1>
        </div>
        );
}
export default Header;
