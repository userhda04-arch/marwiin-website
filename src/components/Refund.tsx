import { FC } from 'react';
import { FaArrowLeft, FaShieldAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Refund: FC = () => {
    return (
        <div className="bg-primary min-h-screen">
            <div className="container mx-auto px-4 py-16">
                <Link to="/" className="flex items-center text-accent mb-8 hover:opacity-80 transition-opacity">
                    <FaArrowLeft className="mr-2" /> Back to Home
                </Link>
                
                <div className="bg-secondary/80 backdrop-blur-md border border-accent/20 rounded-xl p-8 shadow-2xl">
                    <div className="flex items-center mb-6">
                        <div className="p-2 bg-accent/20 rounded-full mr-3">
                            <FaShieldAlt className="w-6 h-6 text-accent" />
                        </div>
                        <h1 className="text-3xl font-bold text-white">Refund Policy</h1>
                    </div>
                    
                    <div className="space-y-6 text-gray-300">
                        <p>This Refund Policy outlines our procedures and guidelines regarding refunds for ADN anti-cheat services. By purchasing our products, you acknowledge and agree to this policy.</p>

                        <h3 className="text-xl font-semibold text-white mb-2">1. No-Refund Policy</h3>
                        <p>As outlined in our Terms of Service (Section 4), given the nature of digital software and services:</p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>All purchases of ADN licenses are final and non-refundable.</li>
                            <li>By purchasing our service, you waive your right of withdrawal as a consumer, in accordance with applicable laws.</li>
                            <li>Once a license key has been delivered, no refunds will be processed regardless of usage.</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-white mb-2">2. Reasoning for No-Refund Policy</h3>
                        <p>Our no-refund policy exists because ADN is a digital product that cannot be returned once delivered. Additionally, due to the nature of anti-cheat software, allowing refunds could potentially be exploited by individuals seeking to examine our systems temporarily without commitment.</p>

                        <h3 className="text-xl font-semibold text-white mb-2">3. Technical Support</h3>
                        <p>While we do not offer refunds, we are committed to providing comprehensive technical support to ensure our service functions correctly on your server. If you encounter any issues with installation, configuration, or operation of ADN, our support team is available to assist you via our Discord server.</p>

                        <h3 className="text-xl font-semibold text-white mb-2">4. License Transfers</h3>
                        <p>Instead of refunds, we may, at our sole discretion, allow for license transfers between servers. Please note that each license is valid for a single server only, and attempting to use a license on multiple servers simultaneously violates our Terms of Service and may result in license termination.</p>

                        <h3 className="text-xl font-semibold text-white mb-2">5. Billing Errors or Unauthorized Charges</h3>
                        <p>In cases of billing errors, duplicate charges, or unauthorized purchases, please contact us immediately at ADN.pro@gmail.com with evidence of the error. Such cases will be reviewed individually, and appropriate action will be taken according to applicable laws and payment processor policies.</p>

                        <h3 className="text-xl font-semibold text-white mb-2">6. Evaluation Before Purchase</h3>
                        <p>We encourage all potential customers to thoroughly review our service offerings, system requirements, and compatibility information before making a purchase. Join our Discord community to ask questions and get a clear understanding of our product before buying.</p>

                        <h3 className="text-xl font-semibold text-white mb-2">7. Force Majeure</h3>
                        <p>ADN will not be liable for any failure or delay in performance resulting from causes beyond our reasonable control, including but not limited to acts of God, natural disasters, pandemic, war, terrorism, riots, embargoes, acts of civil or military authorities, fire, floods, accidents, network infrastructure failures, strikes, or shortages of transportation facilities, fuel, energy, labor, or materials.</p>

                        <h3 className="text-xl font-semibold text-white mb-2">8. Contact Information</h3>
                        <p>If you have questions about this Refund Policy or need to discuss a specific purchase situation, please contact us at ADN.pro@gmail.com or through our Discord server at <a href="https://discord.com/invite/3UaHD7DWuK" className="text-accent hover:underline">https://discord.com/invite/3UaHD7DWuK</a>.</p>
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-gray-700 text-sm text-gray-400">
                        Last Updated: 18th July, 2024
                    </div>
                </div>
            </div>
        </div>
    );
};
