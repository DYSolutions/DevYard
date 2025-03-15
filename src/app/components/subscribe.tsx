export default function Subscribe() {
    return (
        <div className="h-auto w-full relative flex flex-col items-center justify-center p-32 gap-5 yRotateAnimation mediaGapQuestions">
            <h1 className="text-4xl font-semibold text-blue-600 h1 mediaHeroHeading">Get in a Touch</h1>
            <p className="text-neutral-500 mediaParaQuery">Subscribe to our newsletter for the latest updates, insights, and industry news.</p>
            <div className="flex flex-col gap-5 items-center justify-center">
                <input type="text" placeholder="Enter your email address" className="container h-12 w-[500px] p-4 z-10 outline-0  text-black mediaSubsribeTextInput" />
                <button className="btn w-[150px]">Subscribe</button>
            </div>
            <video
                src="click.mp4"
                className="absolute bottom-0 left-[55%] w-[200px] h-[200px] object-cover z-[-1] mediaSubscribeAnimation"
                autoPlay
                loop
                muted
            />
            <video
                src="robot.mp4"
                className="absolute right-0 w-[300px] h-[300px] object-cover z-[-1] mediaSubscribeAnimation"
                autoPlay
                loop
                muted
            />
            <video
                src="pcman.mp4"
                className="absolute left-0 w-[300px] h-[300px] object-cover z-[-1] mediaSubscribeAnimation"
                autoPlay
                loop
                muted
            />
        </div>
    )
}