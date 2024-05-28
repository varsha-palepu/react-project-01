import { useState } from "react";
const Contact =() =>{
    const [showDetails,setShowDetails]=useState(false);
    return(
        <div className="py-4">
        <div className="bg-cover bg-center text-white m-auto rounded-md w-[1500px] h-[150px] bg-slate-800 py-10">
        <h1 className="text-[45px] font-bold text-center">FoodMenu Offers</h1>
    </div>
    <div className="px-10 py-10 pb-52 flex justify-center items-center">
    <div className={'w-[400px] bg-white hover:bg-gray-100 shadow-lg ${showDetails ? "h-[200px]" : "h-[100px]" } '}>
        <h1 className="px-4 py-4 text-[14px] font-semibold">Buy Large Pass and get instant cashback of Rs 1000/-</h1>
        <h1 className="text-orange-700 text-center" onMouseOver={()=>setShowDetails(true)} onMouseOut={()=>setShowDetails(false)}>View Details</h1>
        {showDetails && <div>
            <ul className="px-4 py-4 list-disc">
                <li className="px-4 py-4 text-[14px]">You can buy a pass. The amount paid by you will be credited as Foodmoney.</li>
                <li className="px-4 py-4 text-[14px]">Pay Rs 999 & get Rs 1129 as FoodMoney. Savings upto 13%. Cashback expires in 3 month</li>
                <li className="px-4 py-4 text-[14px]">Pay Rs 1999 & get Rs 2299 as FoodMoney. Savings upto 15%. Cashback expires in 3 months</li>
            </ul>
        </div>}
    </div>
    </div>
    </div>
    )
}
export default Contact;
