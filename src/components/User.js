import {useState} from "react";
const User=({name})=>{
    const [count]=useState(0);
    const [count2]=useState(1);
    return <div className="user-card">
        <h1>Count ={count}</h1>
        <h2>Name : {name}</h2>
        <h2>Contact : @varshapalepu19</h2>
    </div>
};
export default User;