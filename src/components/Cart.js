
import { UseSelector, useDispatch, useSelector } from "react-redux";
import CartList from "./CartList";
import { clearCart } from "../utils/cartSlice";
import { UseDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import CartContext from "../utils/CartContext";
import { useContext } from "react";
const Cart=()=>{
    const { totalPrice, updateTotalPrice } = useContext(CartContext);
    const [completeCheckOut,setCompleteCheckout]= useState(false);
const [Price,setTotalPrice]=useState(0);
    //  const[prevTotal,setPrevTotal]=useState(0);
    const dispatch=useDispatch();
    const handleClearCart=(cartItems)=>{
        dispatch(clearCart(cartItems));
    }
    handleCheckOut=()=>{
        setCompleteCheckout(true);
    }
    const cartItems=useSelector((store)=>store.cart.items);
    const handleUpdateTotalPrice = () => {
        let newPrice = 0;
        cartItems.forEach((item) => {
            newPrice += item.card.info.price / 100;
            console.log("total",newPrice);
           
        });
        updateTotalPrice(newPrice);
        setTotalPrice(newPrice);
        
      };
      useEffect(()=>{
        handleUpdateTotalPrice();
      },[cartItems]);

    // useEffect(() => {
    //  handleUpdateTotalPrice();
    // }, [cartItems]);
    // useEffect(()=>{
    //     console.log("total",totalPrice);
    // },[totalPrice]);
    const[checkout,setCheckout]=useState(false);
    const [saveAdd,setSaveAdd]=useState(false);
    const[payment,setPayment]=useState(false);
    const[payment1,setPayment1]=useState(false);
    const[payment2,setPayment2]=useState(false);
    const[payment3,setPayment3]=useState(false);
    const[verifyGpay,setVerifyGpay]=useState(false);
    const[verifyPhonepay,setVerifyPhonepay]=useState(false);
    const[verifyPaytm,setVerifyPaytm]=useState(false);
    const[cart,setCart]=useState(true);
    const [navigate,setNavigate]=useState(false);
    const [hideAdd,setHideAdd]=useState(true);
    handleCheckOut=()=>{
        setCheckout(true);
    }
    const handleSave=()=>{
        setSaveAdd(true);
        setHideAdd(false);
    }
    handleCOD=()=>{
        setPayment(true);
        setPayment1(false);
        setPayment2(false);
        setPayment3(false);
        setVerifyPaytm(false);
        setVerifyPhonepay(false);
        setVerifyGpay(false);
    }
    handleGpay=()=>{
      setPayment1(true);
      setPayment2(false);
      setPayment3(false);
      setVerifyPaytm(false);
      setVerifyPhonepay(false);
      setPayment(false);
    
    }
    handlePhonepay=()=>{
      setPayment2(true);
      setPayment1(false);
      setPayment3(false);
      setVerifyGpay(false);
      setVerifyPaytm(false);
      setPayment(false);
    }
    handlePaytm=()=>{
      setPayment3(true);
      setPayment1(false);
      setPayment2(false);
      setVerifyGpay(false);
      setVerifyPhonepay(false);
      setPayment(false);
    }
    handleVerification1=()=>{
      setVerifyGpay(true);
      setVerifyPaytm(false);
      setVerifyPhonepay(false);
      setPayment(true);
    }
    handleVerification2=()=>{
      setVerifyPhonepay(true);
      setVerifyGpay(false);
      setVerifyPaytm(false);
      setPayment(true);
    }
    handleVerification3=()=>{
      setVerifyPaytm(true);
      setVerifyGpay(false);
      setVerifyPhonepay(false);
      setPayment(true);
    }
    handlePayment=(cartItems)=>{
        setNavigate(true);
        dispatch(clearCart(cartItems));
    }
    
    return (
        <CartContext.Provider value={{Price}}>
            {!checkout && cart &&(
    <div className="text-center m-4 p-4">
    <div className="w-6/12 m-auto pb-60">
            {cartItems.length === 0 && <><img className="flex m-auto" src="https://mekisan.in/static/assets/images/parts/empty-cart.png"/>
            <div className="font-semibold text-[25px]">Oops! No items in cart</div></>}<CartList items={cartItems}/>
     
            {cartItems.length!=0 && <div>
                <button className="p-2 m-2 bg-black text-white font-thin rounded-lg flex relative float-right" onClick={()=>handleClearCart(cartItems)}>Clear Cart</button>
                <button className="p-2 m-2 bg-black text-white font-thin rounded-lg  flex relative float-right" onClick={handleCheckOut}>Proceed to Checkout
                    </button></div>}
                    </div>
                    </div>)}
                    {/* <div>{totalPrice}</div> */}
{checkout && 
<div className="">
                    <div className="py-4 ">
      <div className="container flex flex-col py-4 px-4 m-auto w-6/12 shadow-lg justify-between">
        {hideAdd && <div>
        <div className="flex relative py-2 items-center">
          <img className="max-w-8 max-h-8" src="https://www.iconpacks.net/icons/2/free-location-icon-2952-thumb.png"/>
          <div className="font-thin text-[18px] text-gray-700 px-2">Delivery Address</div>
        </div>
        <div className="py-4 px-4">
        <input
            id="add1"
            name="add1"
            type="text"
            placeholder='Door number,Flat number,Building name'
            required
            className="flex relative w-full h-[36px] px-4 py-1 mb-2 border border-gray-300 focus:border-gray-400 focus:outline-none text-[14px] rounded-sm shadow-sm text-black"
          />
          <input
            id="add2"
            name="add2"
            type="text"
            placeholder='Locality'
            required
            className="flex relative w-full h-[36px] px-4 py-1 mb-2 text-[14px] border border-gray-300 focus:border-gray-400 focus:outline-none rounded-sm shadow-sm text-black"
          />
          <input
            id="email"
            name="email"
            type="email"
            placeholder='Email Address'
            required
            className="flex relative w-full h-[36px] px-4 py-1 text-[14px] border border-gray-300 focus:border-gray-400 focus:outline-none rounded-sm shadow-sm text-black"
          />
        </div>
        <div className="py-2">
            <button className="p-3  bg-black text-[13px] font-thin text-white rounded-[4.5rem] flex  m-auto justify-between " onClick={handleSave}>SAVE AND CONTINUE</button>
        </div>
        </div>}
     {saveAdd && <>
     <div className="flex flex-col ">
        <div className="flex py-2 items-center ">
  <img className="w-[60px] h-[60px]" src="https://static.vecteezy.com/system/resources/previews/024/758/030/original/simple-payment-method-icon-the-icon-can-be-used-for-websites-print-templates-presentation-templates-illustrations-etc-free-vector.jpg"/>
  <div className="font-semibold text-[18px] text-gray-700 px-2">Payment Method</div>
 
</div>
<div className="flex w-[100%]  m-auto justify-between">
  <div className="w-[50%] flex-wrap">
    <div className="flex  py-2 px-2 ">
      <input type="radio" name="paymentMethod" onChange={handleCOD}/>
      <label className="font-semibold">Cash On Delivery (COD)</label>
    </div>
    <div className="flex  py-2 px-2 ">
      <input type="radio" name="paymentMethod" onChange={handleGpay}/>
      <label><img className="w-[50px] h-[50px] "src="https://animationvisarts.com/wp-content/uploads/2023/11/Frame-43-1.png"/></label>
    </div>
    <div className="flex  py-2 px-2 ">
      <input type="radio" name="paymentMethod" onChange={handlePhonepay}/>
      <label><img className="w-[50px] h-[50px] "src="https://i.pinimg.com/originals/db/42/53/db4253052cfc0f80ac281486c19f9d57.png"/></label>
    </div>
    <div className="flex  py-2 px-2 ">
      <input type="radio" name="paymentMethod" onChange={handlePaytm}/>
      <label><img className="w-[50px] h-[50px]" src="https://cdn.iconscout.com/icon/free/png-256/free-paytm-226448.png?f=webp"/></label>
    </div>
  </div>
  <div className="w-[50%] flex-wrap">
    <div className="flex flex-row w-full gap-2">
  {payment1 && <>
    <div className="flex flex-row  w-full gap-2"> <input
            id="add2"
            name="add2"
            type="text"
            placeholder='Please enter your UPI ID'
            required
            className="flex relative w-[75%] h-[36px] px-4 py-1 mb-2 text-[14px] border border-gray-300 focus:border-gray-400 focus:outline-none rounded-sm shadow-sm text-black"
          /> 
          
            <button className="bg-black text-white rounded-md px-1 py-1 w-[80px] h-[36px]" onClick={handleVerification1}>Verify</button>
            </div>
            </>}
          </div>
          {verifyGpay && 
          <>
          <div className="flex relative gap-[4px]">
          <img className="w-[25px] h-[25px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjPNbBpZeXnXfTuA6AWek-Kj8NYEVbYdG6ayi5bIWarDuryXDrILdKMTd597quLD0PBKM&usqp=CAU"/>
          <span className="text-green-600 font-semibold flex items-center justify-center">Verified!</span>
          </div>
          </>}
          <div className="flex relative gap-[4px]">
          {payment2 && <><input
            id="add2"
            name="add2"
            type="text"
            placeholder='Please enter your UPI ID'
            required
            className="flex relative w-[75%] h-[36px] px-4 py-1 mb-2 text-[14px] border border-gray-300 focus:border-gray-400 focus:outline-none rounded-sm shadow-sm text-black"
          /> 
          <span className="">
          <button className="bg-black text-white rounded-md px-1 py-1 w-[80px] h-[36px]" onClick={handleVerification2}>Verify</button>
          </span>
          </>}
          </div>
          {verifyPhonepay &&
          <>
          <div className="flex relative gap-[4px]">
          <img className="w-[25px] h-[25px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjPNbBpZeXnXfTuA6AWek-Kj8NYEVbYdG6ayi5bIWarDuryXDrILdKMTd597quLD0PBKM&usqp=CAU"/>
          <span className="text-green-600 font-semibold flex items-center justify-center">Verified!</span>
          </div>
          </>}
          <div className="flex relative gap-[4px]">
          {payment3 && <><input
            id="add2"
            name="add2"
            type="text"
            placeholder='Please enter your UPI ID'
            required
            className="flex relative w-[75%] h-[36px] px-4 py-1 mb-2 text-[14px] border border-gray-300 focus:border-gray-400 focus:outline-none rounded-sm shadow-sm text-black"
          /> 
           <span className="">
          <button className="bg-black text-white rounded-md px-1 py-1 w-[80px] h-[36px]" onClick={handleVerification3}>Verify</button>
          </span>
          </>}
          {verifyPaytm &&
          <>
          <div className="flex relative gap-[4px]">
          <img className="w-[25px] h-[25px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjPNbBpZeXnXfTuA6AWek-Kj8NYEVbYdG6ayi5bIWarDuryXDrILdKMTd597quLD0PBKM&usqp=CAU"/>
          <span className="text-green-600 font-semibold flex items-center justify-center">Verified!</span>
          </div>
          </>}
          </div>
          
  </div>
  
</div>
{payment && (
<div className="flex justify-end">
          <button className="text-white bg-green-600 font-bold shadow-md rounded-md px-1 py-1 w-[110px] h-[40px]" onClick={handlePayment}><Link to="/checkout">Pay {Price}</Link></button>
          </div>
          )}
         



         </div>
  </>
  
  }

      </div>
      </div>
      </div>}
    
   
    </CartContext.Provider>
    );
}
export default Cart;