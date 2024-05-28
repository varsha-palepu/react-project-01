import { Link } from "react-router-dom";

const Footer=()=>{
    return (
        <footer className="bg-black w-[100%]  fixed px-2  bottom-0   py-2">
            <div className="container mx-auto flex justify-start">
                
            <div className="text-white w-[50%]">
                <h1 className="py-2 text-white text-[15px] font-mono font-semibold">SUBSCRIBE TO OUR DROOLWORTHY NEWSLETTER</h1>
                <div className="flex flex-grow-4 gap-[3px]">
                <input
                  id="otp"
                  name="otp"
                  type="tel"
                 placeholder='Enter your email'
                  required
                  className="block w-[290px] h-[36px] px-4 py-1 text-[14px] rounded-sm shadow-sm text-black"
               
                />
                <span>
               <button
    type="button"
    className="inline-flex items-center justify-center rounded-sm bg-gray-400  px-3 py-2 text-sm font-semibold text-white shadow-sm sm:mx-auto sm:my-0 sm:w-auto"
   
  >
    Subscribe
  </button>
  </span>
  </div>
  {/* <div className="flex relative gap-[8px] py-4">
    <span className="w-[170px]"><img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"/></span>
    <span className="w-[165px] relative top-[5px]"><img src="https://static.vecteezy.com/system/resources/previews/012/871/374/non_2x/app-store-download-button-in-white-colors-download-on-the-apple-app-store-free-png.png"/></span>
  </div> */}
            </div>
            <div className="text-white w-[25%] flex justify-evenly">
                <ul className="py-2 text-[15px] font-mono">
                    <div>COMPANY</div>
                    {/* <li className="hover:text-gray-400">FAQ</li> */}
                    <li className="hover:text-gray-400"><Link to="/about">About</Link></li>
                    <li className="hover:text-gray-400"><Link to="/careers">Careers</Link></li>
                    {/* <li className="hover:text-gray-400">Blog</li> */}
                </ul>
            </div>
            <div className="text-white w-[25%] flex justify-evenly">
                <ul className="py-2 text-[15px] font-mono">
                    <div>HELP & CONTACT</div>
                    {/* <li className="hover:text-gray-400 relative flex gap-[2px] mb-[4px]">

                        <span className=" flex w-[25px]"><img src="https://t3.ftcdn.net/jpg/05/10/88/82/360_F_510888200_EentlrpDCeyf2L5FZEeSfgYaeiZ80qAU.jpg"/></span>
                        <span>Help Centre</span></li> */}
                    <li className="hover:text-gray-400 relative flex gap-[2px] mb-[4px]">
                        <span className=" flex w-[25px]"><img src="https://thumbs.dreamstime.com/b/email-icon-flat-black-round-button-vector-illustration-design-isolated-142987048.jpg"/></span>
                        <span>Email Us</span></li>
                    <li className="hover:text-gray-400 relative flex gap-[2px] mb-[4px]">
                        <span className=" flex w-[25px]"><img src="https://i.pinimg.com/originals/fc/27/fb/fc27fb81e77cc56ba4ed981d7801ceb9.png"/></span>
                        <span>040-12345678</span></li>
                </ul>
            </div>
            {/* <div className="text-white w-[15%]">
                <ul className="py-2 text-[15px] font-mono">
                    <div>MORE FROM US</div>
                    <li className="hover:text-gray-400">Bulk/Party Order</li>
                    <li className="hover:text-gray-400">Cake Order</li>
                    <li className="hover:text-gray-400">FoodClub</li>
                </ul>
                </div> */}
            </div>
        </footer>
    )
}
export default Footer;