import { useState, useEffect } from 'react';

const SuccessMessage = () => {
  const [showSuccessMessage,setShowSuccessMessage]=useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSuccessMessage(false);
       // Call the onHide function after the timeout
    },3000); // Adjust the timeout duration as needed (in milliseconds)

    return () => clearTimeout(timer); // Clear the timeout on component unmount
  }, [showSuccessMessage]);
  return (
    <>
    {showSuccessMessage &&
    <div className="w-[200px] h-[50px] bg-green-600 flex relative bottom-[150px] m-auto rounded-md px-4">
      <h3 className="flex relative text-center m-auto text-white font-semibold">Logged In successfully!</h3>
    </div>
}
    </>
  )
};

export default SuccessMessage;