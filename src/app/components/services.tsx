'use client'
import { motion } from "framer-motion";
import React from "react";

export default function Services() {

    const services = [
        {
            imgPath: "icons/mobile.svg",
            firstHeading: "Mobile App",
            lastHeading: "Development",
            notes: [
                "Custom Android & iOS apps.",
                "Smooth,user-friendly experience.",
                "AI & real-time integrations."
            ],
        },
        {
            imgPath: "icons/web.svg",
            firstHeading: "Web",
            lastHeading: "Development",
            notes: [
                "Responsive and fast websites.",
                "Custom web applications.",
                "Modern frameworks."
            ],
        },
        {
            imgPath: "icons/seo.svg",
            firstHeading: "SEO",
            lastHeading: "",
            notes: [
                "Boost search engine rankings.",
                "Keyword optimization.",
                "Technical & content SEO."
            ],
        },
        {
            imgPath: "icons/dm.svg",
            firstHeading: "Digital",
            lastHeading: "Marketing",
            notes: [
                "Targeted digital campaigns.",
                "Social media & PPC ads.",
                "Content & email marketing."
            ],
        },
        {
            imgPath: "icons/ecommerce.svg",
            firstHeading: "E-Commerce",
            lastHeading: "Solutions",
            notes: [
                "Secure, scalable platforms.",
                "Smooth payment integration.",
                "Optimized for conversions."
            ],
        },
        {
            imgPath: "icons/uiux.svg",
            firstHeading: "UI/UX",
            lastHeading: "Designing",
            notes: [
                "Intuitive & modern designs.",
                "Wireframing & prototyping.",
                "Responsive & accessible UI."
            ],
        }
    ];

    return (
        <div className="h-auto w-full flex flex-col items-center justify-center pt-16 pb-16 gap-5 mediaGap">
            <h1 className="text-5xl font-semibold text-blue-600 h1 mediaHeroHeading">Our Services</h1>
            <p className="text-neutral-500 mediaPara">
                We offer a full range
                of digital services to help
                your business succeed in the digital age.</p>
            <div className="mediaServiseCards grid grid-cols-3 grid-rows-2 gap-8 yRotateAnimation">
                {services.map((item, index) => (
                    <motion.div
                        key={index}
                        className="container w-[400px] h-[250px] flex justify-start text-black z-10 cursor-pointer p-10"
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