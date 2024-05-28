import { useState, useEffect } from 'react';

const PaymentSuccessful = () => {
  const [showSuccessMessage,setShowSuccessMessage]=useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSuccessMessage(false);
       // Call the onHide function after the timeout
    },2000); // Adjust the timeout duration as needed (in milliseconds)

    return () => clearTimeout(timer); // Clear the timeout on component unmount
  }, [showSuccessMessage]);
  return (
    <>
    {showSuccessMessage &&
    <div className="w-[200px] h-[50px] bg-green-600 flex justify-between m-auto rounded-md px-4">
      <h3 className="flex relative text-center m-auto text-white font-semibold">Payment successful!</h3>
    </div>
}
    </>
  )
};

export default PaymentSuccessful;