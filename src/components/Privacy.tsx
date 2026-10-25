import { FC } from 'react';
import { FaArrowLeft, FaShieldAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Privacy: FC = () => {
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
                        <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
                    </div>
                    
                    <div className="space-y-6 text-gray-300">
                        <p>MarWiin ("we", "us", "our") values the privacy of our users ("you", "your") and is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, store, and protect your personal data when you visit our website https://MarWiin.xyz and purchase anti-cheats software licenses from us. By using our website, you agree to the collection and use of information in accordance with this Privacy Policy.</p>

                        <h3 className="text-xl font-semibold text-white mb-2">1. Information We Collect</h3>
                        <p>We collect the following types of information when you visit our website or make a purchase:</p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li><strong>Personal Identification Information:</strong> Name, email address, billing address, shipping address, and payment details.</li>
                            <li><strong>Technical Data:</strong> IP address, browser type and version, device information, operating system, and information about your use of our website (e.g., pages visited, time spent on the website, and interactions with our content).</li>
                            <li><strong>Transaction Data:</strong> Payment information, order history, and product-related data related to your software license purchases.</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-white mb-2">2. How We Use Your Information</h3>
                        <p>We use the information we collect in the following ways:</p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>To process and fulfill your orders, including delivering software licenses.</li>
                            <li>To send order confirmations, updates, and customer support communications.</li>
                            <li>To improve and personalize your experience on our website.</li>
                            <li>To send marketing and promotional content (if you opt-in to receive these communications).</li>
                            <li>To comply with legal obligations and resolve disputes.</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-white mb-2">3. Legal Basis for Processing Your Data</h3>
                        <p>Under the General Data Protection Regulation (GDPR), we process your personal data based on the following legal grounds:</p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li><strong>Performance of a contract:</strong> To fulfill your purchase of software licenses and process payments.</li>
                            <li><strong>Consent:</strong> To send marketing emails or other communications, where you have opted in.</li>
                            <li><strong>Legitimate interests:</strong> To improve our website and business operations, ensure security, and prevent fraud.</li>
                            <li><strong>Legal obligations:</strong> To comply with applicable laws and regulations.</li>
                        </ul>
                        <h3 className="text-xl font-semibold text-white mb-2">4. How We Protect Your Information</h3>
                        <p>We use industry-standard security measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction. This includes the use of encryption, secure payment processing, and regular security audits. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.</p>

                        <h3 className="text-xl font-semibold text-white mb-2">5. Cookies and Tracking Technologies</h3>
                        <p>We use cookies and similar tracking technologies to improve your experience on our website. Cookies help us analyze web traffic, personalize content, and provide social media features. You can choose to disable cookies through your browser settings, but doing so may affect the functionality of our website.</p>

                        <h3 className="text-xl font-semibold text-white mb-2">6. Sharing Your Information</h3>
                        <p>We do not sell, rent, or trade your personal information. However, we may share your data with third-party service providers for the following purposes:</p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>Payment processing services.</li>
                            <li>Email marketing platforms (if you have consented to marketing communications).</li>
                            <li>Hosting services, website analytics, and customer support platforms.</li>
                        </ul>
                        <p>We require all third parties to handle your data securely and only in accordance with our instructions.</p>

                        <h3 className="text-xl font-semibold text-white mb-2">7. International Transfers</h3>
                        <p>Since we operate globally, your personal data may be transferred and processed in countries outside of your country of residence. If you are located in the European Economic Area (EEA) or other jurisdictions with data protection laws, we will ensure that your data is transferred in compliance with applicable laws, including the use of standard contractual clauses or other lawful transfer mechanisms.</p>

                        <h3 className="text-xl font-semibold text-white mb-2">8. Your Data Protection Rights</h3>
                        <p>Under the GDPR and other applicable data protection laws, you have the following rights regarding your personal data:</p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li><strong>Access:</strong> You can request access to the personal data we hold about you.</li>
                            <li><strong>Correction:</strong> You can request that we correct any inaccurate or incomplete personal data.</li>
                            <li><strong>Deletion:</strong> You can request that we delete your personal data, subject to certain exceptions.</li>
                            <li><strong>Restriction of processing:</strong> You can request that we limit the processing of your personal data under certain circumstances.</li>
                            <li><strong>Portability:</strong> You can request a copy of your personal data in a structured, machine-readable format.</li>
                            <li><strong>Objection:</strong> You can object to the processing of your personal data, particularly in relation to direct marketing.</li>
                        </ul>
                        <p>To exercise any of these rights, please contact us at MarWiin.pro@gmail.com. You also have the right to lodge a complaint with a supervisory authority, particularly in the European Union.</p>

                        <h3 className="text-xl font-semibold text-white mb-2">9. Data Retention</h3>
                        <p>We will retain your personal data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, including for the purposes of satisfying any legal, accounting, or reporting requirements.</p>

                        <h3 className="text-xl font-semibold text-white mb-2">10. Third-Party Links</h3>
                        <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party websites you visit.</p>

                        <h3 className="text-xl font-semibold text-white mb-2">11. Changes to This Privacy Policy</h3>
                        <p>We may update our Privacy Policy from time to time. We will notify you of any material changes by posting the updated Privacy Policy on this page and updating the "Last Updated" date at the top of the page. We encourage you to review this Privacy Policy periodically for any changes.</p>

                        <h3 className="text-xl font-semibold text-white mb-2">12. Contact Us</h3>
                        <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at: MarWiin.pro@gmail.com</p>
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-gray-700 text-sm text-gray-400">
                        Last Updated: 18th July, 2024
                    </div>
                </div>
            </div>
        </div>
    );
};
