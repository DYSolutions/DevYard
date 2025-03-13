
"use client";
import { useState } from "react";
import Social from "@/app/components/social";




export default function Contact() {

    const [result, setResult] = useState<string>("");
    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        console.log(`Changing ${e.target.name} to ${e.target.value}`);
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setResult("Sending....");

        // Cast e.target to HTMLFormElement for proper FormData usage.
        const formData = new FormData(e.target as HTMLFormElement);

        // Append your API access key.
        formData.append("access_key", "114cf70c-b512-4057-b5ba-b68caca85a55");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                alert(data.message);
                setResult("Success!");
            } else {
                console.error("Error", data);
                setResult(data.message);
            }
        } catch (error) {
            console.error("Submission error", error);
            setResult("Submission failed");
        }
    };

    


    return (
        <div className="text-white h-[150vh] p-5">
            <div className="flex-column">
                <div className="flex flex-row gap-[20vh]">

                    <div className="flex flex-col gap-5 justify-center items-center h-[90vh] w-[80vh] mt-5">
                        <h1 className="text-6xl text-blue-600 font-bold ml-20 h1 fadeAnimation">
                            Have a question or a project in mind?
                        </h1>
                            <p className="text-3xl font-semibold text-black-500 ml-20 para heroLeftAnimation">We’d love to hear from you!
                            
                             Reach out to us, and let’s create something amazing together.
                        </p>
                    </div>

                    <div className="h-[80vh] w-[80vh] mt-20 text-2xl heroRightAnimation">
                        <form onSubmit={handleSubmit} className="container w-[90vh] h-[70vh] mt-3 justify-center items-center grid grid-rows-4 ">
                            <h1 className="text-4xl text-blue-600 mt-10 ml-40 font-bold h1">Let's get started.</h1>
                            <div className="flex gap-10">
                                <input
                                    type="text"
                                    name="fname"
                                    value={formData.fname}
                                    onChange={handleChange}
                                    placeholder="FirstName"
                                    className="w-[35vh] text-base bg-white shadow-md shadow-black/10 rounded-[10px] text-black p-2 ml-5 outline-none"
                                />

                                <input
                                    type="text"
                                    name="lname"
                                    value={formData.lname}
                                    onChange={handleChange}
                                    placeholder="LastName"
                                    className="w-[35vh] text-base bg-white shadow-md shadow-black/10 rounded-[10px] text-black p-2 outline-none"
                                />
                            </div>
                            <div className="flex gap-10">
                                <input
                                    type="text"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                    className="w-[35vh] text-base bg-white shadow-md shadow-black/10 rounded-[10px] p-2 outline-none ml-5 text-black"
                                />

                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Phone"
                                    className="w-[35vh] text-base bg-white shadow-md shadow-black/10 rounded-[10px] p-2 outline-none text-black"
                                />
                            </div>

                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell us about your idea"
                                className="w-[75vh] text-base bg-white shadow-md shadow-black/10 rounded-[10px] p-2 ml-5 outline-none h-32 text-black"
                            ></textarea>

                            <div className="flex justify-center mt-5">
                                <button type="submit" className="btn">
                                    Submit
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
             
                  <video
                            src="contact2.mp4"
                            className="absolute left-0 top-[550px] w-[40vh] h-[40vh] object-cover z-[-1] flipAnimation"
                            autoPlay
                            loop
                            muted
                        />

                <div>
                    <Social/>
                </div>
            </div>
        </div>

    );

}