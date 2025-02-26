'use client'
import { motion } from "framer-motion";
import React from "react";

export default function Services() {
    return (
        <div className="h-auto w-full flex flex-col items-center justify-center pt-32 pb-32 gap-5 border-t-[1px] border-gray-700">
            <h1 className="text-5xl font-semibold text-white">Our Services</h1>
            <p className="text-neutral-500 font-medium">Write a short note about our services</p>
            <div className="grid grid-cols-3 grid-rows-2 gap-8">

                <motion.div
                    className="container rightAnimation w-[400px] h-[300px] flex justify-start text-white z-10 cursor-pointer p-10"
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
                        <div className="flex flex-row items-center justify-center gap-5 h-[60px]">
                            <img src="icons/mobile.svg" height="auto" width="50px" alt="mobile-app-development" />
                            <h3 className="text-2xl flex flex-col font-semibold">
                                <div className="">Mobile App </div>
                                <div className="text-gray-600">Development</div>
                            </h3>
                        </div>
                        <div className="flex flex-col gap-1 text-neutral-500">
                            <div className="flex flex-row gap-5">
                                <img src="icons/check.svg" />
                                <div className="para">write some about</div>
                            </div>

                            <div className="flex flex-row gap-5">
                                <img src="icons/check.svg" />
                                <div className="para">write some about</div>
                            </div>

                            <div className="flex flex-row gap-5">
                                <img src="icons/check.svg" />
                                <div className="para">write some about</div>
                            </div>

                            <div className="flex flex-row gap-5">
                                <img src="icons/check.svg" />
                                <div className="para">write some about</div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="container rightAnimation w-[400px] h-[300px] flex justify-start text-white z-10 cursor-pointer p-10"
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
                        <div className="flex flex-row items-center justify-center gap-5 h-[60px]">
                            <img src="icons/web.svg" height="auto" width="50px" alt="mobile-app-development" />
                            <h3 className="text-2xl flex flex-col font-semibold">
                                <div className="">Web</div>
                                <div className="text-gray-600">Development</div>
                            </h3>
                        </div>
                        <div className="flex flex-col gap-1 text-neutral-500">
                            <div className="flex flex-row gap-5">
                                <img src="icons/check.svg" />
                                <div className="para">write some about</div>
                            </div>

                            <div className="flex flex-row gap-5">
                                <img src="icons/check.svg" />
                                <div className="para">write some about</div>
                            </div>

                            <div className="flex flex-row gap-5">
                                <img src="icons/check.svg" />
                                <div className="para">write some about</div>
                            </div>

                            <div className="flex flex-row gap-5">
                                <img src="icons/check.svg" />
                                <div className="para">write some about</div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="container rightAnimation w-[400px] h-[300px] flex justify-start text-white z-10 cursor-pointer p-10"
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
                        <div className="flex flex-row items-center justify-center gap-5 h-[60px]">
                            <img src="icons/seo.svg" height="auto" width="50px" alt="mobile-app-development" />
                            <h3 className="text-2xl flex flex-col font-semibold">
                                <div className="">SEO </div>
                                {/* <div className="text-gray-600">Development</div> */}
                            </h3>
                        </div>
                        <div className="flex flex-col gap-1 text-neutral-500">
                            <div className="flex flex-row gap-5">
                                <img src="icons/check.svg" />
                                <div className="para">write some about</div>
                            </div>

                            <div className="flex flex-row gap-5">
                                <img src="icons/check.svg" />
                                <div className="para">write some about</div>
                            </div>

                            <div className="flex flex-row gap-5">
                                <img src="icons/check.svg" />
                                <div className="para">write some about</div>
                            </div>

                            <div className="flex flex-row gap-5">
                                <img src="icons/check.svg" />
                                <div className="para">write some about</div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="container rightAnimation w-[400px] h-[300px] flex justify-start text-white z-10 cursor-pointer p-10"
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
                        <div className="flex flex-row items-center justify-center gap-5 h-[60px]">
                            <img src="icons/dm.svg" height="auto" width="50px" alt="mobile-app-development" />
                            <h3 className="text-2xl flex flex-col font-semibold">
                                <div className="">Digital</div>
                                <div className="text-gray-600">Marcketing</div>
                            </h3>
                        </div>
                        <div className="flex flex-col gap-1 text-neutral-500">
                            <div className="flex flex-row gap-5">
                                <img src="icons/check.svg" />
                                <div className="para">write some about</div>
                            </div>

                            <div className="flex flex-row gap-5">
                                <img src="icons/check.svg" />
                                <div className="para">write some about</div>
                            </div>

                            <div className="flex flex-row gap-5">
                                <img src="icons/check.svg" />
                                <div className="para">write some about</div>
                            </div>

                            <div className="flex flex-row gap-5">
                                <img src="icons/check.svg" />
                                <div className="para">write some about</div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="container rightAnimation w-[400px] h-[300px] flex justify-start text-white z-10 cursor-pointer p-10"
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
                        <div className="flex flex-row items-center justify-center gap-5 h-[60px]">
                            <img src="icons/ecommerce.svg" height="auto" width="50px" alt="mobile-app-development" />
                            <h3 className="text-2xl flex flex-col font-semibold">
                                <div className="">E-Commerce</div>
                                <div className="text-gray-600">Solutions</div>
                            </h3>
                        </div>
                        <div className="flex flex-col gap-1 text-neutral-500">
                            <div className="flex flex-row gap-5">
                                <img src="icons/check.svg" />
                                <div className="para">write some about</div>
                            </div>

                            <div className="flex flex-row gap-5">
                                <img src="icons/check.svg" />
                                <div className="para">write some about</div>
                            </div>

                            <div className="flex flex-row gap-5">
                                <img src="icons/check.svg" />
                                <div className="para">write some about</div>
                            </div>

                            <div className="flex flex-row gap-5">
                                <img src="icons/check.svg" />
                                <div className="para">write some about</div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="container rightAnimation w-[400px] h-[300px] flex justify-start text-white z-10 cursor-pointer p-10"
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
                        <div className="flex flex-row items-center justify-center gap-5 h-[60px]">
                            <img src="icons/uiux.svg" height="auto" width="50px" alt="mobile-app-development" />
                            <h3 className="text-2xl flex flex-col font-semibold">
                                <div className="">UI/UX</div>
                                <div className="text-gray-600">Designing</div>
                            </h3>
                        </div>
                        <div className="flex flex-col gap-1 text-neutral-500">
                            <div className="flex flex-row gap-5">
                                <img src="icons/check.svg" />
                                <div className="para">write some about</div>
                            </div>

                            <div className="flex flex-row gap-5">
                                <img src="icons/check.svg" />
                                <div className="para">write some about</div>
                            </div>

                            <div className="flex flex-row gap-5">
                                <img src="icons/check.svg" />
                                <div className="para">write some about</div>
                            </div>

                            <div className="flex flex-row gap-5">
                                <img src="icons/check.svg" />
                                <div className="para">write some about</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}