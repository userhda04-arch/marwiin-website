import { BiSolidZap } from 'react-icons/bi';
import { AiFillInfoCircle, AiFillPlayCircle } from 'react-icons/ai';
import { FaShieldAlt, FaCrosshairs } from 'react-icons/fa';
import { BsGlobe, BsFillGearFill, BsSafe2Fill } from 'react-icons/bs';
import { GiRadarSweep } from 'react-icons/gi';
import { HiMiniMagnifyingGlass } from 'react-icons/hi2';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';
import { Fade } from 'react-awesome-reveal';
import { useState, useEffect, ReactNode, MouseEvent, useRef } from 'react';
import { useHover } from '../hooks/useHover';
import panel from '../assets/panel.png';
import { IoMdClose } from 'react-icons/io';
import React from 'react';
import { motion } from 'framer-motion';

export const Features = () => {
    const [isVideoVisible, setVideoVisible] = useState(false);
    const [isAdminMenuVideoVisible, setAdminMenuVideoVisible] = useState(false);
    const [isCloudPanelVisible, setCloudPanelVisible] = useState(false);
    const [isFullScreenImageVisible, setFullScreenImageVisible] = useState(false);

    const [zapHovered, zapEventHandlers] = useHover();
    const [shieldHovered, shieldEventHandlers] = useHover();
    const [aimbotHovered, aimbotEventHandlers] = useHover();
    const [globeHovered, globeEventHandlers] = useHover();
    const [radarHovered, radarEventHandlers] = useHover();
    const [magnifyingGlassHovered, magnifyingGlassEventHandlers] = useHover();
    const [gearHovered, gearEventHandlers] = useHover();
    const [safeHovered, safeEventHandlers] = useHover();
    const [adminPanelHovered, adminPanelEventHandlers] = useHover();

    // Reference to the cloud panel card for outside hover detection
    const cloudPanelRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setVideoVisible(false);
                setAdminMenuVideoVisible(false);
                setFullScreenImageVisible(false);
                setCloudPanelVisible(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = isVideoVisible || isAdminMenuVideoVisible || isFullScreenImageVisible ? 'hidden' : 'auto';

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'auto';
        };
    }, [isVideoVisible, isAdminMenuVideoVisible, isFullScreenImageVisible]);

    // Handle clicking outside the cloud panel to close it
    useEffect(() => {
        if (!isCloudPanelVisible) return;

        const handleClickOutside = (e: MouseEvent) => {
            if (cloudPanelRef.current && !cloudPanelRef.current.contains(e.target as Node)) {
                setCloudPanelVisible(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside as any);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside as any);
        };
    }, [isCloudPanelVisible]);

    // Handle mouse leaving the cloud panel card
    useEffect(() => {
        if (!isCloudPanelVisible) return;

        const handleMouseLeave = () => {
            setCloudPanelVisible(false);
        };

        const element = cloudPanelRef.current;
        element?.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            element?.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [isCloudPanelVisible]);

    const toggleCloudPanel = (e: MouseEvent) => {
        e.stopPropagation(); // Prevent event bubbling
        setCloudPanelVisible(prev => !prev);
    };

    const showFullScreenImage = (e: MouseEvent) => {
        e.stopPropagation();
        setFullScreenImageVisible(true);
    };

    const closeFullScreenImage = () => {
        setFullScreenImageVisible(false);
    };

    // Reusable feature card component
    const FeatureCard = ({
        icon,
        title,
        description,
        isHovered,
        eventHandlers,
        onClick = undefined,
        mediaIcon = null,
        extraContent = null,
        isCloudPanel = false,
        forwardedRef = null
    }: {
        icon: JSX.Element;
        title: string;
        description: string;
        isHovered: boolean;
        eventHandlers: any;
        onClick?: ((e: MouseEvent) => void) | undefined;
        mediaIcon?: ReactNode;
        extraContent?: ReactNode;
        isCloudPanel?: boolean;
        forwardedRef?: any;
    }) => (
        <motion.div
            ref={forwardedRef}
            className={`backdrop-blur-md bg-secondary/40 flex flex-col p-4 rounded-xl transition-all duration-500
                      ${onClick ? 'cursor-pointer' : ''}
                      border border-transparent hover:border-accent/30
                      shadow-lg hover:shadow-xl hover:shadow-accent/10
                      relative overflow-hidden z-10 h-full`}
            onClick={onClick}
            {...(typeof eventHandlers === 'object' && {
                onMouseOver: eventHandlers.onMouseOver,
                onMouseOut: eventHandlers.onMouseOut,
            })}
            whileHover={{
                y: -5,
                transition: { duration: 0.3 }
            }}
        >
            {/* Background gradient circle */}
            <div className={`absolute -top-20 -right-20 w-32 h-32 rounded-full 
                           bg-gradient-to-bl from-transparent to-accent/5
                           transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>

            <div className="flex items-start mb-3">
                <div className="bg-gray-800/80 rounded-lg p-2 mr-3 border border-gray-700 group-hover:border-accent/30 transition-colors duration-300">
                    {React.cloneElement(icon, {
                        className: `text-2xl ${isHovered ? 'text-accent' : 'text-white'} transition-colors duration-300`
                    })}
                </div>

                <div>
                    <h3 className="font-semibold text-white text-base mb-1 group-hover:text-accent transition-colors duration-300">
                        {title}
                    </h3>
                    {mediaIcon && (
                        <div className="absolute top-3 right-3">
                            {mediaIcon}
                        </div>
                    )}
                </div>
            </div>

            <p className='text-gray-300 text-xs md:text-sm z-10 mb-3'>{description}</p>

            {/* Only render extraContent for the correct card */}
            {isCloudPanel && extraContent}

            {/* Bottom border animation */}
            <motion.div
                className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-accent/80 via-blue-400/50 to-transparent"
                initial={{ width: 0 }}
                animate={{ width: isHovered ? '100%' : '0%' }}
                transition={{ duration: 0.5 }}
            />
        </motion.div>
    );

    return (
        <section className="py-24 relative overflow-hidden" id='features'>
            {/* Background with gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-secondary/90 to-primary z-0"></div>

            {/* Animated particles */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                {[...Array(10)].map((_, index) => (
                    <motion.div
                        key={index}
                        className="absolute bg-accent/5 rounded-full"
                        style={{
                            width: Math.random() * 100 + 50,
                            height: Math.random() * 100 + 50,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`
                        }}
                        animate={{
                            y: [0, Math.random() * 50 - 25],
                            x: [0, Math.random() * 50 - 25],
                            opacity: [0.1, 0.2, 0.1],
                        }}
                        transition={{
                            duration: Math.random() * 8 + 12,
                            repeat: Infinity,
                            repeatType: 'reverse'
                        }}
                    />
                ))}
            </div>

            <div className='container mx-auto px-4 relative z-10'>
                <Fade>
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="flex justify-center items-center gap-2 mb-4"
                        >
                            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                                <FaShieldAlt className="text-accent text-xl" />
                            </div>
                        </motion.div>

                        <h1 className='text-4xl md:text-5xl font-bold mb-4 text-white relative inline-block'>
                            <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
                                FEATURES
                            </span>
                            <motion.span
                                className="absolute -bottom-2 left-0 bg-gradient-to-r from-accent/80 to-blue-400/30 h-[3px] rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: '100%' }}
                                transition={{ duration: 1.5, delay: 0.5 }}
                            ></motion.span>
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-4">
                            Discover what makes ADN the most powerful anti-cheat system for your servers
                        </p>
                    </div>
                </Fade>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5'>
                    <Fade cascade damping={0.1}>
                        <FeatureCard
                            icon={<BiSolidZap />}
                            title="Optimized & Powerful"
                            description="Peak performance without compromising speed. Minimal server impact."
                            isHovered={zapHovered as boolean}
                            eventHandlers={zapEventHandlers}
                        />

                        <FeatureCard
                            icon={<FaShieldAlt />}
                            title="Anti Executors"
                            description="Identifies cheaters' executors directly. Protection against malicious actions."
                            isHovered={shieldHovered as boolean}
                            eventHandlers={shieldEventHandlers}
                        />

                        <FeatureCard
                            icon={<FaCrosshairs />}
                            title="Anti Aimbot"
                            description="Best detection algorithm without false flags. Precise identification of aimbot usage."
                            isHovered={aimbotHovered as boolean}
                            eventHandlers={aimbotEventHandlers}
                        />

                        <FeatureCard
                            icon={<BsGlobe />}
                            title="Cloud Panel"
                            description="Manage anti-cheat settings remotely. User-friendly interface."
                            isHovered={globeHovered as boolean}
                            eventHandlers={globeEventHandlers}
                            onClick={(e: MouseEvent) => toggleCloudPanel(e)}
                            isCloudPanel={true}
                            forwardedRef={cloudPanelRef}
                            mediaIcon={
                                <motion.div
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="relative"
                                >
                                    <AiFillInfoCircle
                                        className={`text-2xl md:text-3xl ${isCloudPanelVisible || (globeHovered as boolean) ? 'text-accent' : 'text-white'}`}
                                    />
                                    <motion.div
                                        animate={{
                                            scale: [1, 1.2, 1],
                                            opacity: [0.7, 1, 0.7]
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            repeatType: 'loop'
                                        }}
                                        className="absolute inset-0 bg-accent/20 rounded-full"
                                        style={{
                                            display: isCloudPanelVisible || (globeHovered as boolean) ? 'block' : 'none'
                                        }}
                                    />
                                </motion.div>
                            }
                            extraContent={
                                <motion.div
                                    className="overflow-hidden transition-all duration-500 ease-in-out mt-2"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{
                                        height: isCloudPanelVisible ? 'auto' : 0,
                                        opacity: isCloudPanelVisible ? 1 : 0
                                    }}
                                >
                                    <div className="relative group cursor-pointer" onClick={(e: MouseEvent) => showFullScreenImage(e)}>
                                        <img
                                            src={panel}
                                            alt='Cloud Panel'
                                            className='rounded-lg w-full h-auto shadow-lg border border-accent/20 transition-all duration-300'
                                        />
                                        <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                                            <motion.div
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                className="bg-black/50 p-3 rounded-full"
                                            >
                                                <AiFillInfoCircle className="text-white text-2xl" />
                                            </motion.div>
                                        </div>
                                    </div>
                                </motion.div>
                            }
                        />

                        <FeatureCard
                            icon={<GiRadarSweep />}
                            title="Enhanced Detection"
                            description="Innovative detection compatible with all scripts. No false bans."
                            isHovered={radarHovered as boolean}
                            eventHandlers={radarEventHandlers}
                        />

                        <FeatureCard
                            icon={<HiMiniMagnifyingGlass />}
                            title="Executor Detection"
                            description="Identifies numerous executors like Eulen, Red Engine, and more."
                            isHovered={magnifyingGlassHovered as boolean}
                            eventHandlers={magnifyingGlassEventHandlers}
                            onClick={(e: MouseEvent) => {
                                e.stopPropagation();
                                setVideoVisible(true);
                            }}
                            mediaIcon={
                                <motion.div
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="relative"
                                >
                                    <AiFillPlayCircle
                                        className={`text-2xl md:text-3xl ${(magnifyingGlassHovered as boolean) ? 'text-accent' : 'text-white'}`}
                                    />
                                    <motion.div
                                        animate={{
                                            scale: [1, 1.2, 1],
                                            opacity: [0.7, 1, 0.7]
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            repeatType: 'loop'
                                        }}
                                        className="absolute inset-0 bg-accent/20 rounded-full"
                                        style={{
                                            display: (magnifyingGlassHovered as boolean) ? 'block' : 'none'
                                        }}
                                    />
                                </motion.div>
                            }
                        />

                        <FeatureCard
                            icon={<BsFillGearFill />}
                            title="Easy Installation"
                            description="Hassle-free setup for all servers, ensuring compatibility."
                            isHovered={gearHovered as boolean}
                            eventHandlers={gearEventHandlers}
                        />

                        <FeatureCard
                            icon={<BsSafe2Fill />}
                            title="Trigger Protection"
                            description="Safeguards against event trigger exploits like money hacks."
                            isHovered={safeHovered as boolean}
                            eventHandlers={safeEventHandlers}
                        />

                        <FeatureCard
                            icon={<MdOutlineAdminPanelSettings />}
                            title="Admin Menu"
                            description="Unique 3D-world admin menu. Seamless interaction."
                            isHovered={adminPanelHovered as boolean}
                            eventHandlers={adminPanelEventHandlers}
                            onClick={(e: MouseEvent) => {
                                e.stopPropagation();
                                setAdminMenuVideoVisible(true);
                            }}
                            mediaIcon={
                                <motion.div
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="relative"
                                >
                                    <AiFillPlayCircle
                                        className={`text-2xl md:text-3xl ${(adminPanelHovered as boolean) ? 'text-accent' : 'text-white'}`}
                                    />
                                    <motion.div
                                        animate={{
                                            scale: [1, 1.2, 1],
                                            opacity: [0.7, 1, 0.7]
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            repeatType: 'loop'
                                        }}
                                        className="absolute inset-0 bg-accent/20 rounded-full"
                                        style={{
                                            display: (adminPanelHovered as boolean) ? 'block' : 'none'
                                        }}
                                    />
                                </motion.div>
                            }
                        />
                    </Fade>
                </div>

                {/* Bottom light effect */}
                <div className="w-full mt-16 flex justify-center">
                    <motion.div
                        className="w-32 h-1 bg-accent/20 rounded-full"
                        animate={{
                            opacity: [0.2, 0.5, 0.2],
                            width: ['8rem', '12rem', '8rem']
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            repeatType: 'reverse'
                        }}
                    ></motion.div>
                </div>
            </div>

            {/* Video Modal - Fullscreen with improved UI */}
            {isVideoVisible && (
                <motion.div
                    className='fixed inset-0 flex items-center justify-center z-50 bg-black/90 backdrop-blur-md'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setVideoVisible(false)}
                >
                    <motion.div
                        className="absolute top-5 right-5 z-20"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <motion.button
                            className='bg-black/70 hover:bg-accent/80 text-white p-3 rounded-full transition-colors duration-300'
                            onClick={(e) => {
                                e.stopPropagation();
                                setVideoVisible(false);
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label='Close'
                        >
                            <IoMdClose className="text-2xl" />
                        </motion.button>
                    </motion.div>

                    <motion.div
                        className="relative w-full h-full max-w-7xl max-h-[90vh] mx-5"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="w-full h-full rounded-lg overflow-hidden border border-accent/30 shadow-[0_0_30px_rgba(5,194,201,0.3)]">
                            <iframe
                                src='https://www.youtube.com/embed/SqZ6AQ9pCxI?autoplay=1'
                                className="w-full h-full"
                                title='YouTube video player'
                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                allowFullScreen
                            ></iframe>
                        </div>
                    </motion.div>
                </motion.div>
            )}

            {/* Admin Menu Video Modal - Fullscreen with improved UI */}
            {isAdminMenuVideoVisible && (
                <motion.div
                    className='fixed inset-0 flex items-center justify-center z-50 bg-black/90 backdrop-blur-md'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setAdminMenuVideoVisible(false)}
                >
                    <motion.div
                        className="absolute top-5 right-5 z-20"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <motion.button
                            className='bg-black/70 hover:bg-accent/80 text-white p-3 rounded-full transition-colors duration-300'
                            onClick={(e) => {
                                e.stopPropagation();
                                setAdminMenuVideoVisible(false);
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label='Close'
                        >
                            <IoMdClose className="text-2xl" />
                        </motion.button>
                    </motion.div>

                    <motion.div
                        className="relative w-full h-full max-w-7xl max-h-[90vh] mx-5"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="w-full h-full rounded-lg overflow-hidden border border-accent/30 shadow-[0_0_30px_rgba(5,194,201,0.3)]">
                            <iframe
                                src='https://www.youtube.com/embed/CCMLmXlAGSM?autoplay=1'
                                className="w-full h-full"
                                title='YouTube video player'
                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                allowFullScreen
                            ></iframe>
                        </div>
                    </motion.div>
                </motion.div>
            )}

            {/* Full Screen Image Modal - Fullscreen with improved UI */}
            {isFullScreenImageVisible && (
                <motion.div
                    className='fixed inset-0 flex items-center justify-center z-50 bg-black/90 backdrop-blur-md'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={closeFullScreenImage}
                >
                    <motion.div
                        className="absolute top-5 right-5 z-20"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <motion.button
                            className='bg-black/70 hover:bg-accent/80 text-white p-3 rounded-full transition-colors duration-300'
                            onClick={closeFullScreenImage}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label='Close'
                        >
                            <IoMdClose className="text-2xl" />
                        </motion.button>
                    </motion.div>

                    <motion.div
                        className="relative w-full h-full max-w-[1400px] max-h-[90vh] mx-5 flex items-center justify-center"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={panel}
                            alt='Cloud Panel'
                            className='max-h-full max-w-full object-contain rounded-lg border border-accent/30 shadow-[0_0_30px_rgba(5,194,201,0.3)]'
                        />
                    </motion.div>

                    {/* Caption */}
                    <motion.div
                        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-sm px-6 py-3 rounded-full"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <p className="text-white text-sm font-medium">ADN Cloud Panel Interface</p>
                    </motion.div>
                </motion.div>
            )}

            {/* Bottom decorative light beam */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-[100px] bg-gradient-to-t from-accent/20 to-transparent blur-[30px] opacity-60"></div>
        </section>
    );
};
