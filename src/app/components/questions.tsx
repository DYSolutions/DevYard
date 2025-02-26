export default function Questions() {
    return (
        <div className="h-auto w-full flex flex-row items-center justify-center p-16 gap-5 border-t-[1px] border-gray-700">
            <div className="h-[500px] w-[500px] container leftAnimation">


            </div>
            <div className="h-[500px] w-[500px] container flex flex-col gap-5 items-start p-10 rightAnimation">
                <h1 className="text-4xl font-semibold text-white">Why Choose Us?</h1>
                <p className="para">Let's work together to bring your vision to life.
                    Contact us today to get started.
                    Let's work together to bring your vision to life. Contact us today to get started.
                    Let's work together to bring your vision to life. Contact us today to get started.
                </p>
                <div className="flex flex-col gap-1 text-neutral-500">
                    <div className="flex flex-row gap-5">
                        <img src="icons/check.svg" />
                        <div className="para">write some about</div>
                    </div>

                    <div className="flex flex-row gap-5">
                        <img src="icons/check.svg" />
                        <div className="para">write some about</div>
                    </div>

                    <div className="flex flex-row gap-5">
                        <img src="icons/check.svg" />
                        <div className="para">write some about</div>
                    </div>

                    <div className="flex flex-row gap-5">
                        <img src="icons/check.svg" />
                        <div className="para">write some about</div>
                    </div>
                </div>
                <div className="w-full h-full flex items-end justify-end">
                    <button className="btn w-[150px]">Lets Start</button>
                </div>
            </div>
        </div>
    )
}