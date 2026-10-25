import { FC, useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';
import { motion } from 'framer-motion';
import { BsCheckLg, BsXLg } from 'react-icons/bs';

const USE_TEBEX = false;
const USE_SELLIX = false;
const USE_SHOPIFY = true;

type PurchaseButtonProps = {
    licenseType: string;
};

interface FeatureProps {
    text: string;
    included: boolean;
}

interface PlanProps {
    name: string;
    price: string;
    description: string;
    features: { text: string, included: boolean }[];
    isPopular?: boolean;
    licenseType: string;
}

export const Pricing: FC = () => {
    // Define plans data
    const monthlyFeatures = [
        { text: "1 month license", included: true },
        { text: "All ADN features", included: true },
        { text: "Instant delivery and installation", included: true },
        { text: "Online cloud panel", included: true },
    ];

    const quarterlyFeatures = [
        { text: "3 months license", included: true },
        { text: "All ADN features", included: true },
        { text: "Instant delivery and installation", included: true },
        { text: "Online cloud panel", included: true },
    ];

    const lifetimeFeatures = [
        { text: "Forever license", included: true },
        { text: "All ADN features", included: true },
        { text: "Instant delivery and installation", included: true },
        { text: "Online cloud panel", included: true },
    ];

    // Revised premium features with shorter, cleaner descriptions
    const premiumFeatures = [
        { text: "Lifetime access on all your license keys", included: true },
        { text: "Exclusive premium-only features", included: true },
        { text: "Expert installation & configuration", included: true },
        { text: "Priority support & account protection", included: true },
        { text: "Discounts on additional servers", included: true },
    ];

    // Discord invite link
    const discordLink = "https://discord.com/invite/3UaHD7DWuK";

    const PurchaseButton: React.FC<PurchaseButtonProps> = ({ licenseType }) => {
        if (USE_SHOPIFY) {
            const productId: string = "14972232171903"
            const variantIds: { [key: string]: string } = {
                "monthly": "55176562147711",
                "quarterly": "55176562180479",
                "lifetime": "55176562213247",
                "premium": "55176562246015",
            }

            useEffect(() => {
                const scriptURL =
                    "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";

                function loadShopifyBuySDK() {
                    if (!document.getElementById("shopify-buy-button-script")) {
                        const script = document.createElement("script");
                        script.id = "shopify-buy-button-script";
                        script.async = true;
                        script.src = scriptURL;
                        document.head.appendChild(script);
                        script.onload = initializeShopifyClient;
                    } else if ((window as any).ShopifyBuy) {
                        initializeShopifyClient();
                    }
                }

                function initializeShopifyClient() {
                    if (!(window as any).ShopifyBuy) return;
                    (window as any).shopifyClient = (window as any).ShopifyBuy.buildClient({
                        domain: "e0bsni-wu.myshopify.com",
                        storefrontAccessToken: "c025ae22125e923685594dfdf474efa1",
                    });
                }

                loadShopifyBuySDK();
            }, []);

            const Purchase = async (variantId: string) => {
                if (!(window as any).ShopifyBuy || !(window as any).shopifyClient) {
                    console.error("ShopifyBuy client not initialized");
                    return;
                }

                try {
                    const formattedId = btoa(`gid://shopify/Product/${productId}`);
                    const product = await (window as any).shopifyClient.product.fetch(formattedId);
                    if (product) {
                        const lineItems = [{ variantId: `gid://shopify/ProductVariant/${variantId}`, quantity: 1 }];

                        const checkout = await (window as any).shopifyClient.checkout.create();
                        await (window as any).shopifyClient.checkout.addLineItems(
                            checkout.id,
                            lineItems
                        );

                        window.open(checkout.webUrl, '_blank', 'width=500,height=600');
                    }
                } catch (error) {
                    console.error("Error adding product to cart:", error);
                }
            }

            return (
                <button
                    className='mt-7 w-10/12 py-3 text-center transition-colors cursor-pointer rounded-full px-7 text-black hover:opacity-95 bg-accent'
                    onClick={() => {
                        Purchase(variantIds[licenseType]);
                    }}
                >
                    Purchase
                </button>
            );
        } else if (USE_SELLIX) {
            const productIds: { [key: string]: string } = {
                "monthly": "7a039983-885a-41e9-9ba3-9bbb548818c9",
                "quarterly": "f7cfea45-4cc9-4dad-9279-4f03cfc5e489",
                "lifetime": "910bbeaf-5c42-44af-8dbe-0da79675643e",
                "premium": "e5effd1b-47dc-4449-b44a-97f51e80f288",
            }

            return (
                <button
                    className='mt-7 w-10/12 py-3 text-center transition-colors cursor-pointer rounded-full px-7 text-black hover:opacity-95 bg-accent'
                    onClick={() => {
                        (window as any).initializeSellSnEmbed();
                        (window as any).openSellSnModal('48ce03d0-d899-4b82-a9b6-6e19a167b6f4', productIds[licenseType]);
                    }}
                >
                    Purchase
                </button>
            );
        } else if (USE_TEBEX) {
            return (
                <a
                    href='https://waveresources.tebex.io/category/ADN'
                    target='_blank'
                    rel="noopener noreferrer"
                    className='mt-7 w-10/12 py-3 text-center transition-colors cursor-pointer rounded-full px-7 text-black hover:opacity-95 bg-accent'
                >
                    Purchase
                </a>
            );
        }
    }

    // Feature component with larger text
    const Feature: FC<FeatureProps> = ({ text, included }) => (
        <div className='flex items-center mt-2.5'>
            {included ? (
                <BsCheckLg className='text-accent text-base' />
            ) : (
                <BsXLg className='text-[#4f617a] text-base' />
            )}
            <p className='ml-2.5 text-base'>{text}</p>
        </div>
    );

    // Plan component with futuristic effect
    const FuturisticPlan: FC<PlanProps> = ({ name, price, description, features, isPopular = false, licenseType }) => {
        return (
            <motion.div
                className={`relative bg-secondary/60 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg shadow-accent/5 border ${isPopular ? 'border-accent/50' : 'border-gray-700/50 hover:border-accent/30'
                    } transition-all duration-300`}
                whileHover={{ translateY: -5, boxShadow: isPopular ? '0 10px 25px -5px rgba(5, 194, 201, 0.3)' : '0 10px 25px -5px rgba(5, 194, 201, 0.15)' }}
                transition={{ duration: 0.3 }}
            >
                {isPopular && (
                    <div className="absolute top-0 right-0">
                        <div className="bg-accent text-sm uppercase font-bold tracking-wide py-1 px-3 rounded-bl-lg shadow-md">
                            Popular
                        </div>
                    </div>
                )}

                <div className="p-6 flex flex-col items-center h-full">
                    <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
                    <p className="text-gray-400 mb-4 text-center text-base">{description}</p>

                    <div className="flex items-baseline mb-5">
                        <span className="text-3xl font-extrabold text-white">{price}</span>
                        <span className="text-gray-400 ml-2 text-sm">{name === "Monthly" ? "/month" : name === "Quarterly" ? "/quarter" : "one-time"}</span>
                    </div>

                    <div className="space-y-2 w-full flex-grow mb-5">
                        {features.map((feature, index) => (
                            <Feature key={index} text={feature.text} included={feature.included} />
                        ))}
                    </div>

                    <div className="flex flex-col items-center w-full">
                        <PurchaseButton licenseType={licenseType} />
                    </div>
                </div>

                {/* Add subtle gradient overlay for futuristic effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-accent/5 pointer-events-none"></div>
            </motion.div>
        );
    };

    return (
        <section className="py-12 bg-primary" id="pricing">
            <div className="container mx-auto px-5 max-w-6xl">
                <Fade cascade damping={0.1}>
                    <div className="text-center mb-10">
                        <h2 className="text-4xl font-bold mb-4 text-white">
                            <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent animate-spin-slow bg-[length:200%_auto]">
                                Pricing Plans
                            </span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Choose the perfect protection level for your server.
                        </p>
                    </div>
                </Fade>

                {/* Main Plans */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
                    <Fade cascade direction="up" damping={0.2} triggerOnce>
                        <FuturisticPlan
                            name="Monthly"
                            price="€5.00"
                            description="Protection for 1 month"
                            features={monthlyFeatures}
                            licenseType="monthly"
                        />

                        <FuturisticPlan
                            name="Quarterly"
                            price="€15.00"
                            description="Protection for 3 months"
                            features={quarterlyFeatures}
                            licenseType="quarterly"
                        />

                        <FuturisticPlan
                            name="Lifetime"
                            price="€25.00"
                            description="Permanent with cloud panel"
                            features={lifetimeFeatures}
                            isPopular={true}
                            licenseType="lifetime"
                        />
                    </Fade>
                </div>

                {/* Premium Addon - Improved layout */}
                <Fade direction="up" triggerOnce>
                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-700/50"></div>
                        </div>
                        <div className="relative flex justify-center">
                            <span className="bg-primary px-5 text-lg text-gray-400">Premium Addon</span>
                        </div>
                    </div>

                    <div className="bg-secondary/60 backdrop-blur-sm border border-accent/30 rounded-xl overflow-hidden shadow-xl shadow-accent/10 relative">
                        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-5 items-center">
                            <div className="md:col-span-2">
                                <div className="flex items-center mb-4">
                                    <div className="bg-accent/20 p-2.5 rounded-full mr-4">
                                        <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zm7-10a1 1 0 01.707.293l.707.707L15.414 5a1 1 0 11-1.414 1.414L13 5.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707 1.414-1.414A1 1 0 0112 2zm0 10a1 1 0 01.707.293l.707.707 1.414-1.414a1 1 0 111.414 1.414l-1.414 1.414-.707.707a1 1 0 01-1.414-1.414l.707-.707 1.414-1.414A1 1 0 0112 12z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-white">Premium Addon <span className="ml-2 text-sm bg-accent/20 text-accent px-3 py-1 rounded-full">ENHANCE YOUR EXPERIENCE</span></h3>
                                </div>

                                {/* Feature list with improved spacing and sizing */}
                                <ul className="grid md:grid-cols-1 lg:grid-cols-2 gap-y-3 gap-x-6 mb-4">
                                    {premiumFeatures.map((feature, index) => (
                                        <li key={index} className="flex items-center">
                                            <svg className="w-5 h-5 text-accent flex-shrink-0 mr-2.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-base whitespace-normal">{feature.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-secondary/90 rounded-lg p-5 flex flex-col items-center text-center border border-accent/30 shadow-lg shadow-accent/5">
                                <div className="text-2xl font-bold mb-2 text-white"></div>
                                <p className="text-gray-400 mb-4 text-base">€35.00 One-time payment</p>
                                <div className="w-full flex flex-col items-center">
                                    <PurchaseButton licenseType="premium" />
                                </div>
                            </div>
                        </div>

                        {/* Add subtle gradient overlay for futuristic effect */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-accent/5 pointer-events-none"></div>
                    </div>
                </Fade>

                <div className="mt-5 text-center">
                    <p className="text-gray-400 text-base">
                        Need a custom solution? <a href={discordLink} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Join our Discord</a>.
                    </p>
                </div>
            </div>
        </section>
    );
};
