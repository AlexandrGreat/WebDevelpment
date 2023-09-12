import { Component } from "react";

class TableComponent extends Component{
    render(){
        return(<table border={1}>
            <tr><td>name:</td><td>Alexander</td></tr>
            <tr><td>surname:</td><td>Kutsev</td></tr>
            <tr><td>group:</td><td>310</td></tr>
            </table>);
    }
}
export default TableComponent;