import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
            count2:0
        };
        console.log(this.props.name+"Child Constructor");
    }
    componentDidMount(){
        console.log(this.props.name+"Child Component Mount");
    }
    render(){
        console.log(this.props.name+"Child render");
        const{name,location}=this.props;
        const{count,count2}=this.state;
        return <div className="user-card">
        <h2>Count : {count}</h2>
        <h2>Count2 : {count2}</h2>
        <button onClick={()=>{
            //never update state variables directly 
            this.setState({
                count:this.state.count+1,
            count2:this.state.count2+1})
        }}>Count Increase</button>
        <h2>Name :{name} </h2>
        <h2>Contact : @varshapalepu19</h2>
        <h2>Location : {location}</h2>
    </div>
    }
}
export default UserClass;