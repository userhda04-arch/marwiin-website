import { FC, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaDiscord, FaShieldAlt } from 'react-icons/fa';
import { RiQuestionFill } from 'react-icons/ri';

interface FAQItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
    index: number;
}

const FAQItem: FC<FAQItemProps> = ({ question, answer, isOpen, onClick, index }) => {
    return (
        <motion.div
            className={`backdrop-blur-md border border-accent/10 rounded-xl overflow-hidden mb-2 ${isOpen ? 'bg-secondary/60' : 'bg-secondary/40'} hover:border-accent/30 transition-all duration-300`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <button
                className="py-3 px-4 w-full flex justify-between items-center text-left focus:outline-none group"
                onClick={onClick}
            >
                <div className="flex items-center">
                    <div className={`p-1.5 rounded-lg mr-3 transition-colors duration-300 ${isOpen ? 'bg-accent/20' : 'bg-gray-700/30'}`}>
                        <RiQuestionFill className={`text-sm ${isOpen ? 'text-accent' : 'text-gray-400'} group-hover:text-accent transition-colors duration-300`} />
                    </div>
                    <h3 className="text-base font-medium text-white group-hover:text-accent/90 transition-colors duration-300">{question}</h3>
                </div>
                <motion.div
                    animate={{ 
                        rotate: isOpen ? 180 : 0,
                        backgroundColor: isOpen ? 'rgba(5, 194, 201, 0.2)' : 'rgba(255, 255, 255, 0.05)'
                    }}
                    transition={{ duration: 0.3 }}
                    className="p-1.5 rounded-full"
                >
                    <FaChevronDown className={`text-xs transform transition-colors ${isOpen ? 'text-accent' : 'text-gray-400'}`} />
                </motion.div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-1 h-full bg-accent/50 rounded-r-md"></div>
                        <p className="text-gray-300 text-sm px-4 pl-10 pb-4 pr-6">{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export const FAQ: FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqItems = [
        {
            question: "How does ADN prevent cheating?",
            answer: "ADN uses advanced detection methods to identify cheats, executors, and script injections in real-time. Our technology monitors player behavior patterns and provides immediate notifications when suspicious activity is detected."
        },
        {
            question: "Will ADN impact my server performance?",
            answer: "No, ADN is optimized for minimal performance impact. Our anti-cheat runs efficiently in the background without causing lag or affecting gameplay for legitimate players."
        },
        {
            question: "How hard is it to install ADN?",
            answer: "Installing ADN is a straightforward process. We provide comprehensive documentation and setup guides. Most clients can have it up and running in less than 10 minutes. Our support team is also available to assist with installation."
        },
        {
            question: "Can cheaters bypass ADN?",
            answer: "ADN is continuously updated to counter new cheating methods. While no anti-cheat can claim to be 100% unbeatable, our detection rates are among the highest in the industry, and we constantly improve our technology to stay ahead of cheat developers."
        },
        {
            question: "Does ADN work with custom scripts?",
            answer: "Yes, ADN is designed to work seamlessly with custom scripts and resources. It doesn't interfere with legitimate server functionality while still providing robust protection against malicious activity."
        },
        {
            question: "What happens when a cheater is detected?",
            answer: "When ADN detects a cheater, it can automatically take actions based on your configuration - from logging and alerting, to kicking or banning players. You have full control over how the system responds to different types of cheating behavior."
        },
        {
            question: "What should I do after the purchase?",
            answer: "Once you've made the purchase, head to our online panel and claim the license we sent you through email. Then, you can download ADN and start using it."
        },
        {
            question: "I have multiple servers, how does it work?",
            answer: "You can use one license for one server, but you can change the server's IP address that goes with the license whenever you want. For example, you can switch it to your development server if you need to."
        },
    ];
    

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 relative overflow-hidden" id="faq">
            {/* Background with gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary to-secondary/90 z-0"></div>
            
            {/* Animated particles - fewer and smaller */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                {[...Array(8)].map((_, index) => (
                    <motion.div 
                        key={index}
                        className="absolute bg-accent/5 rounded-full"
                        style={{
                            width: Math.random() * 60 + 30,
                            height: Math.random() * 60 + 30,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`
                        }}
                        animate={{
                            y: [0, Math.random() * 40 - 20],
                            x: [0, Math.random() * 40 - 20],
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
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <Fade cascade damping={0.1}>
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold mb-2 text-white flex justify-center items-center gap-2">
                            <FaShieldAlt className="text-accent text-lg" />
                            <span className="relative">
                                Frequently Asked Questions
                                <motion.span 
                                    className="absolute -bottom-1 left-0 bg-gradient-to-r from-accent/80 to-blue-400/30 h-[2px] rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: '100%' }}
                                    transition={{ duration: 1.5, delay: 0.5 }}
                                ></motion.span>
                            </span>
                        </h2>
                        <p className="text-gray-300 text-sm max-w-2xl mx-auto mt-3">
                            Get answers to common questions about ADN anti-cheat
                        </p>
                    </div>
                </Fade>

                <div className="max-w-3xl mx-auto">
                    {faqItems.map((item, index) => (
                        <FAQItem
                            key={index}
                            question={item.question}
                            answer={item.answer}
                            isOpen={openIndex === index}
                            onClick={() => toggleFAQ(index)}
                            index={index}
                        />
                    ))}
                </div>
                
                <div className="mt-8 text-center">
                    <motion.a
                        href="https://discord.com/invite/3UaHD7DWuK"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#5865F2] px-4 py-2 rounded-lg border border-[#5865F2]/50 hover:border-accent/50 transition-all shadow-[0_0_10px_rgba(88,101,242,0.3)] hover:shadow-[0_0_15px_rgba(5,194,201,0.4)] text-sm"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <FaDiscord className="text-white" />
                        <span className="text-white">Still have questions? Join our Discord</span>
                    </motion.a>
                </div>
            </div>
            
            {/* Smaller bottom decorative light beam */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-accent/5"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-[100px] bg-gradient-to-t from-accent/20 to-transparent blur-[30px] opacity-60"></div>
        </section>
    );
};
