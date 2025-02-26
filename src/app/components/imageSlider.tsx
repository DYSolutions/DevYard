"use client"

import { AnimatePresence, motion, usePresenceData, wrap } from "framer-motion";
import { forwardRef, useState, SVGProps } from "react";

interface ImageSliderProps {
    paths: string[]; // Array of image paths
}

export default function ImageSlider({ paths }: ImageSliderProps) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [direction, setDirection] = useState<1 | -1>(1);

    function setSlide(newDirection: 1 | -1) {
        const nextIndex = wrap(0, paths.length, selectedIndex + newDirection);
        setSelectedIndex(nextIndex);
        setDirection(newDirection);
    }

    const color = `var(--hue-${selectedIndex + 1})`;

    return (
        <div style={container}>
            <motion.button
                initial={false}
                animate={{ backgroundColor: "#bf97ff70" }}
                aria-label="Previous"
                style={button}
                onClick={() => setSlide(-1)}
                whileFocus={{ outline: `2px solid ${color}` }}
                whileTap={{ scale: 0.9 }}
            >
                <ArrowLeft />
            </motion.button>
            <AnimatePresence
                custom={direction}
                initial={false}
                mode="popLayout"
            >
                <Slide key={selectedIndex} image={paths[selectedIndex]} color={color} />
            </AnimatePresence>
            <motion.button
                initial={false}
                animate={{ backgroundColor: "#bf97ff70" }}
                aria-label="Next"
                style={button}
                onClick={() => setSlide(1)}
                whileFocus={{ outline: `2px solid ${color}` }}
                whileTap={{ scale: 0.9 }}
            >
                <ArrowRight />
            </motion.button>
        </div>
    );
}

const Slide = forwardRef(function Slide(
    { image, color }: { image: string; color: string },
    ref: React.Ref<HTMLDivElement>
) {
    const direction = usePresenceData();
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: direction * 50 }}
            animate={{
                opacity: 1,
                x: 0,
                transition: {
                    delay: 0.2,
                    type: "spring",
                    visualDuration: 0.3,
                    bounce: 0.4,
                },
            }}
            exit={{ opacity: 0, x: direction * -50 }}
            style={{ ...box,borderRadius:"5px" }}
        >
            <img src={image} alt="Slide" style={{...imageStyle,borderRadius:"5px"}} />
        </motion.div>
    );
});

/**
 * ==============   Icons   ================
 */
const iconsProps: SVGProps<SVGSVGElement> = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
};

function ArrowLeft() {
    return (
        <svg {...iconsProps}>
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
        </svg>
    );
}

function ArrowRight() {
    return (
        <svg {...iconsProps}>
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
        </svg>
    );
}

/**
 * ==============   Styles   ================
 */

const container: React.CSSProperties = {
    display: "flex",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
};

const box: React.CSSProperties = {
    width: 1000, // Fixed width
    height: "100%", // Height adjusts based on image aspect ratio
    backgroundColor: "white",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding:"3px",
    boxShadow: `
        0 4px 6px rgba(0, 0, 0, 0.1), // Base shadow
        0 10px 20px rgba(0, 0, 0, 0.2), // Medium shadow
        0 20px 40px rgba(0, 0, 0, 0.3) // Large shadow
    `,
    transform: "translateZ(0)", // Optional: Enhances the 3D effect
    
};

const button: React.CSSProperties = {
    backgroundColor: "#0cdcf7",
    width: 40,
    height: 40,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    zIndex: 1,
    outlineOffset: 2,
}

const imageStyle: React.CSSProperties = {
    width: "100%", // Image takes full width of the container
    height: "100%", // Height adjusts to maintain aspect ratio
    objectFit: "cover", // Ensures the image covers the container
};