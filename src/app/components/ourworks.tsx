export default function OurWorks() {
    return (
        <div className="h-auto w-full flex flex-col items-center text-black justify-center pt-16 pb-16 gap-5 bg-blue-100">
            {/* Heading */}
            <h1 className="text-5xl font-semibold text-blue-600 h1">Our Works</h1>
            <p className="text-neutral-500 font-medium">
                Explore our portfolio of successful projects and digital solutions.
            </p>

            {/* Card Container */}
            <div className="h-auto w-[75%] flex flex-row zoomInAnimation">
                {/* Card */}
                <div className="w-[250px] h-[280px] flex flex-col gap-2 items-center p-1 border relative container rounded-md cursor-pointer group">
                    {/* Image */}
                    <img
                        src="works/image.png"
                        width="250px"
                        height="100%"
                        alt="devyard"
                        className="rounded-md"
                    />

                    {/* Web Development Tag */}
                    <div className="font-normal w-full pl-2 pb-0 flex flex-row gap-2">
                        <img src="icons/web.svg" width="20px" height="100%" alt="web" />
                        <div className="font-semibold">Web Development</div>
                    </div>

                    {/* Content */}
                    <div className="font-normal p-2 pb-0 pt-0">
                        <div className="font-semibold text-yellow-500">Dev Yard</div>
                        Write a short note about our services
                    </div>

                    {/* Tags */}
                    <div className="w-full flex flex-row text-[12px] gap-2 pl-2 text-white">
                        <div className="w-auto h-auto bg-violet-950 rounded-full pl-1 pr-1">
                            Next.js
                        </div>
                        <div className="w-auto h-auto bg-violet-950 rounded-full pl-1 pr-1">
                            Tailwind
                        </div>
                    </div>

                    {/* Hover Overlay */}
                    <div className="w-[250px] h-[280px] bg-[#00000031] absolute rounded-md top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {/* Visit Button */}
                        <button className="absolute top-12 left-16 p-1 bg-white rounded-md flex flex-row items-center gap-1 text-[12px]">
                            view project
                            <img src="icons/web.svg" width="20px" alt="web" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}