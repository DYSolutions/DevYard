"use client"

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import tailwind from "../../../public/images/tailwind.png"
import fb from "../../../public/images/fb.png"
import react from "../../../public/images/react.png"
import javaScript from "../../../public/images/javaScript.png"
import flutter from "../../../public/images/flutter.png"
import git from "../../../public/images/git.png"
import python from "../../../public/images/python.png"
import android from "../../../public/images/android.png"
import ts from "../../../public/images/ts.png"

export default function Reordering() {
    const [order, setOrder] = useState(initialOrder);

    useEffect(() => {
        const timeout = setTimeout(() => setOrder(shuffle(order)), 1000);
        return () => clearTimeout(timeout);
    }, [order]);

    return (
        <ul style={container}>
            {order.map((src,index) => (
                <motion.li
                    key={index}
                    layout
                    transition={spring}
                    style={item}
                >
                    <Image src={src} alt="Reordering Item" style={imageStyle} />
                </motion.li>
            ))}
        </ul>
    );
}

const initialOrder = [
    tailwind,
    fb,
    react,
    javaScript,
    flutter,
    git,
    python,
    android,
    ts
];

/**
 * ==============   Utils   ================
 */
function shuffle([...array]) {
    return array.sort(() => Math.random() - 0.5);
}

/**
 * ==============   Styles   ================
 */
const spring = {
    type: "spring",
    damping: 20,
    stiffness: 300,
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
    alignItems: "center"
};

const item = {
    width: 150,
    height: 150,
    borderRadius: "10px",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
};

const imageStyle: React.CSSProperties = {
    width: "100px",
    height: "auto",
    padding: "10px",
};
