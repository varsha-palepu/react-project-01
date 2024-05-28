import { useRouteError } from "react-router-dom";
const Error=()=>{
    const err=useRouteError();
    console.log(err);
    return(
        <div>
        <div>Oops!</div>
        <div>{err.status} : {err.statusText} </div>
        </div>
    )
}
export default Error;
