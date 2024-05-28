import {fireEvent,render,screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantMenu from "../RestaurantMenu";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/MockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
global.fetch=jest.fn(()=>
     Promise.resolve({
        json : ()=>
             Promise.resolve(MOCK_DATA)
        
    })
)
it("should load res menu component",async()=>{
await act(async ()=> render(
<BrowserRouter>
<Provider store={appStore}>
    <Header/>
<RestaurantMenu/>
</Provider>
</BrowserRouter>));
const accordianHeader = screen.getByText("Recommended (20)");
fireEvent.click(accordianHeader);
expect(screen.getAllByTestId("foodItems").length).toBe(20);
const AddBtn=screen.getAllByRole("button",{name : "ADD +"})
fireEvent.click(AddBtn[0]);
expect(screen.getByRole("button",{name :"1"})).toBeInTheDocument();

})