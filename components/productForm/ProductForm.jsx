import React from "react";
import { Link } from "react-router-dom";

class ProductForm extends React.Component{
    productList=[
    {id:1,title:'Glock 19',description:'Austria, 9mm, 15 ammo'},
    {id:2,title:'Desert Eagle',description:'Israel, .50AE, 7 ammo'},
    {id:3,title:'Thompson 1928',description:'USA, .45, 50 ammo'},
    {id:4,title:'M 16',description:'USA, 5.56, 25 ammo'},
    {id:5,title:'Negev',description:'Israel, 5.56x45, 200 ammo'},
    {id:6,title:'Spas 12',description:'Italy, 12, 7 ammo'},
    {id:7,title:'AWP',description:'England, 7.62x51, 5 ammo'},
];
    render(){
    return (
        <div>
            <form onSubmit={this.handleBuyRequest}>
        <h4 align="center">List of available products:</h4>
            <table className="MidTable">
            {this.productList.map((x)=><tr><td><input type='checkbox'/></td>
            <td><label>{x.title}</label></td>
            <td><label>{x.description}</label></td></tr>)}
            </table>
            <div><Link to='/'>Buy selected products</Link></div> 
        </form>
        </div>
        )
    }
}
export default ProductForm;