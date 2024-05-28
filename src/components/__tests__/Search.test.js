import {fireEvent,render,screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import Body from "../Body";
import MOCK_DATA from "../mocks/MockResListData.json";
import { BrowserRouter } from "react-router-dom";
import { hasUncaughtExceptionCaptureCallback } from "process";
global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json : ()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})
it("should render body component",async()=>{
    await act (async ()=>render(
    <BrowserRouter><Body/></BrowserRouter>)); 
    const searchBtn = screen.getByRole("button",{name:"Search"});
    const searchInput=screen.getByTestId("searchInput");
    fireEvent.change(searchInput,{target:{value:"burger"}});
    fireEvent.click(searchBtn);
    //screen should load 1 card
    const cards= screen.getAllByTestId("resCard");
    expect(cards.length).toBe(1);
})