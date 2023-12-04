import React from "react";
import { addItem,removeItem,removeAll } from "../../reducres/actions";
import { connect } from "react-redux";
import styles from'./styles.module.css';
const initialState={title:'',description:''} 

class Items extends React.Component{    
    productList=[
        {title:'Glock 19',description:'Austria, 9mm, 15 ammo'},
        {title:'Desert Eagle',description:'Israel, .50AE, 7 ammo'},
        {title:'Thompson 1928',description:'USA, .45, 50 ammo'},
        {title:'M 16',description:'USA, 5.56, 25 ammo'},
        {title:'Negev',description:'Israel, 5.56x45, 200 ammo'},
        {title:'Spas 12',description:'Italy, 12, 7 ammo'},
        {title:'AWP',description:'England, 7.62x51, 5 ammo'},
    ];

    state={title:'',description:''}
    updateInput=(title,description)=>{
        this.setState({description:description,title:title})
    }

    handleSubmit=()=>{
        this.addItem();
    }

    handleBuy=()=>{
        this.props.dispatchRemoveAll()
        alert('Thanks for buying!')
    }

    addItem=()=>{
        this.props.dispatchAddItem(this.state)
    }

    handleRemove=()=>{
        this.props.dispatchRemoveAll()
    }

    removeItem=(item)=>{
        this.props.dispatchRemoveItem(item)
    }

    render(){
        const {items}=this.props
        return(
            <div >     
                <div>
                    {this.productList.map((data)=>{return(
                    <tr><td>{data.title} : {data.description}</td>
                    <td><button title='To cart!' onClick={()=>{
                    this.updateInput(data.title,data.description); if(this.state.title!=='') {console.log("BEFORE: "+items); this.handleSubmit(); console.log("AFTER: "+items)}}}>To cart!</button>
                    </td></tr>)})}
                </div>

                <h3>Shopping cart</h3>
                <div style={{position:'relative',left:'25%',borderStyle:'solid',borderWidth:1,borderColor:'black',width:'50%',borderRadius:50}}>
                    {items.map((item,index)=>(
                        <div style={{backgroundColor:'#ddd',borderRadius:50}} key={index}>
                            <h4 >{item.title}</h4>
                            <h4 >{item.description}</h4>
                            <p onClick={()=>this.removeItem(item)}>Remove</p>
                        </div>
                    ))}
                    <button title="remove all" onClick={()=>{console.log("BEFORE: "+items); this.handleRemove(); console.log("AFTER: "+items)}}>remove all</button>
                    <button title="BUY!" onClick={()=>{console.log("BEFORE: "+items); this.handleBuy(); console.log("AFTER: "+items)}}>BUY!</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>({
    items:state.cartReducer.items
})

const mapDispatchToProps={
    dispatchAddItem:(item)=>addItem(item),
    dispatchRemoveItem:(item)=>removeItem(item),
    dispatchRemoveAll:()=>removeAll()
}

export default connect(mapStateToProps,mapDispatchToProps)(Items)