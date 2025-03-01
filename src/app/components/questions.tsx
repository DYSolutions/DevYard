

export default function Questions() {
    const notes = ["Expertise & Innovation", "Customized Solutions", "Agile & Efficient Development", "Security & Reliability", "Dedicated Support"]
    return (
        <div className="h-auto w-full flex flex-row items-center justify-center p-16 gap-5">
            <div className="h-[500px] w-[500px]">
                <img src="heroDev4.png" className="leftAnimation rounded-md" />

            </div>
            <div className="h-[500px] w-[500px] container flex flex-col gap-5 items-start p-10 rightAnimation">
                <h1 className="text-4xl font-semibold text-blue-600 h1">Why Choose Us?</h1>
                <p className="mPara">At DevYard Solutions Private Limited, we are committed to
                    delivering cutting-edge technology solutions that drive business success.
                    Here’s why we are the right choice for your software development needs:
                </p>
                <div className="flex flex-col gap-1 text-neutral-500">
                    {notes.map((note, index) => (
                        <div className="flex flex-row gap-5" key={index}>
                            <img src="icons/check.svg" />
                            <div className="mPara">{note}</div>
                        </div>
                    ))}
                </div>
                <p className="mPara">Partner with DevYard Solutions
                    and experience innovation, reliability, and excellence!
                </p>
                <div className="w-full h-full flex items-end justify-end">
                    <button className="btn w-[150px]">Lets Start</button>
                </div>
            </div>
        </div>
    )
}