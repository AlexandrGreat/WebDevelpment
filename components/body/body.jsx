import React from "react";
import './Body.css';
import { topicText } from "../../contexts/SomeDataContext";

class Body extends React.Component{

    constructor(props){
        super(props);
        this.state={topicText:props.topicText,sComments:[],sUsers:[],sTopics:[],comments:[],users:[],topics:[],tempComment:'',tempUser:'',sorter:'-',topic:props.productList[0].title}
        this.handleCommentUpdate=this.handleCommentUpdate.bind(this);
        this.handleUserUpdate=this.handleUserUpdate.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleBuyRequest=this.handleBuyRequest.bind(this);
        this.handleTopicChange=this.handleTopicChange.bind(this);
        this.handleSorterChange=this.handleSorterChange.bind(this);
    }

    handleTopicChange(event){
        this.setState({topic:event.target.value});
    }

    handleSorterChange(event){
        this.setState({sorter:event.target.value});
        this.setState({sTopics:[]});
        this.setState({sUsers:[]});
        this.setState({sComments:[]});
        if(event.target.value!=="")
        for (let i=0;i<this.state.topics.length;i++)
        {
            if(this.state.topics[i]===event.target.value)
            {
                this.setState(prevState=>({sTopics:[...prevState.sTopics,this.state.topics.at(i)]}));
                this.setState(prevState=>({sComments:[...prevState.sComments,this.state.comments.at(i)]}));
                this.setState(prevState=>({sUsers:[...prevState.sUsers,this.state.users.at(i)]}));
            }
        }
        else
        for (let i=0;i<this.state.topics.length;i++)
        {
                this.setState(prevState=>({sTopics:[...prevState.sTopics,this.state.topics.at(i)]}));
                this.setState(prevState=>({sComments:[...prevState.sComments,this.state.comments.at(i)]}));
                this.setState(prevState=>({sUsers:[...prevState.sUsers,this.state.users.at(i)]}));
        }
    }

    handleSubmit(event){
        this.setState(prevState=>({topics:[...prevState.topics,this.state.topic]}));
        this.setState(prevState=>({comments:[...prevState.comments,this.state.tempComment]}));
        this.setState(prevState=>({users:[...prevState.users,this.state.tempUser]}));
        event.preventDefault();
        this.handleSorterChange(event);
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
        <h4 align="center">{topicText}</h4>
            <table className="MidTable">
            {this.props.productList.map((x)=><tr>
            <td><label>{x.title}</label></td>
            <td><label>{x.description}</label></td></tr>)}
            {/* <tr><td colSpan={2}><button className="MidButton">Buy selected products</button></td></tr> */}
            </table>
        </form>
        </div>

            <div className="LeftBox">
            {/* Comment Section */}
            <h2 align={'center'}>User comment section</h2>
                Select topic:  
                <select onChange={this.handleSorterChange}>
                    <option value="---" selected disabled hidden>-</option>
                    <option value="">None</option>
                    {this.props.productList.map((x)=><option value={x.title}>{x.title}</option>)}
                </select>
                <button onClick={this.handleSorterChange}>update</button>
                <table width={'100%'} border={1}>



                
                {this.state.sComments.map((x,index)=><tr>
                <td><label><h4>{this.state.sUsers.at(index)} - {this.state.sTopics.at(index)}</h4> {x}</label></td></tr>)} 
                </table>
            
            </div>
            
            {/* Add Comment Form */}
                <form onSubmit={this.handleSubmit}>
                    <select value={this.state.topic} onChange={this.handleTopicChange}>
                        {this.props.productList.map((x)=><option value={x.title}>{x.title}</option>)}
                    </select>
                    <label>Name: <input type="text" onChange={this.handleUserUpdate} required={true}/></label>
                    <label>Comment: <input type="text" onChange={this.handleCommentUpdate} required={true}/></label>
                    <input type="submit" value="Submit comment"/>
                </form>
                
        </div>
        )
    }
}
export default Body;