import { FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaDiscord, FaBars, FaTimes } from 'react-icons/fa';
import logoImage from '../assets/logo.png'; // Import the logo image

interface NavLinkProps {
    href: string;
    label: string;
    onClick?: () => void;
}

const NavLink: FC<NavLinkProps> = ({ href, label, onClick }) => (
    <a 
        href={href} 
        onClick={onClick}
        className="relative px-3 py-2 group"
    >
        <span className="relative z-10">{label}</span>
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
    </a>
);

const Navbar: FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
    const closeMobileMenu = () => setMobileMenuOpen(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/80 backdrop-blur-lg border-b border-white/10">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    {/* Replace FaShieldAlt icon with the logo image */}
                    <a href="#" className="flex items-center">
                        <img 
                            src={logoImage} 
                            alt="MarWiin" 
                            className="h-10 w-auto mr-3"
                        />
                        <span className="text-white font-bold text-xl">MarWiin</span>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-1">
                        <NavLink href="#home" label="Home" />
                        <NavLink href="#features" label="Features" />
                        <NavLink href="#pricing" label="Pricing" />
                        <NavLink href="#reviews" label="Reviews" />
                        <NavLink href="#faq" label="FAQ" />
                        
                        <motion.a 
                            href="https://discord.com/invite/3UaHD7DWuK" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="ml-3 px-5 py-2 bg-[#5865F2] text-white rounded-md shadow-md hover:bg-[#4752c4] transition-all flex items-center gap-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <FaDiscord /> Join Discord
                        </motion.a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button 
                        className="md:hidden text-white focus:outline-none"
                        onClick={toggleMobileMenu}
                        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                    >
                        {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div 
                        className="md:hidden bg-secondary/95 backdrop-blur-lg"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="container mx-auto px-4 py-5 flex flex-col space-y-4">
                            <NavLink href="#home" label="Home" onClick={closeMobileMenu} />
                            <NavLink href="#features" label="Features" onClick={closeMobileMenu} />
                            <NavLink href="#pricing" label="Pricing" onClick={closeMobileMenu} />
                            <NavLink href="#reviews" label="Reviews" onClick={closeMobileMenu} />
                            <NavLink href="#faq" label="FAQ" onClick={closeMobileMenu} />
                            <a 
                                href="https://discord.com/invite/3UaHD7DWuK" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="px-5 py-2 bg-[#5865F2] text-white rounded-md text-center flex items-center gap-2 justify-center"
                                onClick={closeMobileMenu}
                            >
                                <FaDiscord /> Join Discord
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;