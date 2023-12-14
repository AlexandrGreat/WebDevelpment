import { Routes,Route } from "react-router-dom";
import About from "../../Pages/About/About";
import Category from "../../Pages/Category/Category";
import Contact from "../../Pages/Contact/Contact";
import Home from "../../Pages/Home/Home"

function ApplicationRoutes(){
    return( 
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/:categoryID' element={<Category/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
    );
}

export default ApplicationRoutes;