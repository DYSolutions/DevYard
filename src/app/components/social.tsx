'use client'
import { motion } from "framer-motion";
import React from "react";

export default function Social() {

    const social = [
        {
            imgPath: "icons/mobile.svg",
            firstHeading: "Call Us",
            lastHeading: "",
            notes: [
            "0776831561"
            ],
        },
        {
            imgPath: "icons/email.svg",
            firstHeading: "Email Us",
            lastHeading: "",
            notes: [
               "devyard@gmail.com"
            ],
        },
        {
            imgPath: "icons/seo.svg",
            firstHeading: "Visit Us",
            lastHeading: "",
            notes: [
             "www.devyard.com"
            ],
        },
        {
            imgPath: "icons/clock.svg",
            firstHeading: "Working Hours",
            lastHeading: "",
            notes: [
                "9.00 AM to 5.00 PM"
            ],
        },
     
    ];

    return (
        <div className="h-auto w-full flex flex-col items-center justify-center pt-16 pb-16 gap-5">
            <h1 className="text-5xl font-semibold text-blue-600 h1">Contact Us</h1>
            <div className="grid grid-cols-4 gap-8 yRotateAnimation">
                {social.map((item, index) => (
                    <motion.div
                        key={index}
                        className="container w-[320px] h-[200px] flex justify-start text-black z-10 cursor-pointer p-10"
                        whileHover={{
                            scale: [null, 1.0, 1.1],
                            transition: {
                                duration: 0.5,
                                times: [0, 0.6, 1],
                                ease: ["easeInOut", "easeOut"],
                            },
                        }}
                        transition={{
                            duration: 0.3,
                            ease: "easeOut",
                        }}
                    >
                        <div className="flex flex-col gap-5">
                            <div className="flex flex-row items-center justify-start gap-5 h-[60px]">
                                <img src={item.imgPath} height="auto" width="50px" alt="mobile-app-development" />
                                <h3 className="text-xl flex flex-col font-semibold">
                                    <div className="">{item.firstHeading} </div>
                                    <div className="text-blue-600">{item.lastHeading}</div>
                                </h3>
                            </div>
                            <div className="flex flex-col gap-1 text-neutral-500">
                                {item.notes.map((note, nIndex) => (
                                    <div className="flex flex-row gap-5" key={nIndex}>
                                        <img src="icons/check.svg" />
                                        <div className="mPara">{note}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}