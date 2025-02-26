export default function Subscribe(){
    return(
        <div className="h-auto w-full flex flex-col items-center justify-center p-32 gap-5 border-t-[1px] border-gray-700">
            <h1 className="text-4xl font-semibold text-white">Get in a Touch</h1>
            <div className="flex flex-col gap-5 items-center justify-center">
           <input type="text" placeholder="Enter your email address" className="container h-12 w-[500px] p-4 z-10 outline-0  text-white"/>
           <button className="btn w-[150px]">Subscribe</button>
           </div>
           <p className="text-neutral-500 font-medium">Subscribe to our newsletter for the latest updates, insights, and industry news.</p>
        </div>
    )
}