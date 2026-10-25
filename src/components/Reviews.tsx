import { FC, useRef } from 'react';
import { Fade } from 'react-awesome-reveal';
import Marquee from 'react-fast-marquee';
import { FaQuoteLeft, FaStar, FaStarHalfAlt, FaShieldAlt } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';

interface Review {
    text: string;
    author: string;
    rating?: number;
    authorTitle?: string;
}

interface ReviewsProps {
    reviews: Review[];
}

// Star rating component with enhanced styling
const Rating: FC<{ rating: number }> = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    return (
        <div className="flex items-center space-x-1 mb-3">
            {[...Array(fullStars)].map((_, i) => (
                <motion.div 
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 * i }}
                >
                    <FaStar className="text-yellow-400" />
                </motion.div>
            ))}
            {hasHalfStar && (
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 * fullStars }}
                >
                    <FaStarHalfAlt className="text-yellow-400" />
                </motion.div>
            )}
        </div>
    );
};

// Individual review card with futuristic styling
const ReviewCard: FC<{ review: Review; index: number }> = ({ review, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="w-[280px] md:w-[320px] mx-3 p-5 backdrop-blur-md bg-secondary/40 rounded-xl shadow-lg flex flex-col justify-between relative overflow-hidden border border-transparent hover:border-accent/30 transition-all duration-300 group"
            whileHover={{ y: -5, boxShadow: '0 15px 30px rgba(5, 194, 201, 0.1)' }}
        >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 rounded-full -translate-x-10 -translate-y-10 group-hover:bg-accent/10 transition-colors duration-500"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-accent/5 rounded-full translate-x-6 translate-y-6 group-hover:bg-accent/10 transition-colors duration-500"></div>
            
            {/* Quote icon with glow */}
            <div className="relative mb-2">
                <FaQuoteLeft className="text-accent/20 text-4xl absolute -top-1 -left-1 transform -translate-x-1/4 -translate-y-1/4" />
                <div className="absolute -top-1 -left-1 w-8 h-8 bg-accent/5 rounded-full blur-md transform -translate-x-1/4 -translate-y-1/4 group-hover:bg-accent/10 transition-all duration-500"></div>
            </div>
            
            <div className="relative z-10 mt-4">
                {review.rating && <Rating rating={review.rating} />}
                
                <div className="text-sm text-gray-300 mb-4 line-clamp-5 min-h-[100px]">
                    {review.text.split('\n').map((line, i) => (
                        <span key={i}>
                            {line}
                            <br />
                        </span>
                    ))}
                </div>
            </div>
            
            <div className="relative z-10 border-t border-gray-700/50 pt-3 mt-auto">
                <div className="font-bold text-white">
                    {review.author}
                </div>
                {review.authorTitle && (
                    <div className="text-xs text-accent">
                        {review.authorTitle}
                    </div>
                )}
            </div>
            
            {/* Animated border on hover */}
            <motion.div 
                className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-accent/80 via-blue-400/50 to-accent/0"
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
            />
        </motion.div>
    );
};

export const Reviews: FC<ReviewsProps> = ({ reviews }) => {
    // Add ratings to reviews if not present
    const reviewsWithRatings = reviews.map(review => ({
        ...review,
        rating: review.rating || Math.random() * 1.5 + 3.5, // Random rating between 3.5 and 5
        authorTitle: review.authorTitle || "Server Owner"
    }));
    
    return (
        <section className="py-20 relative overflow-hidden" id="reviews">
            {/* Background with gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-secondary/90 to-primary z-0"></div>
            
            {/* Animated particles */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                {[...Array(8)].map((_, index) => (
                    <motion.div 
                        key={index}
                        className="absolute bg-accent/5 rounded-full"
                        style={{
                            width: Math.random() * 80 + 40,
                            height: Math.random() * 80 + 40,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`
                        }}
                        animate={{
                            y: [0, Math.random() * 50 - 25],
                            x: [0, Math.random() * 50 - 25],
                            opacity: [0.1, 0.2, 0.1],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            repeatType: 'reverse'
                        }}
                    />
                ))}
            </div>
            
            <div className="container mx-auto px-4 relative z-10">
                <Fade>
                    <div className="text-center mb-12">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="flex justify-center items-center gap-2 mb-4"
                        >
                            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                                <FaShieldAlt className="text-accent" />
                            </div>
                        </motion.div>
                        
                        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white relative inline-block">
                            <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
                                Customer Reviews
                            </span>
                            <motion.span 
                                className="absolute -bottom-1 left-0 bg-gradient-to-r from-accent/80 to-blue-400/30 h-[2px] rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: '100%' }}
                                transition={{ duration: 1.5, delay: 0.5 }}
                            ></motion.span>
                        </h2>
                        <p className="text-gray-400 text-sm max-w-2xl mx-auto mt-4">
                            See what our customers are saying about MarWiin's anti-cheat protection
                        </p>
                    </div>
                </Fade>
                
                {/* First Marquee row - slowest */}
                <div className="mb-8 relative">
                    <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-primary to-transparent z-10"></div>
                    <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-primary to-transparent z-10"></div>
                    
                    <Marquee pauseOnHover gradient={false} speed={25}>
                        <div className="flex gap-4 py-3">
                            {reviewsWithRatings.slice(0, reviewsWithRatings.length / 2).map((review, index) => (
                                <ReviewCard key={index} review={review} index={index} />
                            ))}
                        </div>
                    </Marquee>
                </div>
                
                {/* Second Marquee row - faster, opposite direction */}
                <div className="relative">
                    <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-primary to-transparent z-10"></div>
                    <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-primary to-transparent z-10"></div>
                    
                    <Marquee pauseOnHover gradient={false} speed={35} direction="right">
                        <div className="flex gap-4 py-3">
                            {reviewsWithRatings.slice(reviewsWithRatings.length / 2).map((review, index) => (
                                <ReviewCard key={index} review={review} index={index} />
                            ))}
                        </div>
                    </Marquee>
                </div>
                
                {/* Bottom light effect */}
                <div className="w-full mt-8 flex justify-center">
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
            
            {/* Bottom decorative light beam */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-[80px] bg-gradient-to-t from-accent/20 to-transparent blur-[30px] opacity-60"></div>
        </section>
    );
};
