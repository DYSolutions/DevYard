export default function Steps() {

    const steps = [
        {
            path: "icons/discuss.svg",
            name: "Discovery",
            note: "We start by understanding your needs, goals, and vision for the project."
        },
        {
            path: "icons/plan.svg",
            name: "Planning",
            note: "Our team creates a detailed roadmap and strategy for your project."
        },
        {
            path: "icons/develop.svg",
            name: "Development",
            note: "We build your solution using the latest technologies and best practices."
        },
        {
            path: "icons/lunch.svg",
            name: "Launch",
            note: "Your project goes live with our full support and maintenance."
        }
    ]
    return (
        <div className="h-auto w-full flex flex-col items-center justify-center p-32 pt-0 gap-5 flipAnimation mediaGap">
            <h1 className="text-5xl font-semibold text-blue-600 h1 mediaHeroHeading">How we work</h1>
            <p className="text-neutral-500 font-medium mediaPara">Our proven process ensures successful project delivery every time.</p>
            <div className="w-full h-[200px] flex items-center mediaStepsMain">
                <div className="h-[2px] w-full flex flex-row items-center justify-between gap-0 bg-blue-600 mediaStepCards">
                    {steps.map((step, index) => (
                        <div key={index} className="container h-[200px] w-[250px] flex flex-col items-center justify-center gap-1 p-5">
                            <img src={step.path} width={40} height={40} alt={step.name} />
                            <div className="text-blue-600 text-[25px] font-sans font-bold">{step.name}</div>
                            <div className="mPara font-sans">{step.note}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}