import {render,screen} from "@testing-library/react"
import RestaurantCard from "../RestaurantCard";
import MockData from "../mocks/resMock.json";
import "@testing-library/jest-dom";
it("should render res card with props data",()=>{
    render(<RestaurantCard cloudinaryImageId="56d5abe62452d827b7480c4f5515460a" name="Jay Jalaram Thali" cuisines={['Thalis','Gujarati', 'North Indian', 'Punjabi', 'Chinese', 'Biryani']} areaName="Gopipura" sla="3.7 km"
    costForTwo="₹250 for two" avgRatingString="3.9"/>)
    const name=screen.getByText("Jay Jalaram Thali");
    expect(name).toBeInTheDocument();
})