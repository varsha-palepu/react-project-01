const Careers=()=>{
    return(
            <div className="flex-wrap bg-cover bg-center text-white m-auto rounded-md w-[1500px] min-h-40 bg-slate-900 py-10">
        <h1 className="text-[45px] text-center font-thin tracking-wide">Featured <span className="font-semibold tracking-wide">Jobs</span></h1>
        <div className="py-2 grid grid-cols-3 gap-3 justify-around">
<div className="flex justify-start border-r-2 h-16 px-10">
    <div className="text-[22px] font-thin hover:bg-gray-600 p-4 rounded w-[75%] h-full flex flex-col justify-center items-start">Sales Manager I
    <div className="text-[15px] font-thin">New Delhi</div>
    </div>
</div>
<div className="flex justify-start border-r-2 h-16">
<div className="text-[22px]  font-thin hover:bg-gray-600 p-4 rounded w-[75%] h-full flex flex-col justify-center items-start">Account Retail - Manager
    <div className="text-[15px] font-thin">Bengaluru</div>
    </div>
</div>
<div className="flex justify-start">
<div className="text-[22px]  font-thin hover:bg-gray-600 p-4 rounded w-[75%] h-full flex flex-col justify-center items-start">Regional Gourmet Manager
    <div className="text-[15px] font-thin">Mumbai</div>
    </div>
</div>
        </div>
        <div className="py-10 grid grid-cols-3 gap-3">
<div className="flex justify-start border-r-2 h-16 px-10">
    <div className="text-[22px]  font-thin hover:bg-gray-600 p-4 rounded w-[75%] h-full flex flex-col justify-center items-start">Senior Account Manager
    <div className="text-[15px] font-thin">Gurgaon</div>
    </div>
</div>
<div className="flex justify-start border-r-2 h-16">
<div className="text-[22px]  font-thin hover:bg-gray-600 p-4 rounded w-[75%] h-full flex flex-col justify-center items-start">Software Developer - II
    <div className="text-[15px] font-thin">Chennai</div>
    </div>
</div>
<div className="flex justify-start">
<div className="text-[22px]  font-thin hover:bg-gray-600 p-4 rounded w-[75%] h-full flex flex-col justify-center items-start">Product Manager
    <div className="text-[15px] font-thin">Hyderabad</div>
    </div>
</div>
        </div>
    </div>
    )
}
export default Careers;