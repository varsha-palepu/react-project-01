import { useState} from "react"
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import PaymentSuccessful from "./PaymentSuccessful";
import { Link } from "react-router-dom";
const Checkout=()=>{
    const[success,setSuccess]=useState(true);
    const[code,setCode]=useState(true);
    const[SuccessEnd,setSuccessEnd]=useState(true);
    return(
        <div>
        {success && (
            <Transition.Root show={code} as={Fragment}>
              <Dialog
                as="div"
                className="fixed inset-0 z-10 overflow-y-auto"
                onClose={() => setCode(false)}
              >
                <Dialog.Overlay className="fixed inset-0 " />
                <div className="flex items-center justify-center min-h-screen">
                  <Dialog.Panel className=" p-6 ">
                    <PaymentSuccessful/>
                  </Dialog.Panel>
                </div>
              </Dialog>
            </Transition.Root>
          )}
            {SuccessEnd &&
             <div class="flex flex-col items-center justify-center min-h-96">
      <div class="flex justify-center items-center font-bold text-[20px] px-2 py-2">
        <div class="px-2 py-2"> Thankyou for your order! The delivery person is on his way!</div>
        </div>
        <div class="flex justify-center items-center font-bold text-[20px] px-2 py-2">
        <div class="px-2 py-2"><Link to="/"> Wanna order more? <button className="p-2 m-2 bg-black text-white rounded-lg inline-flex font-[15px]">Click here</button> to get back to home and get more items from other restaurants!</Link></div>
        </div>
        </div>}
          </div>
    )
}
export default Checkout;