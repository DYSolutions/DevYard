import Reordering from "./reoderAnimation";

export default function About() {
    return (
        <div className="h-auto w-full p-32 gap-5 relative">
            {/* Background Image */}
            <div className="absolute top-0 left-0 w-full h-full z-[-1] rightAnimation">
                <img src="aboutBg.png" alt="heroBackground" className="h-[100vh] w-[100%]" />
            </div>

            <div className="relative flex flex-row">
                <div className="w-[70%] p-16 leftAnimation relative">
                    {/* Video Background */}
                    {[4, 10, 16, 22, 28].map((num, index) => (
                        <video
                            key={index}
                            src="aboutBg.mp4"
                            className="absolute bottom-0 w-[100px] h-[100px] object-cover z-[-1]"
                            style={{ left: `${num}rem` }}
                            autoPlay
                            loop
                            muted
                        />
                    ))}
                    {/* Content */}
                    <div className="para flex flex-col gap-5 relative z-[1]">
                        <h1 className="text-5xl font-semibold text-blue-600 h1">We are....</h1>
                        DevYard Solutions Private Limited is a cutting-edge software development
                        company dedicated to delivering innovative and scalable solutions.
                        Our expertise spans web and mobile app development, AI-driven technologies,
                        cloud solutions, and enterprise software. We focus on creating high-quality,
                        customized software that drives business growth and enhances user experiences.
                        At DevYard Solutions, we combine technology and creativity to build powerful,
                        future-ready applications.
                    </div>
                </div>
            </div>
        </div>
    );
}
