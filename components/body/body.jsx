import React from "react";
import './Body.css';
class Body extends React.Component{
    constructor(props){
        super(props);
        this.state={comments:[],users:[],tempComment:'',tempUser:''}
        this.handleCommentUpdate=this.handleCommentUpdate.bind(this);
        this.handleUserUpdate=this.handleUserUpdate.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleBuyRequest=this.handleBuyRequest.bind(this);
    }

    handleSubmit(event){
        this.setState(prevState=>({comments:[...prevState.comments,this.state.tempComment]}));
        this.setState(prevState=>({users:[...prevState.users,this.state.tempUser]}));
        //alert("User "+this.state.tempUser+" published new comment: "+this.state.tempComment);
        event.preventDefault();
    }

    handleCommentUpdate(event){
        this.setState({tempComment:event.target.value});
    }

    handleUserUpdate(event){
        this.setState({tempUser:event.target.value});
    }

    handleBuyRequest(event){
        event.preventDefault();
    }

    render(){
    return (
        <div>
        {/* Buy Form */}
        <div className="MidBox">
        <form onSubmit={this.handleBuyRequest}>
            <table className="MidTable">
            {this.props.productList.map((x)=><tr><td><input type='checkbox'/></td>
            <td><label>{x.title}</label></td>
            <td><label>{x.description}</label></td></tr>)}
            <tr><td colSpan={2}><button className="MidButton">Buy selected products</button></td></tr>
            </table>
        </form>
        </div>
            <div className="LeftBox">
            {/* Comment Section */}
            <h2 align={'center'}>User comment section</h2>
                <table width={'100%'} border={1}>
                {this.state.comments.map((x,index)=><tr>
                <td><label><h4>{this.state.users.at(index)}</h4> {x}</label></td></tr>)}
                </table>
            </div>
            {/* Add Comment Form */}
                <form onSubmit={this.handleSubmit}>
                    <label>Name: <input type="text" onChange={this.handleUserUpdate} required={true}/></label>
                    <label>Comment: <input type="text" onChange={this.handleCommentUpdate} required={true}/></label>
                    <input type="submit" value="Submit comment"/>
                </form>
        </div>
        )
    }
}
export default Body;