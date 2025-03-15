"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import tailwind from "../../../public/images/tailwind.png";
import fb from "../../../public/images/fb.png";
import react from "../../../public/images/react.png";
import javaScript from "../../../public/images/javaScript.png";
import flutter from "../../../public/images/flutter.png";
import git from "../../../public/images/git.png";
import python from "../../../public/images/python.png";
import android from "../../../public/images/android.png";
import ts from "../../../public/images/ts.png";

export default function Reordering() {
    const [order, setOrder] = useState(initialOrder);

    useEffect(() => {
        const interval = setInterval(() => {
            setOrder((prevOrder) => shuffle(prevOrder));
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <ul style={container}>
            <AnimatePresence>
                {order.map((src, index) => (
                    <motion.li
                        key={src.src} // Ensure key is unique
                        layout
                        transition={spring}
                        style={item}
                    >
                        <Image src={src} alt="Reordering Item" style={imageStyle} />
                    </motion.li>
                ))}
            </AnimatePresence>
        </ul>
    );
}

const initialOrder = [tailwind, fb, react, javaScript, flutter, git, python, android, ts];

/**
 * ==============   Utils   ================
 */
function shuffle(array: StaticImageData[]) {
    return [...array].sort(() => Math.random() - 0.5);
}

/**
 * ==============   Styles   ================
 */
const spring = {
    type: "spring",
    damping: 15,
    stiffness: 120, // Lower stiffness for smoother effect
    mass: 0.5, // Adding mass for more natural animation
};

const container: React.CSSProperties = {
    listStyle: "none",
    padding: 0,
    margin: 0,
    position: "relative",
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
    width: 500,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
};

const item: React.CSSProperties = {
    width: 160,
    height: 160,
    borderRadius: "10px",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "white",
    // boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
};

const imageStyle: React.CSSProperties = {
    width: "100px",
    height: "auto",
    padding: "10px",
};
