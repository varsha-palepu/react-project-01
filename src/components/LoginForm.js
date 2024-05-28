import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import SuccessMessage from './SuccessMessage';
export default function LoginForm() {
  const [open, setOpen] = useState(true)
  const[code,setCode]=useState(false);
  const cancelButtonRef = useRef(null)
  handleOTP=()=>{
    setCode(true);
  }
  handleLogin=()=>{
    setOpen(false);
  }
  return (
    <>
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 w-screen z-10  overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-center shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-center">
                    {/* <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      {/* <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" /> */}
                    {/* </div> */}
                    <div className="mt-3 sm:ml-4 sm:mt-0 sm:text-center">
                      {/* <Dialog.Title  className="font-bold text-gray-900 text-center text-lg">
                      Sign Up Form
                      
                      </Dialog.Title> */}
                      <div className="mt-2">
                        <form className="text-sm text-gray-500">
                          Please enter your mobile number to login.
                          
                          <div>
              {/* <label htmlFor="fname" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                First Name
              </label> */}
              <div className="mt-2">
                <input
                  id="number"
                  name="number"
                  type="tel"
                 placeholder='Mobile No.'
                  required
                  className="block w-[400px] px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                />
              </div>
              {code &&
              <div className="mt-2">
                <input
                  id="otp"
                  name="otp"
                  type="tel"
                 placeholder='OTP'
                  required
                  className="block w-[400px] px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                />
              </div>}
            </div>
                          
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                {!code &&
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 text-center">
  <button
    type="button"
    className="inline-flex items-center justify-center rounded-md bg-slate-900 px-2 py-1 text-sm  text-white shadow-sm sm:mx-auto sm:my-0 sm:w-auto"
    onClick={handleOTP}
  >
    Send OTP
  </button>
</div>}
{code == true &&
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 text-center">
  <button
    type="button"
    className="inline-flex items-center justify-center rounded-md bg-slate-900 px-3 py-2 text-sm  text-white shadow-sm sm:mx-auto sm:my-0 sm:w-auto"
    onClick={handleLogin}
  >
    Login
  </button>
</div>}

              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
        
      </Dialog>
     
    </Transition.Root>
    {!open && (
        <Transition.Root show={code} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto"
            onClose={() => setCode(false)}
          >
            <Dialog.Overlay className="fixed inset-0 " />
            <div className="flex items-center justify-center min-h-screen">
              <Dialog.Panel className=" p-6 ">
                <SuccessMessage/>
              </Dialog.Panel>
            </div>
          </Dialog>
        </Transition.Root>
      )}

   
      </>
      
  )
}
