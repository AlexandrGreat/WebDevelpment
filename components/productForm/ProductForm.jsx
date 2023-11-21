import React, { createRef, useRef, useState } from "react";
import { CSSTransition,TransitionGroup } from "react-transition-group";
import './styles.css';

function ProductForm (){
    const productList=[
    {id:1,title:'Glock 19',description:'Austria, 9mm, 15 ammo'},
    {id:2,title:'Desert Eagle',description:'Israel, .50AE, 7 ammo'},
    {id:3,title:'Thompson 1928',description:'USA, .45, 50 ammo'},
    {id:4,title:'M 16',description:'USA, 5.56, 25 ammo'},
    {id:5,title:'Negev',description:'Israel, 5.56x45, 200 ammo'},
    {id:6,title:'Spas 12',description:'Italy, 12, 7 ammo'},
    {id:7,title:'AWP',description:'England, 7.62x51, 5 ammo'},
];

    const nodeRef=useRef(null);
    const [showMessage,setShowMessage]=useState(false);
    const [showButton,setShowButton]=useState(true);

    const [items,setItems]=useState([]);

    return (
        <div>
            
            <h4 align="center">List of available products:</h4>
            <table className="MidTable">
            {productList.map((x)=><tr><td><button onClick={()=>{setItems((items)=>[...items,{title:x.title,nodeRef:createRef(null)}]); }}>To cart</button></td>
            <td><label>{x.title}</label></td>
            <td><label>{x.description}</label></td></tr>)}
            </table>
            
<div style={{borderStyle:'solid',borderColor:'black',borderWidth:1}}>   
<h3>Cart</h3>        
<TransitionGroup > 
            {items.map((x,index)=>
            (
            <CSSTransition key={index} timeout={500} classNames="item">
                <tr><td>{x.title}</td><td><button onClick={()=>{setItems(items.filter((o,i)=>index!=i))}}>Remove</button></td></tr>
            </CSSTransition>))}
</TransitionGroup>

            <button onClick={()=>setShowMessage(true)}>Buy selected products</button>
            <CSSTransition  in={showMessage} timeout={1400} classNames="alert" unmountOnExit onEnter={()=>setShowButton(false)} onExited={()=>setShowButton(true)}>
                <div style={{backgroundColor:'rgba(0,0,99,0.5)',width:'100%',height:'100%',position:'absolute',top:0,left:0,borderRadius:100}}>
                <div style={{borderColor:'black',borderStyle:'solid',position:'absolute',top:'25%',left:'35%',backgroundColor:'white',borderRadius:50,width:'30%',height:'30%',borderWidth:1}}>
                    <div style={{position:'relative',top:'25%'}}>
                    <p>Confirm purchase</p>
                    <div style={{flex:1,justifyContent:'space-between'}}>
                    <button onClick={()=>setShowMessage(false)}>Cancel</button>  
                    <button onClick={()=>{setShowMessage(false);setItems([])}}>Buy</button>    
                    </div>
                    </div>
                </div>
                </div>
            </CSSTransition>
            </div>
        </div>
        )
    
}
export default ProductForm;