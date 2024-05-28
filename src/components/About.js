import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";
 class About extends Component{
    constructor(props){
        super(props);
        console.log("Parent Constructor");
        this.state={
            userInfo:{
                name:"Dummy",
                location:"Default",
            },
        }
    }
    async componentDidMount(){
        console.log("Parent Component Mount");
        const data=await fetch("https://api.github.com/users/VarshaPalepu19");
        const json= data.json();
        this.setState({
            userInfo:json,
        })
        console.log(json);
    }
    componentDidUpdate(){
        console.log("Parent Did Update");
    }
    render(){
        console.log("Parent Render");
        //const {name,location,avatar_url}=this.state.userInfo;
    return(
        // <div className=" py-10 ">
        //     {/* <h1>About</h1>
        //     <h2>This is about page</h2>
        //     //*<User name={"Varsha (function)"}/>
        //     <h1>Name :{this.state.userInfo.name}</h1>
        //     <h1>Location : {this.state.userInfo.location}</h1>
        //     <img src= {this.state.userInfo.avatar_url} />
        //     <UserClass name={"Varsha (class)"} location={"Hyderabad (class)"}/>
        //     <UserClass name={"Vaishnavi (class)"} location={"Hyderabad (class)"}/> */}
        //     <img className="w-[1500px] rounded-md text-center m-auto" src="https://png.pngtree.com/back_origin_pic/05/05/68/52e6ab3fde77ad0a01b5d03c03e982f8.jpg"/>
        //     <h1>BELIEVE in Food</h1>
        // </div>
        <div className="py-10">
        <div
        className="bg-cover bg-center text-white m-auto rounded-md w-[1500px] h-[350px] pb-24"
        style={{
          backgroundImage: 'url("https://png.pngtree.com/back_origin_pic/05/05/68/52e6ab3fde77ad0a01b5d03c03e982f8.jpg")',
        }}
      >
        <div className="container mx-auto py-24">
          <h1 className="text-[45px] font-bold text-center">We BELIEVE in good.</h1>
          <p className="mt-4 text-[20px] text-center block px-48 ">When we say good, we don’t just mean good food. We also mean the goodness that good food leads to. Good memories, a good temper, a good day, a good burp. And we know that when our food leaves our kitchens, we’re creating all that. It’s rewarding, this belief in good. Now take a look at how we go about it.</p>
        </div>
      </div>
      </div>
    )
    }

};
export default About;