import { FC } from 'react';
import { FaArrowLeft, FaShieldAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Terms: FC = () => {
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
                        <h1 className="text-3xl font-bold text-white">Terms of Service</h1>
                    </div>
                    
                    <div className="space-y-6 text-gray-300">
                        <p>These Terms of Service ("Terms") constitute a legally binding agreement between you ("you" or "Licensee") and MarWiin ("we," "us," "our"), the provider of Anti-Cheat System ("Product" or "Service"). By accessing or using the website, purchasing, or using the software and services provided by us, you agree to abide by these Terms and Conditions. If you do not agree with these Terms, please do not access or use our Service.</p>
                        
                        <p>We reserve the right to update or modify these Terms at any time. Any changes will be effective immediately upon posting on this page, and your continued use of the Service after such changes constitutes acceptance of the new Terms.</p>

                        <h3 className="text-xl font-semibold text-white mb-2">1. License Grant and Restrictions</h3>
                        <p>By purchasing and using our anti-cheat system, you are granted a non-transferable, non-exclusive, revocable license to install and use the Product on your game server(s) under the conditions outlined in these Terms.</p>
                        <p>You may not:</p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>Modify, decompile, reverse-engineer, or disassemble the Product in any manner.</li>
                            <li>Redistribute, sell, lease, or sublicense the Product without prior written consent from MarWiin.</li>
                            <li>Use the Product to create a similar anti-cheat service or software.</li>
                            <li>Share, transfer, or distribute any materials provided as part of the Service, including code, documentation, or configuration files, without authorization.</li>
                            <li>Violate any applicable laws or third-party terms of service while using the Product.</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-white mb-2">2. Account Management</h3>
                        <p>To use our Service, you may need to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. If you believe your account has been compromised, you must notify us immediately.</p>
                        <p>You agree to provide accurate and up-to-date information during the registration process. We reserve the right to suspend or terminate your account if we find that you have provided false or misleading information.</p>

                        <h3 className="text-xl font-semibold text-white mb-2">3. Payment Terms</h3>
                        <p>All payments for the Product must be made via the payment methods available on our site. The prices listed are in euros (€), and payment must be made in full before you can access or use the Product. By purchasing the Product, you acknowledge that the payments are final and non-refundable, except where required by law.</p>

                        <h3 className="text-xl font-semibold text-white mb-2">4. Refund Policy</h3>
                        <p>Given the nature of digital software, all purchases are final and non-refundable. By accepting these Terms, you waive your right of withdrawal as a consumer, in accordance with applicable laws.</p>

                        <h3 className="text-xl font-semibold text-white mb-2">5. License Transfer and Additional Servers</h3>
                        <p>Each license is valid for a single server. If you wish to use the Product on multiple servers, you must purchase additional licenses for each server. Attempting to extend a license to unauthorized servers or otherwise violating the server limit may result in termination of your license without refund.</p>

                        <h3 className="text-xl font-semibold text-white mb-2">6. Usage Restrictions and Prohibited Activities</h3>
                        <p>You agree not to engage in any of the following activities:</p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>Using the Product in a manner that violates any applicable law or regulation.</li>
                            <li>Circumventing or attempting to circumvent any protections or restrictions placed on the Product.</li>
                            <li>Modifying or tampering with the Product's code or any associated resources.</li>
                            <li>Engaging in fraudulent activity, such as chargebacks or attempting to scam the system.</li>
                        </ul>
                        <p>Failure to comply with these restrictions may result in suspension or termination of your license.</p>

                        <h3 className="text-xl font-semibold text-white mb-2">7. Bans and Violations</h3>
                        <p>In the event that a user is banned by our anti-cheat system, those bans are permanent and cannot be lifted. This includes bans for cheat detection or other system violations. If you believe a ban is issued in error, you may contact our support team for further investigation. However, we do not reverse bans related to cheat detection or integrity violations under any circumstances.</p>
                        <p>Additionally, users found to be violating our policies, including aiding others in evading bans or cheating, may face termination of their license, without compensation.</p>

                        <h3 className="text-xl font-semibold text-white mb-2">8. Prohibited Conduct</h3>
                        <p>You agree not to:</p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>Harass, threaten, or engage in inappropriate conduct with MarWiin staff or other users of the Service.</li>
                            <li>Attempt to exploit or abuse our Service for malicious purposes, including attempting to crack, share, or resell the Product without permission.</li>
                            <li>Use the Product in any way that may harm or disrupt other users or server functionality.</li>
                        </ul>
                        <p>Inappropriate conduct may lead to account suspension or termination.</p>

                        <h3 className="text-xl font-semibold text-white mb-2">9. Limitation of Liability</h3>
                        <p>To the fullest extent permitted by law, MarWiin and its affiliates will not be held liable for any damages, losses, or expenses arising out of your use of the Product or Service, including but not limited to lost profits, loss of data, or any indirect, incidental, or consequential damages.</p>
                        <p>We do not guarantee uninterrupted or error-free service, and we are not liable for any interruptions, downtime, or other technical issues that may arise while using the Product.</p>

                        <h3 className="text-xl font-semibold text-white mb-2">10. Privacy and Data Collection</h3>
                        <p>We collect certain personal data to operate and provide the Service, including data such as server information, game identifiers, and user interactions. You consent to our collection and use of this data as described in our Privacy Policy.</p>

                        <h3 className="text-xl font-semibold text-white mb-2">11. Intellectual Property</h3>
                        <p>All intellectual property rights, including but not limited to trademarks, copyrights, and patents related to the Product, are owned by MarWiin. By using our Service, you do not acquire any rights or ownership over the Product or associated intellectual property.</p>

                        <h3 className="text-xl font-semibold text-white mb-2">12. Termination of Service</h3>
                        <p>We reserve the right to suspend or terminate your access to the Product and the Service at any time, with or without cause, and with or without notice. If your license is terminated due to a violation of these Terms, you will not be entitled to a refund.</p>
                        <p>Upon termination, you must cease using the Product and destroy any copies in your possession, whether in electronic or printed form.</p>

                        <h3 className="text-xl font-semibold text-white mb-2">13. Changes to These Terms</h3>
                        <p>We reserve the right to modify these Terms at any time. Changes to the Terms will be posted on our website, and the updated Terms will take effect immediately upon posting. It is your responsibility to review these Terms periodically.</p>

                        <h3 className="text-xl font-semibold text-white mb-2">14. Governing Law and Dispute Resolution</h3>
                        <p>These Terms are governed by the laws of France. Any disputes arising from or related to these Terms will be subject to the exclusive jurisdiction of the courts in France.</p>

                        <h3 className="text-xl font-semibold text-white mb-2">15. Contact Information</h3>
                        <p>If you have any questions or concerns about these Terms, please contact us at: MarWiin.pro@gmail.com</p>
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-gray-700 text-sm text-gray-400">
                        Last Updated: 18th July, 2024
                    </div>
                </div>
            </div>
        </div>
    );
};