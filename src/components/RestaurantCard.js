//import { IMG_CDN_URL } from "../constants";
import { CDN_URL } from "../utils/constants";

// Restaurant card component: Image, name, cuisine
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  sla,
  costForTwo,
  avgRatingString,
}) => {
  return (
    <div data-testid="resCard" className="m-4 p-4 w-[300px] h-[360px] rounded-lg bg-gray-50 hover:bg-gray-100 justify-between">
      <img className="rounded-md w-[150px] h-[150px] m-auto" src={CDN_URL + cloudinaryImageId}
 />
      <h3 className="font-bold py-2 text-md text-center">{name}</h3>
      <h5 className="py-1 text-[14px] text-gray-500 text-center">{cuisines.join(", ")}</h5>
      <h5 className="py-1 text-[14px] text-gray-500 font-semibold text-center">{areaName}</h5>
    <div className="flex justify-center">
        <div className="py-1 flex">
          <img className="w-[20px]" src="https://cdn2.iconfinder.com/data/icons/default-1/100/.svg-4-512.png"/>
          <span className="text-[14px]"> {avgRatingString} •     </span>
          <div className="px-2 text-[14px]">{sla?.lastMileTravelString ?? '2.0km'}</div>
          </div>
          </div>
         {/* <span className="py-1">{sla?.lastMileTravelString ?? '2.0 km'}</span>  */}
        <h4 className="font-semibold text-[14px] text-center">{costForTwo ?? '₹200 for two'}</h4> 
    </div>
  );
};
export const withPromotedLabel =(RestaurantCard)=>{
  return (props)=>{
    return(
      <div>
      <label className="absolute bg-lime-700 text-white font-semibold text-[13px] m-1 p-1 rounded-md">VEG</label>
      <RestaurantCard {... props}/>
      </div>
    );
  };
}

export default RestaurantCard;