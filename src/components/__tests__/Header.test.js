import {render,screen} from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
it("Should load header with home",()=>{
render(
    <BrowserRouter>
    <Provider store={appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>
);
const home=screen.getByText("Home");
expect(home).toBeInTheDocument();
})