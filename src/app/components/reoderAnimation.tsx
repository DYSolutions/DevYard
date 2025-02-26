"use client"

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Reordering() {
    const [order, setOrder] = useState(initialOrder);

    useEffect(() => {
        const timeout = setTimeout(() => setOrder(shuffle(order)), 1000);
        return () => clearTimeout(timeout);
    }, [order]);

    return (
        <ul style={container}>
            {order.map((src) => (
                <motion.li
                    key={src}
                    layout
                    transition={spring}
                    style={item}
                >
                    <img src={src} alt="Reordering Item" style={imageStyle} />
                </motion.li>
            ))}
        </ul>
    );
}

const initialOrder = [
    "/images/tailwind.png",
    "/images/express.png",
    "/images/react.png",
    "/images/js.png",
    "/images/next.png",
    "/images/mysql.png",
    "/images/node-js.png",
    "/images/postger.png",
    "/images/firebase.png"
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

const container: React.CSSProperties  = {
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

const imageStyle: React.CSSProperties  = {
    width: "100px",
    height: "auto",
    padding:"10px",
};
