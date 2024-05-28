import ItemList from "./ItemList";
import { useState } from "react";
const ResCategory =({data,showItems,setShowIndex}) =>{
    //const[showItems, setShowItems]=useState(false);
    handleClick=()=>{
        setShowIndex();
    }
    return <div>
    <div className="w-6/12 m-auto my-2 bg-gray-50 shadow-md p-4 ">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <span>{data.title} ({data.itemCards.length})</span>
        <span className="w-2 h-2 border-black border-r-2 border-b-2 transform 
        rotate-45 border-black"></span>
                        </div>
                        {showItems && <ItemList items={data.itemCards} />}
    </div>
    </div>
}


export default ResCategory;