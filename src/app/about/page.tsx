import Subscribe from "./../components/subscribe"

export default function About() {
    return (
        <>
            <div className="text-blue-600 w-full h-auto pt-32 pl-60 pr-60 relative">
                <h1 className="text-6xl font-semibold h1 fadeAnimation">About Us</h1>
                <video
                    src="speacker.mp4"
                    className="absolute left-0 top-[380px] w-[40vh] h-[40vh] object-cover z-[-1] fadeAnimation"
                    autoPlay
                    loop
                    muted
                />
                <video
                    src="vission.mp4"
                    className="absolute left-[50px] top-[1100px] w-[200px] h-[200px] object-cover z-[-1] zoomInAnimation"
                    autoPlay
                    loop
                    muted
                />
                <video
                    src="robot.mp4"
                    className="absolute right-0 top-[700px] w-[250px] h-[250px] object-cover z-[-1] rightAnimation"
                    autoPlay
                    loop
                    muted
                />
                <div className="w-full flex flex-col gap-5">
                    <div className="flex flex-row items-center justify-center gap-8">
                        <p className="para heroLeftAnimation">At DevYard Solutions, we are committed to transforming
                            ideas into innovative digital solutions. As a leading software development
                            company, we specialize in mobile app development, web development, SEO, digital
                            marketing, e-commerce solutions, and UI/UX design. Our mission is to empower
                            businesses with cutting-edge technology, ensuring seamless user experiences and
                            scalable solutions.</p>
                        <img src="aboutusImage01.png" width='400px' height='auto' alt="about_us" className="heroRightAnimation" />
                    </div>

                    <div className="flex flex-row items-center justify-center gap-8 mb-8">
                        <img src="aboutusImage02.png" width='400px' height='auto' alt="about_us" className="leftAnimation" />
                        <p className="para rightAnimation">With a team of passionate developers, designers, and strategists,
                            we bring expertise, creativity, and efficiency to every project. Whether you're a
                            startup or an enterprise, we tailor our services to meet your unique needs, driving
                            digital success and business growth.
                            At DevYard Solutions, we don’t just build software—we create experiences that make
                            an impact. Let’s innovate together!</p>
                    </div>

                    <div className="flex flex-row w-full justify-center items-center gap-5">
                        <div className="container flex flex-col gap-5 h-auto w-[600px] p-5 zoomInAnimation">
                            <div className="flex flex-row items-center justify-start gap-5 h-[60px]">
                                <img src="icons/web.svg" height="auto" width="50px" alt="mobile-app-development" />
                                <h3 className="text-2xl flex flex-col font-semibold">
                                    <div className="">Vision</div>
                                </h3>
                            </div>
                            <p className="para">"In today’s digital world, a powerful online presence
                                is essential for success. At Dev Yard, we specialize in designing and
                                developing high-performance, user-friendly, and scalable websites tailored to
                                your business needs."</p>
                        </div>
                        <div className="container flex flex-col gap-5 h-auto w-[600px] p-5 zoomInAnimation">
                            <div className="flex flex-row items-center justify-start gap-5 h-[60px]">
                                <img src="icons/seo.svg" height="auto" width="50px" alt="mobile-app-development" />
                                <h3 className="text-2xl flex flex-col font-semibold">
                                    <div className="">Mission</div>
                                </h3>
                            </div>
                            <p className="para ">"In today’s digital world, a powerful online presence
                                is essential for success. At Dev Yard, we specialize in designing and
                                developing high-performance, user-friendly, and scalable websites tailored to
                                your business needs."</p>
                        </div>
                    </div>

                    <div className="flex flex-col p-10 gap-5 items-center justify-center bg-blue-50 yRotateAnimation">
                        <h1 className="text-5xl font-semibold h1">Latest Works</h1>
                        <p className="mPara">Creativity with technical expertise to create apps that stand out in a crowded marketplace.</p>
                        <div className="flex flex-row w-full justify-center items-center gap-5 text-black">
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
                    <div className="flex flex-row gap-8 items-center justify-center w-full relative">
                        <video
                            src="contact2.mp4"
                            className="w-[50vh] h-[50vh] object-cover z-[-1] flipAnimation"
                            autoPlay
                            loop
                            muted
                        />
                        <div className="relative flex flex-col items-center h-[40vh] flipAnimation">
                            <div className="absolute">
                                <img src="pc.png" height="100%" width="400px" alt="pc" className="" />
                            </div>
                            <div className="relative flex flex-col mt-5 p-5 gap-1 w-[300px] justify-center items-center">
                                <div className="text-blue-600 text-xl h1">Ready to Work Together?</div>
                                <div className="mPara">Let's create something amazing together.
                                    Get in touch with our team today.</div>
                                <button className="btn">Contact Us</button>
                            </div>
                        </div>
                    </div>

                    <div className="container h-[300px] w-full yRotateAnimation"></div>
                </div>
            </div>

            <div className="text-[14px]">
                <Subscribe />
            </div>
        </>
    )
}