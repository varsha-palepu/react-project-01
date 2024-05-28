import { useEffect,useState } from "react";
import { Routes, Route, useParams } from "react-router";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useOnlineStatus from "../utils/useOnlineStatus";
import ResCategory from "./ResCategory";
//import useFoodType from "../utils/useFoodType";
const RestaurantMenu=()=>{
    const { resId } = useParams();
    console.log(resId);
    const resInfo = useRestaurantMenu(resId);
    //const isVeggie=useFoodType();
    const[showIndex,setShowIndex]=useState(null);
    if(resInfo === null) return <Shimmer/>;
    const {name,cuisines,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info;
    const itemCards=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"] ==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" )
    console.log("category",categories);
    return(
        <div className="text-center">
            {/* <h1>{isVeg ? <img src="https://i.pinimg.com/736x/e4/1f/f3/e41ff3b10a26b097602560180fb91a62.jpg"/>:<img src="https://www.kindpng.com/picc/m/151-1515155_veg-icon-png-non-veg-symbol-png-transparent.png"/>}</h1> */}
           
            <h1 className="font-bold py-2 text-lg">{name}</h1>
            <h2 className="py-1 text-md  text-gray-400">{cuisines.join(",")} {costForTwoMessage}</h2>
            {/* <ul className="py-3 px-3 divide-y divide-solid divide-black-900">
                {itemCards && itemCards.map((item)=>(
                    <div className="w-[600px] h-[200px] font-semibold" key={item.card.info.id}>
                         {item.card.info.name} 
                         <div className="float-right"> <img className="w-36  rounded-md" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"
 + item.card.info.imageId} />
 <div className="flex items-center"><label className="absolute bg-white border-black text-black m-1 p-1 rounded-lg">ADD +</label></div></div>
                         <div className="py-3 w-[600px] text-gray-400">{item.card.info.description}</div>
                         
                    </div>
                     
))}
                
            </ul> */}
            <div>
            {categories.map((category,index)=>(
                <ResCategory key={category?.card?.card.title} data={category?.card?.card} showItems={index ===showIndex? true:false}
                setShowIndex={()=> setShowIndex(index)}/>
            ))}
            </div>



        </div>
        
    )
}
export default RestaurantMenu;