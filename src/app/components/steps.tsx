export default function Steps(){
    return(
        <div className="h-auto w-full flex flex-col items-center justify-center p-32 gap-5 border-t-[1px] border-gray-700">
        <h1 className="text-5xl font-semibold text-white">How we work</h1>
       <p className="text-neutral-500 font-medium">subscibe to somting write this para</p>
       <div className="h-[200px] w-full flex flex-row items-center justify-center gap-0 leftAnimation">
        <div className="roundContainer h-[200px] w-[200px]"></div>
        <div className="h-[80px] w-[80px] rounded-full"><img src="icons/arrow.svg" alt="arrow" height="50px" width="100%"/></div>
        <div className="roundContainer h-[200px] w-[200px]"></div>
        <div className="h-[80px] w-[80px] rounded-full"><img src="icons/arrow.svg" alt="arrow" height="50px" width="100%"/></div>
        <div className="roundContainer h-[200px] w-[200px]"></div>
        <div className="h-[80px] w-[80px] rounded-full"><img src="icons/arrow.svg" alt="arrow" height="50px" width="100%"/></div>
        <div className="roundContainer h-[200px] w-[200px]"></div>
       </div>
    </div>
    )
}