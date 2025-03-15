import Reordering from "./reoderAnimation"
import "./animation.css"

export default function Hero() {
    return (
        <div
            className="flex flex-row w-full h-[100vh] bg-cover bg-center z-[3]"
        // style={{ backgroundImage: "url('/main.svg')" }}
        >
            <div className="w-full flex flex-col justify-center items-start p-16 gap-7 heroLeftAnimation">
                <h1 className="text-6xl text-blue-600 heroHeading"><span className="text-black">We are a </span>visionary development firm...</h1>
                <p className="text-neutral-500 text-justify font-medium">
                    In today’s digital world, a powerful online presence is essential for success.
                    At Dev Yard, we specialize in designing and developing high-performance,
                    user-friendly, and scalable websites tailored to your business needs.
                </p>
                <div className="flex flex-row items-center align-middle justify-center w-full">
                    <input type="text" placeholder="Enter your email address" className="container h-12 w-[500px] p-4 z-10 outline-0  text-black" />
                    <button className="btn w-[150px] h-12">Get a Touch</button>
                </div>
            </div>
            <div className="w-full flex justify-center items-center heroRightAnimation mt-10">
                {/* <img src="heroDev3.png" height="100%" width="90%" alt="Main Icon" className="heroRightAnimation"/> */}
                <Reordering />
            </div>
        </div>
    );
}
