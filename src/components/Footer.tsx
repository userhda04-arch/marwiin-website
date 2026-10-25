import { FC } from 'react';
import { FaShieldAlt, FaDiscord } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Footer: FC = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="bg-secondary pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand Column */}
                    <div className="col-span-1">
                        <motion.div 
                            className="flex items-center mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <FaShieldAlt className="text-accent text-2xl mr-2" />
                            <h3 className="text-xl font-bold text-white">ADN</h3>
                        </motion.div>
                        <motion.p 
                            className="text-gray-400 mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            The ultimate anti-cheat solution for your servers. Keeping your community fair and secure.
                        </motion.p>
                        <motion.div 
                            className="flex space-x-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <motion.a 
                                href="https://discord.com/invite/3UaHD7DWuK" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-[#5865F2] hover:opacity-80 transition-opacity"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaDiscord size={24} />
                            </motion.a>
                        </motion.div>
                    </div>
                    
                    {/* Quick Links */}
                    <div>
                        <motion.h4 
                            className="text-lg font-semibold text-white mb-6 relative inline-block"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            Quick Links
                            <motion.span 
                                className="absolute bottom-0 left-0 w-full h-[2px] bg-accent/50"
                                initial={{ width: 0 }}
                                whileInView={{ width: '100%' }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.3 }}
                            ></motion.span>
                        </motion.h4>
                        <ul className="space-y-3">
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                <a href="#home" className="text-gray-400 hover:text-accent transition-colors flex items-center">
                                    <span className="bg-accent/10 w-1.5 h-1.5 rounded-full mr-2"></span>
                                    Home
                                </a>
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <a href="#features" className="text-gray-400 hover:text-accent transition-colors flex items-center">
                                    <span className="bg-accent/10 w-1.5 h-1.5 rounded-full mr-2"></span>
                                    Features
                                </a>
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <a href="#pricing" className="text-gray-400 hover:text-accent transition-colors flex items-center">
                                    <span className="bg-accent/10 w-1.5 h-1.5 rounded-full mr-2"></span>
                                    Pricing
                                </a>
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <a href="#reviews" className="text-gray-400 hover:text-accent transition-colors flex items-center">
                                    <span className="bg-accent/10 w-1.5 h-1.5 rounded-full mr-2"></span>
                                    Reviews
                                </a>
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                <a href="#faq" className="text-gray-400 hover:text-accent transition-colors flex items-center">
                                    <span className="bg-accent/10 w-1.5 h-1.5 rounded-full mr-2"></span>
                                    FAQ
                                </a>
                            </motion.li>
                        </ul>
                    </div>
                    
                    {/* Legal */}
                    <div>
                        <motion.h4 
                            className="text-lg font-semibold text-white mb-6 relative inline-block"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            Legal
                            <motion.span 
                                className="absolute bottom-0 left-0 w-full h-[2px] bg-accent/50"
                                initial={{ width: 0 }}
                                whileInView={{ width: '100%' }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.3 }}
                            ></motion.span>
                        </motion.h4>
                        <ul className="space-y-3">
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                <Link to="/terms" className="text-gray-400 hover:text-accent transition-colors flex items-center group">
                                    <span className="bg-accent/10 w-1.5 h-1.5 rounded-full mr-2 group-hover:bg-accent transition-colors"></span>
                                    Terms of Service
                                </Link>
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <Link to="/privacy" className="text-gray-400 hover:text-accent transition-colors flex items-center group">
                                    <span className="bg-accent/10 w-1.5 h-1.5 rounded-full mr-2 group-hover:bg-accent transition-colors"></span>
                                    Privacy Policy
                                </Link>
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <Link to="/refund" className="text-gray-400 hover:text-accent transition-colors flex items-center group">
                                    <span className="bg-accent/10 w-1.5 h-1.5 rounded-full mr-2 group-hover:bg-accent transition-colors"></span>
                                    Refund Policy
                                </Link>
                            </motion.li>
                        </ul>
                    </div>
                </div>
                
                <motion.div 
                    className="border-t border-gray-800 mt-12 pt-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-500 text-sm">
                            &copy; {currentYear} ADN. All rights reserved.
                        </p>
                        
                        <div className="mt-4 md:mt-0">
                            <motion.a
                                href="https://discord.com/invite/3UaHD7DWuK"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-5 py-2 bg-[#5865F2] text-white rounded-md flex items-center gap-2 hover:bg-[#4752c4] transition-colors shadow-lg hover:shadow-[#5865F2]/20"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaDiscord /> Join Discord
                            </motion.a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};
