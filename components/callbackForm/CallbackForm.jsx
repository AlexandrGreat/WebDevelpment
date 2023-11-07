import React from "react";
import { Link } from "react-router-dom";

class LogInForm extends React.Component{

    render(){
    return (
        <div align="center">
            <form onSubmit={this.handleSubmit}>
                <table>
                    <tr><td><label>Email:</label></td><td><input type="text" required={true}/></td></tr>
                    <tr><td><label>Phone:</label></td><td><input type="text" required={true}/></td></tr>
                    <tr><td><label>Name:</label></td><td><input type="text" required={true}/></td></tr>
                </table>
                <div><Link to='/'>Confirm</Link></div>       
            </form>
        </div>
        )
    }
}
export default LogInForm;