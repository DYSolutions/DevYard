import Subscribe from "./../components/subscribe"

export default function About() {
    return (
        <div className="text-white w-full h-auto">
            <div className="w-full flex flex-col p-32 gap-8">
                <h1 className="text-5xl font-semibold">About Us</h1>
                <p className="para heroLeftAnimation">In today’s digital world, a powerful online presence
                    is essential for success. At Dev Yard, we specialize in designing and
                    developing high-performance, user-friendly, and scalable websites tailored to
                    your business needs.In today’s digital world, a powerful online presence
                    is essential for success. At Dev Yard, we specialize in designing and
                    developing high-performance, user-friendly, and scalable websites tailored to
                    your business needs.</p>
                <div className="flex flex-row w-full justify-center items-center gap-5 heroRightAnimation">
                    <div className="container h-[300px] w-[300px]"></div>
                    <div className="container h-[300px] w-[300px]"></div>
                    <div className="container h-[300px] w-[300px]"></div>
                    <div className="container h-[300px] w-[300px]"></div>
                </div>
                <p className="para leftAnimation">In today’s digital world, a powerful online presence
                    is essential for success. At Dev Yard, we specialize in designing and
                    developing high-performance, user-friendly, and scalable websites tailored to
                    your business needs.In today’s digital world, a powerful online presence
                    is essential for success. At Dev Yard, we specialize in designing and
                    developing high-performance, user-friendly, and scalable websites tailored to
                    your business needs.</p>
                <div className="flex flex-row w-full justify-center items-center gap-5">
                    <div className="container flex flex-col gap-5 h-auto w-[600px] p-5 leftAnimation">
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
                    <div className="container flex flex-col gap-5 h-auto w-[600px] p-5 rightAnimation">
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
                <p className="para leftAnimation">In today’s digital world, a powerful online presence
                    is essential for success. At Dev Yard, we specialize in designing and
                    developing high-performance, user-friendly, and scalable websites tailored to
                    your business needs.</p>
                <div className="container rightAnimation h-[300px] w-full"></div>
                <p className="para leftAnimation">In today’s digital world, a powerful online presence
                    is essential for success. At Dev Yard, we specialize in designing and
                    developing high-performance, user-friendly, and scalable websites tailored to
                    your business needs.</p>
            </div>
            <Subscribe />
        </div>
    )
}