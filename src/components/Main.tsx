import { FC, useState, useEffect, useRef } from 'react';
import { Fade } from 'react-awesome-reveal';
import heroImage from '../assets/panel.png';
import { FaShieldAlt, FaServer, FaUserShield, FaArrowDown } from 'react-icons/fa';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React from 'react';

interface StatItemProps {
    icon: JSX.Element;
    value: string;
    label: string;
    delay: number;
}

const StatItem: FC<StatItemProps> = ({ icon, value, label, delay }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    // Animation for counting up numbers
    const [count, setCount] = useState(0);

    // Extract the numeric part and the suffix (%, K, comma notation)
    const parseValue = () => {
        // Handle percent values
        if (value.includes('%')) {
            return {
                number: parseFloat(value),
                suffix: '%'
            };
        }
        // Handle K values (like 100K+)
        else if (value.toLowerCase().includes('k')) {
            const numPart = parseFloat(value.toLowerCase().split('k')[0]);
            return {
                number: numPart,
                suffix: 'K' + (value.includes('+') ? '+' : '')
            };
        }
        // Handle values with comma and plus
        else if (value.includes(',') || value.includes('+')) {
            // Remove commas and plus for numeric calculation
            const numPart = parseFloat(value.replace(/,/g, '').replace(/\+/g, ''));
            // Preserve the original format
            return {
                number: numPart,
                suffix: value.includes('+') ? '+' : '',
                hasCommas: value.includes(',')
            };
        }

        // Default case - just a number
        return {
            number: parseFloat(value),
            suffix: ''
        };
    };

    const { number, suffix, hasCommas } = parseValue();

    useEffect(() => {
        if (inView && number > 0) {
            let start = 0;
            const duration = 2000; // 2 seconds
            const increment = Math.ceil(number / (duration / 16)); // Update every ~16ms (60fps)

            const timer = setInterval(() => {
                start += increment;
                if (start > number) {
                    setCount(number);
                    clearInterval(timer);
                } else {
                    setCount(start);
                }
            }, 16);

            return () => clearInterval(timer);
        }
    }, [inView, number]);

    // Format the display with the appropriate suffix and format
    const formattedValue = () => {
        let displayNumber: number | string = count;

        // Add commas for thousand separators if original had commas
        if (hasCommas) {
            displayNumber = Math.floor(displayNumber).toLocaleString();
        } else if (suffix === '%') {
            // For percentages, keep one decimal place
            displayNumber = displayNumber.toFixed(1);
        } else {
            // Default just round to nearest whole number
            displayNumber = Math.floor(displayNumber);
        }

        return `${displayNumber}${suffix}`;
    };

    return (
        <motion.div
            ref={ref}
            className="flex flex-col items-center relative"
            initial="hidden"
            animate={controls}
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.6,
                        delay: delay,
                        ease: [0.215, 0.61, 0.355, 1]
                    }
                }
            }}
        >
            <motion.div
                className="relative bg-secondary/80 p-3 rounded-lg mb-2 backdrop-blur-md
                           border border-accent/10 shadow-lg"
                whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(5, 194, 201, 0.3)"
                }}
                transition={{ duration: 0.3 }}
            >
                <motion.div
                    className="absolute inset-0 bg-accent/5 rounded-lg z-0"
                    animate={{
                        boxShadow: ["0 0 0px rgba(5, 194, 201, 0)", "0 0 10px rgba(5, 194, 201, 0.3)", "0 0 0px rgba(5, 194, 201, 0)"]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: 'reverse'
                    }}
                />
                <div className="relative z-10">
                    {React.cloneElement(icon, { className: "text-accent text-2xl" })}
                </div>
            </motion.div>

            <div className="text-2xl font-bold relative">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {formattedValue()}
                </span>
                <motion.div
                    className="absolute -bottom-1 left-0 h-[2px] bg-accent/30"
                    initial={{ width: 0 }}
                    animate={{ width: inView ? '100%' : 0 }}
                    transition={{ duration: 0.8, delay: delay + 0.3 }}
                />
            </div>
            <div className="text-gray-400 text-sm mt-1">{label}</div>
        </motion.div>
    );
};

export const Main: FC = () => {
    const [isHovered, setIsHovered] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Parallax scrolling effect
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    // Hero text animation sequence
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    // Typewriter effect for subtitle
    const [displayText, setDisplayText] = useState("");
    const fullText = "ADN is the ultimate anti-cheat solution for your FiveM servers, offering unparalleled protection against cheaters and malicious exploits.";

    useEffect(() => {
        if (inView) {
            let i = 0;
            const timer = setInterval(() => {
                if (i < fullText.length) {
                    setDisplayText(fullText.substring(0, i + 1));
                    i++;
                } else {
                    clearInterval(timer);
                }
            }, 30); // Speed of typing

            return () => clearInterval(timer);
        }
    }, [inView]);

    return (
        <motion.div
            ref={containerRef}
            className="relative min-h-screen flex items-center py-20 overflow-hidden"
            id="home"
            style={{ opacity }}
        >
            {/* Advanced gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary/90 z-0" />

            {/* Enhanced animated particles with different sizes and behaviors */}
            <div className="absolute inset-0 z-0">
                {[...Array(30)].map((_, index) => {
                    const size = Math.random() * 15 + (index % 5 === 0 ? 20 : 5);
                    return (
                        <motion.div
                            key={index}
                            className="absolute rounded-full"
                            style={{
                                width: size,
                                height: size,
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                background: index % 4 === 0
                                    ? 'linear-gradient(to right, rgba(5, 194, 201, 0.2), rgba(73, 156, 241, 0.1))'
                                    : 'rgba(5, 194, 201, 0.15)',
                                filter: 'blur(1px)',
                            }}
                            animate={{
                                y: [0, Math.random() * 150 - 75],
                                x: [0, Math.random() * 100 - 50],
                                opacity: [0.1, Math.random() * 0.5 + 0.1, 0.1],
                                scale: [1, Math.random() * 0.5 + 0.8, 1],
                            }}
                            transition={{
                                duration: Math.random() * 20 + 10,
                                repeat: Infinity,
                                repeatType: 'reverse',
                                ease: 'easeInOut'
                            }}
                        />
                    );
                })}
            </div>

            {/* Animated grid background */}
            <div className="absolute inset-0 z-0 opacity-[0.03]"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                }}>
                <motion.div
                    className="w-full h-full"
                    animate={{
                        y: [0, 40],
                        x: [0, 40]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        ease: 'linear'
                    }}
                />
            </div>

            <div className="container mx-auto px-4 z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div ref={ref}>
                        <motion.h1
                            className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 relative"
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
                        >
                            <motion.div
                                className="flex flex-wrap items-center"
                                initial={{ y: "100%" }}
                                animate={inView ? { y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <span className="text-white mr-3">Secure Your</span>
                                <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
                                    Server
                                </span>

                                {/* Animated underline */}
                                <motion.div
                                    className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-accent to-blue-400/30"
                                    initial={{ width: 0, opacity: 0 }}
                                    animate={inView ? { width: "100%", opacity: 1 } : {}}
                                    transition={{ duration: 1.2, delay: 1 }}
                                />
                            </motion.div>
                        </motion.h1>



                        <motion.div
                            className="relative overflow-hidden h-[8rem] md:h-[6rem]"
                            initial={{ opacity: 0 }}
                            animate={inView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.8 }}
                        >
                            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-lg font-light">
                                {displayText}
                                <motion.span
                                    animate={{ opacity: [0, 1, 0] }}
                                    transition={{ duration: 0.8, repeat: Infinity }}
                                    className="inline-block w-[2px] h-[1em] bg-accent ml-1 align-middle"
                                />
                            </p>
                        </motion.div>

                        <motion.div
                            className="flex flex-wrap gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 1.2 }}
                        >
                            <motion.a
                                href="#pricing"
                                className="px-8 py-4 bg-accent text-white font-semibold rounded-md shadow-lg relative overflow-hidden group z-10"
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 0 25px rgba(5, 194, 201, 0.5)"
                                }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {/* Button background pulse effect */}
                                <motion.div
                                    className="absolute inset-0 bg-accent/0"
                                    animate={{
                                        boxShadow: ["0 0 0px rgba(5, 194, 201, 0) inset", "0 0 15px rgba(5, 194, 201, 0.8) inset", "0 0 0px rgba(5, 194, 201, 0) inset"]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        repeatType: 'reverse'
                                    }}
                                />

                                {/* Button hover reveal animation */}
                                <motion.div
                                    className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-r from-blue-500 to-accent rounded-md z-0"
                                    initial={{ height: "0%" }}
                                    whileHover={{ height: "100%" }}
                                    transition={{ duration: 0.3 }}
                                />

                                <span className="relative z-10">Get Protected</span>
                            </motion.a>

                            <motion.a
                                href="#features"
                                className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-md hover:bg-white/20 relative overflow-hidden group"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {/* Glowing border effect */}
                                <motion.div
                                    className="absolute inset-0 rounded-md"
                                    animate={{
                                        boxShadow: [
                                            "0 0 0px rgba(255, 255, 255, 0.2) inset",
                                            "0 0 8px rgba(255, 255, 255, 0.5) inset",
                                            "0 0 0px rgba(255, 255, 255, 0.2) inset"
                                        ]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        repeatType: 'reverse'
                                    }}
                                />
                                <span className="relative z-10">Learn More</span>
                            </motion.a>
                        </motion.div>

                        {/* Stats section with enhanced animations */}
                        <div className="grid grid-cols-3 gap-4 md:gap-6 mt-16">
                            <StatItem
                                icon={<FaShieldAlt />}
                                value="99.9%"
                                label="Detection Rate"
                                delay={1.5}
                            />
                            <StatItem
                                icon={<FaServer />}
                                value="10,000+"
                                label="Servers Protected"
                                delay={1.7}
                            />
                            <StatItem
                                icon={<FaUserShield />}
                                value="100K+"
                                label="Players Secured"
                                delay={3.0}
                            />
                        </div>

                        {/* Scroll indicator */}
                        <motion.div
                            className="hidden md:flex justify-center mt-16"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2.5, duration: 1 }}
                        >
                            <motion.div
                                className="flex flex-col items-center cursor-pointer"
                                onClick={() => {
                                    document.getElementById('features')?.scrollIntoView({
                                        behavior: 'smooth'
                                    });
                                }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <span className="text-sm text-gray-400 mb-2">Scroll to explore</span>
                                <motion.div
                                    className="p-2 rounded-full border border-accent/30 bg-accent/10"
                                    animate={{
                                        y: [0, 10, 0],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        repeatType: 'loop'
                                    }}
                                >
                                    <FaArrowDown className="text-accent" />
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </div>

                    <Fade direction="right" triggerOnce>
                        <div className="relative">
                            {/* Floating image with 3D effect */}
                            <motion.div
                                className="relative z-10 rounded-xl overflow-hidden border-2 border-white/10 shadow-2xl"
                                whileHover={{ scale: 1.02 }}
                                onHoverStart={() => setIsHovered(true)}
                                onHoverEnd={() => setIsHovered(false)}
                                animate={{
                                    y: [0, -15, 0],
                                    rotateZ: [0, 1, 0],
                                    rotateX: [0, 1, 0],
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    repeatType: 'reverse',
                                    ease: 'easeInOut'
                                }}
                                style={{
                                    transformStyle: 'preserve-3d',
                                    perspective: 1000
                                }}
                            >
                                {/* Glowing effect on hover */}
                                <motion.div
                                    className="absolute inset-0 rounded-xl z-0"
                                    animate={{
                                        boxShadow: isHovered
                                            ? "0 0 30px rgba(5, 194, 201, 0.5)"
                                            : "0 0 0px rgba(5, 194, 201, 0)"
                                    }}
                                    transition={{ duration: 0.5 }}
                                />

                                <img
                                    src={heroImage}
                                    alt="ADN Anti-Cheat Protection"
                                    className="w-full h-auto rounded-xl relative z-10"
                                />

                                {/* Enhanced overlay on hover with animated gradient */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex items-end"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: isHovered ? 1 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="p-6 translate-y-2">
                                        <motion.h3
                                            className="text-xl font-bold"
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                                            transition={{ duration: 0.4 }}
                                        >
                                            <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
                                                Advanced Detection Technology
                                            </span>
                                        </motion.h3>
                                        <motion.p
                                            className="text-gray-300"
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                                            transition={{ duration: 0.4, delay: 0.1 }}
                                        >
                                            ADN uses AI-powered analysis to detect even the most sophisticated cheats
                                        </motion.p>
                                    </div>
                                </motion.div>

                                {/* Animated scan line effect */}
                                <motion.div
                                    className="absolute left-0 w-full h-[2px] bg-accent/40 z-20"
                                    initial={{ top: 0, opacity: 0 }}
                                    animate={{
                                        top: ['0%', '100%'],
                                        opacity: [0, 0.8, 0]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        repeatType: 'loop',
                                        ease: 'linear',
                                        times: [0, 0.5, 1]
                                    }}
                                />
                            </motion.div>

                            {/* Enhanced glow elements */}
                            <motion.div
                                className="absolute -top-10 -right-10 w-40 h-40 bg-accent/30 rounded-full blur-[80px] z-0"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.3, 0.5, 0.3]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    repeatType: 'reverse'
                                }}
                            />
                            <motion.div
                                className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/30 rounded-full blur-[80px] z-0"
                                animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [0.2, 0.4, 0.2]
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    repeatType: 'reverse',
                                    delay: 1
                                }}
                            />

                            {/* Floating decorative elements */}
                            {[...Array(5)].map((_, index) => (
                                <motion.div
                                    key={index}
                                    className="absolute rounded-full border border-accent/20 z-0"
                                    style={{
                                        width: Math.random() * 40 + 10,
                                        height: Math.random() * 40 + 10,
                                        top: `${Math.random() * 100}%`,
                                        left: `${Math.random() * 100}%`,
                                        background: 'linear-gradient(135deg, rgba(5, 194, 201, 0.05), rgba(5, 194, 201, 0.01))'
                                    }}
                                    animate={{
                                        x: [0, Math.random() * 30 - 15],
                                        y: [0, Math.random() * 30 - 15],
                                        rotate: [0, Math.random() * 180],
                                        scale: [1, Math.random() * 0.3 + 0.8, 1]
                                    }}
                                    transition={{
                                        duration: Math.random() * 5 + 5,
                                        repeat: Infinity,
                                        repeatType: 'reverse',
                                        ease: 'easeInOut'
                                    }}
                                />
                            ))}
                        </div>
                    </Fade>
                </div>
            </div>

            {/* Bottom light beam */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-[150px] bg-gradient-to-t from-accent/20 to-transparent blur-[60px] opacity-50"></div>

            {/* Top right corner decoration */}
            <motion.div
                className="absolute top-10 right-10 w-20 h-20 opacity-30 hidden lg:block"
                animate={{
                    opacity: [0.2, 0.4, 0.2],
                    rotate: [0, 360]
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
            >
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="40" stroke="rgba(5, 194, 201, 0.5)" strokeWidth="2" strokeDasharray="10 5" />
                    <circle cx="50" cy="50" r="30" stroke="rgba(5, 194, 201, 0.3)" strokeWidth="1" />
                    <circle cx="50" cy="50" r="20" stroke="rgba(5, 194, 201, 0.7)" strokeWidth="1" strokeDasharray="5 3" />
                </svg>
            </motion.div>

            {/* Moving radial gradient */}
            <motion.div
                className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle at center, rgba(5, 194, 201, 0.2), transparent 70%)',
                    backgroundSize: '100% 100%'
                }}
                animate={{
                    backgroundPosition: ['0% 0%', '100% 100%', '0% 100%', '100% 0%', '0% 0%']
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />
        </motion.div>
    );
};
