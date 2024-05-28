import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import LoginOptions from "./LoginOptions";

const Header = () => {
  const [isLoggedin, setIsLoggedin] = useState(true);
  const OnlineStatus = useOnlineStatus();
  const [showForm, setShowForm] = useState(false);
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  console.log("len", cartItems);

  const handleLoginClick = () => {
    setShowForm(true);
  };

  return (
    <div className="flex justify-between shadow-lg h-[89px] items-center">
      <div className="logo-container">
        <img className="w-[8rem]" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 justify-evenly items-center">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/careers">Careers</Link>
          </li>
          <li className="px-4 font-bold inline-flex">
            <Link to="/cart">
              <div className="flex items-center relative">
                <img
                  className="max-h-8 max-w-8 object-contain"
                  src="https://purepng.com/public/uploads/medium/purepng.com-shopping-cartshoppingcarttrolleycarriagebuggysupermarkets-1421526532379mew9h.png"
                  alt="cart"
                />
                {cartItems.length > 0 && (
                  <div className="flex justify-center items-center absolute top-0 right-0 bg-gray-600 text-white text-[9px] rounded-full w-[15px] h-[15px]">
                    {cartItems.length}
                  </div>
                )}
              </div>
            </Link>
          </li>
          <li className="px-4">
            {OnlineStatus ? (
              <>
                <div className="relative">
                  <img
                    className="max-h-8 max-w-8 object-contain cursor-pointer"
                    src="https://static.vecteezy.com/system/resources/previews/008/302/462/original/eps10-grey-user-icon-or-logo-in-simple-flat-trendy-modern-style-isolated-on-white-background-free-vector.jpg"
                    alt="user"
                    onClick={handleLoginClick}
                    onBlur={() => setShowForm(false)}
                  />
                  {/* <div className="absolute left-[20px] bottom-[11px] bg-green-600 text-white text-[9px] rounded-full w-[9px] h-[9px]"></div> */}
                </div>
                {showForm && <LoginOptions setShowForm={setShowForm} />}
              </>
            ) : (
              <>
                <img
                  className="w-[32px] h-[32px] cursor-pointer"
                  src="https://static.vecteezy.com/system/resources/previews/008/302/462/original/eps10-grey-user-icon-or-logo-in-simple-flat-trendy-modern-style-isolated-on-white-background-free-vector.jpg"
                  alt="user"
                  onClick={handleLoginClick}
                  onBlur={() => setShowForm(false)}
                />
                {showForm && <LoginOptions setShowForm={setShowForm} />}
              </>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
