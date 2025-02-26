import Reordering from "./reoderAnimation"

export default function About() {
    return (
        <div className="h-[100vh] w-full flex flex-row p-32 gap-5 border-t-[1px] border-gray-700">
            <div className="w-full flex items-center justify-center container leftAnimation">

               

            </div>
            <div className="container w-full p-16 rightAnimation">
                <div className="para flex flex-col gap-5">
                    <h1 className="text-5xl font-semibold text-white">We are....</h1>
                    We ecraft digital experiences that empower businesses to thrive.
                    Our expertise in cutting-edge web technologies transforms ideas
                    into dynamic, scalable, and high-performing websites. With innovation at
                    our core, we build solutions that drive growth, enhance user engagement, and
                    deliver measurable success.
                </div>
            </div>
        </div>
    )
}