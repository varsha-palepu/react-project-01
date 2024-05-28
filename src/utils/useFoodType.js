import useRestaurantMenu from "../utils/useRestaurantMenu";
import { MENU_URL } from "./constants";
import { Routes, Route, useParams } from "react-router";
import { useEffect, useState } from "react";
const useFoodType=()=>{
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    console.log("info"+resInfo);
    const[isVeggie,setIsVeggie]=useState(true);
    const {isVeg}=resInfo?.cards[0]?.card?.card?.info;
    useEffect(()=>{
        if(isVeg ==1){
            setIsVeggie(true);
        }
        else{
            setIsVeggie(false);
        }
    })

}
export default useFoodType;
