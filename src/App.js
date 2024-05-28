 import React,{lazy, useContext, useEffect, useState} from 'react';
 import ReactDOM from 'react-dom/client';
 import logo from './logo.png';
 import userIcon from './userIcon.png';
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import { createBrowserRouter,Router,RouterProvider,Outlet,Route } from 'react-router-dom';
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenu from './components/RestaurantMenu.js';
import { Suspense } from 'react';
import UserContext from "./utils/UserContext.js";
import { Provider } from 'react-redux';
import appStore from './utils/appStore.js';
import Cart from './components/Cart.js';
import Footer from './components/Footer.js';
import CartContext from './utils/CartContext.js';
import Checkout from './components/Checkout.js';
import Careers from './components/Careers.js';

  const AppLayout = () =>{
    const {totalPrice, updateTotalPrice}=useContext(CartContext);
    const [userName,setUserName]=useState();
    useEffect(()=>{
      const data={
        name : 'Varsha Palepu'
      }
      setUserName(data.name);
    },[]);
    return (
      <Provider store={appStore}>
      <UserContext.Provider value={{loggedInUser : userName}}>
      <div className="app">
        <Header/>
        <CartContext.Provider value={{totalPrice,updateTotalPrice}}>
        <Outlet/>
         </CartContext.Provider>
         <Footer/>
      </div>
      </UserContext.Provider>
      {/* 
     
         {/* <Cart/> */}
         {/* </CartContext.Provider> */} 
      </Provider>
    )
  }
  const appRouter=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout />,
      children :[
        {path:"/",
        element:<Body/>
      },
        {
          path:"/about",
          element:<About />,
        },
        {
          path:"/offers",
          element:<Contact />,
        },
        {
          path:"/checkout",
          element:<Checkout />,
        },
        {
          path :"/restaurants/:resId",
          element : <RestaurantMenu/>
        },{
          path:"/cart",
          element:<Cart/>
        },{
          path:"/careers",
          element:<Careers/>
        }

      ],
      errorElement:<Error />
    },
   
  ])

  const root = ReactDOM.createRoot(document.getElementById("root"));
  //root.render(<AppLayout></AppLayout>);
  root.render(<RouterProvider router={appRouter}/>)