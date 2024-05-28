import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
// import { CDN_URL } from "../utils/constants";
const ItemList =({items})=>{
    console.log(items);
    
    const dispatch=useDispatch();
    const handleAddItem=(item)=>{
        //disptach an action
        dispatch(addItem(item))
    }
    return(
        <div>
                {items.map(item=>
                    <div data-testid="foodItems" key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                        <div className="w-9/12">
                        <div className="py-2">
                        <span>{item.card.info.name}</span>
                        <span> - ₹{item.card.info.price/100}</span>
                       
                        </div>
                        <p className="text-xs text-gray-400">{item.card.info.description}</p>
                        </div>
                        <div className="w-3/12 p-4">
                        <div className="absolute align-text-bottom">
 <button className="p-2 bg-white text-black mx-14 shadow-lg flex justify-center rounded-lg" onClick={()=>handleAddItem(item)}>ADD +</button>
 </div>
 <img className="w-full rounded-lg" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
 + item.card.info.imageId}/>
 </div>
                        </div>)}
            
        </div>
    )

}
export default ItemList;