export default function Hero() {
    return (
        <div
            className="flex flex-row w-full h-[100vh] bg-cover bg-center z-[2]"
        // style={{ backgroundImage: "url('/main.svg')" }}
        >
            <div className="w-full flex flex-col justify-center items-start p-16 gap-7">
                <h1 className="text-5xl text-white font-bold">We are a visionary web development firm...</h1>
                <p className="text-neutral-500 text-justify font-medium">
                    In today’s digital world, a powerful online presence is essential for success.
                    At Dev Yard, we specialize in designing and developing high-performance,
                    user-friendly, and scalable websites tailored to your business needs.
                </p>
                <div className="flex align-middle w-full">
                    <button className="btn">Lets Start</button>
                </div>
            </div>
            <div className="w-full flex justify-center items-center">
                <img src="/mainIconsdark.svg" height="80%" width="80%" alt="Main Icon" />
            </div>
        </div>
    );
}
