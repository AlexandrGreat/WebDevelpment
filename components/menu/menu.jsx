import { Link } from "react-router-dom";

function Menu(){
    return <table width="100%">
        <tr>
        <td><Link to='/'>Home</Link></td>
        <td><Link to='/products'>Product List</Link></td>
        <td><Link to='/about'>About us</Link></td>
        <td><Link to='/callback'>Callback</Link></td>
        </tr>
        </table>
}
export default Menu;