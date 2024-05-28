import { render,screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom";
//instead of test you can write it, just an alias
// describe("Contact page test case",()=>{
//     beforeAll(()=>{
//         console.log("before All");
//         //you can use to run any imp function before all test cases
//     })
//     beforeEach(()=>{
//         console.log("before each");
//         //can be used to perform cleaning processes
//     })
//     afterAll(()=>{
//         console.log("after all");
//     })
//     // afterEach(()=>{
//     //     console.log("after each");
//     // })
// })
test("Should load contact us component",()=>{
    render(<Contact/>);
    const heading = screen.getByText("View Details")
    expect(heading).toBeInTheDocument();
})