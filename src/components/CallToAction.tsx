import { FC, useRef } from 'react';
import { Fade } from 'react-awesome-reveal';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { FaShieldAlt, FaDiscord, FaShoppingCart } from 'react-icons/fa';

export const CallToAction: FC = () => {
    // For mouse-follow effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const containerRef = useRef<HTMLDivElement>(null);
    
    // Transform mouse position into subtle movement values
    const rotateX = useTransform(mouseY, [0, 300], [2, -2]);
    const rotateY = useTransform(mouseX, [0, 500], [-2, 2]);
    
    // Handle mouse movement for container
    const handleMouseMove = (e: React.MouseEvent) => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            mouseX.set(e.clientX - rect.left);
            mouseY.set(e.clientY - rect.top);
        }
    };
    
    // Smooth scroll to pricing section
    const scrollToPricing = (e: React.MouseEvent) => {
        e.preventDefault();
        const pricingSection = document.getElementById('pricing');
        if (pricingSection) {
            pricingSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    return (
        <section className="py-20 md:py-24 relative overflow-hidden" id="contact">
            {/* Background with gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-secondary via-secondary/90 to-primary z-0" />
            
            {/* Animated floating particles */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                {[...Array(15)].map((_, index) => (
                    <motion.div 
                        key={index}
                        className="absolute bg-accent/10 rounded-full"
                        style={{
                            width: Math.random() * 120 + 40,
                            height: Math.random() * 120 + 40,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            filter: "blur(20px)"
                        }}
                        animate={{
                            y: [0, Math.random() * 60 - 30],
                            opacity: [0.1, 0.3, 0.1],
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 15,
                            repeat: Infinity,
                            repeatType: 'reverse'
                        }}
                    />
                ))}
            </div>
            
            {/* Content Container */}
            <div className="container mx-auto px-4 relative z-10">
                <div 
                    ref={containerRef} 
                    onMouseMove={handleMouseMove}
                    className="relative mx-auto rounded-2xl overflow-hidden shadow-2xl"
                >
                    <motion.div 
                        className="bg-secondary/30 backdrop-blur-xl border border-accent/20"
                        style={{ 
                            rotateX,
                            rotateY,
                            perspective: 1000
                        }}
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
                            {/* Left Content - Call to Action */}
                            <div className="p-8 md:p-12 flex flex-col justify-center">
                                <Fade cascade damping={0.2}>
                                    <div className="flex items-center mb-6">
                                        <div className="relative">
                                            <motion.div 
                                                className="bg-accent/20 p-3 rounded-full"
                                                whileHover={{ scale: 1.05 }}
                                                animate={{ 
                                                    boxShadow: ["0 0 0 0 rgba(5, 194, 201, 0)", "0 0 0 10px rgba(5, 194, 201, 0.2)", "0 0 0 0 rgba(5, 194, 201, 0)"] 
                                                }}
                                                transition={{ 
                                                    duration: 2,
                                                    repeat: Infinity
                                                }}
                                            >
                                                <FaShieldAlt className="text-accent text-3xl" />
                                            </motion.div>
                                        </div>
                                        <h2 className="text-3xl md:text-4xl font-bold ml-4 bg-gradient-to-r from-white via-accent to-white bg-clip-text text-transparent">
                                            Ready to Secure Your Server?
                                        </h2>
                                    </div>
                                    
                                    <p className="text-gray-300 text-lg mb-8 max-w-xl">
                                        Join our Discord community to get started with ADN. Our team is ready to help you set up the perfect anti-cheat solution for your server.
                                    </p>
                                    
                                    <div className="mb-8">
                                        <motion.h3 
                                            className="text-xl font-semibold mb-4 inline-block"
                                            animate={{
                                                borderBottom: ["2px solid rgba(5, 194, 201, 0)", "2px solid rgba(5, 194, 201, 1)", "2px solid rgba(5, 194, 201, 0)"]
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity
                                            }}
                                        >
                                            Why join our community?
                                        </motion.h3>
                                        
                                        <ul className="space-y-3">
                                            {[
                                                "Get direct access to our technical support team",
                                                "Connect with other server owners using ADN",
                                                "Purchase and activate your ADN license",
                                                "Stay updated with the latest security features"
                                            ].map((benefit, index) => (
                                                <motion.li 
                                                    key={index}
                                                    className="flex items-start"
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.1 }}
                                                >
                                                    <div className="bg-accent/20 p-1 rounded-full mt-1 mr-3">
                                                        <svg className="w-3 h-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                        </svg>
                                                    </div>
                                                    <span className="text-gray-300">{benefit}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>
                                    
                                    {/* Action Buttons Group */}
                                    <div className="flex flex-col sm:flex-row gap-4 mt-2">
                                        {/* Discord Button */}
                                        <motion.a
                                            href="https://discord.com/invite/3UaHD7DWuK"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-6 py-3 bg-[#5865F2] text-white font-medium rounded-lg shadow-lg relative overflow-hidden group w-full sm:w-auto justify-center"
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            {/* Shine effect */}
                                            <motion.div 
                                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                                                initial={{ x: "-100%" }}
                                                animate={{ x: "200%" }}
                                                transition={{ 
                                                    repeat: Infinity,
                                                    repeatType: "loop",
                                                    duration: 1.5,
                                                    repeatDelay: 3
                                                }}
                                            />
                                            
                                            <FaDiscord className="mr-2 text-xl" />
                                            <span className="font-semibold">Join Our Discord</span>
                                        </motion.a>
                                        
                                        {/* Purchase Button - Modified to scroll to pricing */}
                                        <motion.a
                                            href="#pricing"
                                            onClick={scrollToPricing}
                                            className="inline-flex items-center px-6 py-3 bg-accent text-white font-medium rounded-lg shadow-lg relative overflow-hidden group w-full sm:w-auto justify-center"
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            {/* Shine effect */}
                                            <motion.div 
                                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                                                initial={{ x: "-100%" }}
                                                animate={{ x: "200%" }}
                                                transition={{ 
                                                    repeat: Infinity,
                                                    repeatType: "loop",
                                                    duration: 1.5,
                                                    repeatDelay: 3
                                                }}
                                            />
                                            
                                            <FaShoppingCart className="mr-2 text-xl" />
                                            <span className="font-semibold">View Pricing Plans</span>
                                        </motion.a>
                                    </div>
                                </Fade>
                            </div>
                            
                            {/* Right Content - Discord Widget */}
                            <div className="flex items-center justify-center p-6 md:p-8 bg-gray-800/30 relative">
                                {/* Corner accent decorations */}
                                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                                    <div className="absolute top-0 right-0 w-24 h-2 bg-accent/30 transform rotate-45 origin-top-right" />
                                </div>
                                <div className="absolute bottom-0 left-0 w-16 h-16 overflow-hidden">
                                    <div className="absolute bottom-0 left-0 w-24 h-2 bg-accent/30 transform rotate-45 origin-bottom-left" />
                                </div>
                                
                                {/* Discord widget with animated border */}
                                <motion.div 
                                    className="w-full h-full relative rounded-xl overflow-hidden shadow-lg border border-accent/30"
                                    whileHover={{ scale: 1.01 }}
                                    animate={{
                                        boxShadow: [
                                            "0 0 20px 0 rgba(5, 194, 201, 0.1)",
                                            "0 0 20px 0 rgba(5, 194, 201, 0.3)",
                                            "0 0 20px 0 rgba(5, 194, 201, 0.1)"
                                        ]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity
                                    }}
                                >
                                    <iframe 
                                        src="https://discordapp.com/widget?id=733819615318245446&theme=dark" 
                                        width="100%" 
                                        height="100%" 
                                        style={{ minHeight: "500px" }}
                                        allowTransparency={true} 
                                        frameBorder="0" 
                                        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                                        className="rounded-xl"
                                        title="ADN Discord"
                                    ></iframe>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                    
                    {/* Animated accent lines */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        {[...Array(3)].map((_, index) => {
                            const topPosition = 20 + index * 25;
                            const delay = index * 0.7;
                            
                            return (
                                <motion.div 
                                    key={index}
                                    className="absolute h-px bg-accent/30 w-full left-0"
                                    style={{ top: `${topPosition}%` }}
                                    initial={{ scaleX: 0, opacity: 0 }}
                                    animate={{ 
                                        scaleX: [0, 1, 1, 0],
                                        opacity: [0, 0.5, 0.5, 0],
                                        left: ["0%", "0%", "0%", "100%"]
                                    }}
                                    transition={{ 
                                        duration: 6,
                                        times: [0, 0.4, 0.6, 1],
                                        repeat: Infinity,
                                        delay: delay,
                                        repeatDelay: 1
                                    }}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
            
            {/* Radial gradient overlay */}
            <div className="absolute inset-0 bg-gradient-radial from-transparent to-primary/70 pointer-events-none"></div>
        </section>
    );
};
