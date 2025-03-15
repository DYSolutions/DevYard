"use client";

import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function AnimatedMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const { height } = useDimensions(containerRef);

    return (
        <div style={{ position: "relative" }}>
            {/* Menu Toggle Button Always Visible */}
            <MenuToggle toggle={() => setIsOpen(!isOpen)} isOpen={isOpen} />

            <motion.nav
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                custom={height}
                ref={containerRef}
                variants={navVariants}
                style={{ ...navStyle, zIndex: 10 }} // Updated zIndex
            >
                <Navigation isOpen={isOpen} setIsOpen={setIsOpen} />
            </motion.nav>
        </div>
    );
}

const navVariants: Variants = {
    open: {
        opacity: 1,
        height: "auto",
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        opacity: 0,
        height: 0,
        overflow: "hidden",
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
};

const Navigation = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (isOpen: boolean) => void }) => (
    <motion.ul
        style={list}
        variants={listVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
    >
        {["Home", "About Us", "Contact Us"].map((i, index) => (
            <MenuItem i={i} key={index} setIsOpen={setIsOpen} />
        ))}
    </motion.ul>
);

const listVariants: Variants = {
    open: { opacity: 1, display: "block", transition: { staggerChildren: 0.07 } },
    closed: { opacity: 0, display: "none", transition: { staggerChildren: 0.05, staggerDirection: -1 } },
};

const itemVariants: Variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 },
        },
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 },
        },
    },
};

const MenuItem = ({ i, setIsOpen }: { i: string; setIsOpen: (isOpen: boolean) => void }) => {
    const router = useRouter();

    function handleClick(i: string): void {
        if (i === "Home") {
            router.push("/");
        } else if (i === "About Us") {
            router.push("/about");
        } else if (i === "Contact Us") {
            router.push("/contact");
        }
        setIsOpen(false);
    }

    return (
        <motion.li
            style={listItem}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <div onClick={() => handleClick(i)} className="text-[20px]">
                {i}
            </div>
        </motion.li>
    );
};

const Path = (props: { d?: string; variants: Variants; transition?: { duration: number } }) => (
    <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="hsl(0, 0%, 18%)"
        strokeLinecap="round"
        {...props}
    />
);

const MenuToggle = ({ toggle, isOpen }: { toggle: () => void; isOpen: boolean }) => (
    <button onClick={toggle} style={{ background: "transparent", border: "none", cursor: "pointer" }} aria-label="Toggle Menu">
        <motion.svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            animate={isOpen ? "open" : "closed"}
        >
            <Path
                variants={{
                    closed: { d: "M 2 2.5 L 20 2.5" },
                    open: { d: "M 3 16.5 L 17 2.5" },
                }}
            />
            <Path
                d="M 2 9.423 L 20 9.423"
                variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                }}
                transition={{ duration: 0.1 }}
            />
            <Path
                variants={{
                    closed: { d: "M 2 16.346 L 20 16.346" },
                    open: { d: "M 3 2.5 L 17 16.346" },
                }}
            />
        </motion.svg>
    </button>
);

/**
 * ==============   Styles   ================
 */
const navStyle: React.CSSProperties = {
    position: "absolute",
    top: -20,
    right: -20,
    width: 220,
    backgroundColor: "#f5fafc",
    boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
    padding: 10,
};

const list: React.CSSProperties = {
    listStyle: "none",
    padding: 25,
    margin: 0,
};

const listItem: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 10,
    margin: 0,
    listStyle: "none",
    cursor: "pointer",
    borderRadius: 5,
};

/**
 * ==============   Utils   ================
 */
const useDimensions = (ref: React.RefObject<HTMLDivElement | null>) => {
    const dimensions = useRef({ width: 0, height: 0 });

    useEffect(() => {
        if (ref.current) {
            const resizeObserver = new ResizeObserver((entries) => {
                for (let entry of entries) {
                    dimensions.current.width = entry.contentRect.width;
                    dimensions.current.height = entry.contentRect.height;
                }
            });

            resizeObserver.observe(ref.current);

            return () => resizeObserver.disconnect();
        }
    }, [ref]);

    return dimensions.current;
};