import Footer from "../../components/Footer";
import Navbar from "../../components/Nav";
import Hero from "../blog/Hero";
import { useEffect } from 'react';

function Privacy() {
    useEffect(() => {
        // Smooth scrolling for table of contents links
        const tocLinks = document.querySelectorAll('.table-of-contents a[href^="#"]');
        
        tocLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 100; // Account for fixed header
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Highlight current section in table of contents
        const sections = document.querySelectorAll('.privacy-section');
        const options = {
            threshold: 0.3,
            rootMargin: '-100px 0px -50% 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Remove active class from all links
                    tocLinks.forEach(link => {
                        link.classList.remove('text-blue-600', 'font-semibold');
                        link.style.backgroundColor = '';
                        link.style.borderRadius = '';
                        link.style.padding = '';
                        link.style.margin = '';
                    });
                    
                    // Add active class to current section link
                    const activeLink = document.querySelector(`.table-of-contents a[href="#${entry.target.id}"]`);
                    if (activeLink) {
                        activeLink.classList.add('text-blue-600', 'font-semibold');
                        activeLink.style.backgroundColor = 'rgba(16, 130, 223, 0.1)';
                        activeLink.style.borderRadius = '4px';
                        activeLink.style.padding = '8px 12px';
                        activeLink.style.margin = '-4px -8px';
                    }
                }
            });
        }, options);
        
        sections.forEach(section => {
            observer.observe(section);
        });

        // Cleanup function
        return () => {
            tocLinks.forEach(link => {
                link.removeEventListener('click', function() {});
            });
            sections.forEach(section => {
                observer.unobserve(section);
            });
        };
    }, []);

    return (
        <>
            <Navbar />
            <Hero header="Privacy Policy" subHeader="Your privacy is important to us. This policy explains how we collect, use, and protect your information when you use our services." />
            
            <div className="container mx-auto px-4 py-16 max-w-7xl">
                <div className="grid lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-4">
                        {/* Table of Contents */}
                        <div className="table-of-contents sticky top-24">
                            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Table of Contents</h3>
                                <ul className="space-y-2">
                                    <li><a href="#introduction" className="block text-gray-600 hover:text-blue-600 transition-colors py-1">Introduction</a></li>
                                    <li><a href="#consent" className="block text-gray-600 hover:text-blue-600 transition-colors py-1">Consent</a></li>
                                    <li><a href="#data-collection" className="block text-gray-600 hover:text-blue-600 transition-colors py-1">Types of Personal Data We Collect</a></li>
                                    <li><a href="#subscriber-content" className="block text-gray-600 hover:text-blue-600 transition-colors py-1">Subscriber Content</a></li>
                                    <li><a href="#data-usage" className="block text-gray-600 hover:text-blue-600 transition-colors py-1">How we use your Information</a></li>
                                    <li><a href="#data-sharing" className="block text-gray-600 hover:text-blue-600 transition-colors py-1">How we might share your Information</a></li>
                                    <li><a href="#log-files" className="block text-gray-600 hover:text-blue-600 transition-colors py-1">Log Files</a></li>
                                    <li><a href="#cookies" className="block text-gray-600 hover:text-blue-600 transition-colors py-1">Cookies and Web Beacons</a></li>
                                    <li><a href="#third-party" className="block text-gray-600 hover:text-blue-600 transition-colors py-1">Third Party Privacy Policies</a></li>
                                    <li><a href="#data-rights" className="block text-gray-600 hover:text-blue-600 transition-colors py-1">Data Protection Rights</a></li>
                                    <li><a href="#data-security" className="block text-gray-600 hover:text-blue-600 transition-colors py-1">Data Security and Protection</a></li>
                                    <li><a href="#data-transfers" className="block text-gray-600 hover:text-blue-600 transition-colors py-1">Data Transfers</a></li>
                                    <li><a href="#data-retention" className="block text-gray-600 hover:text-blue-600 transition-colors py-1">Retention of your Personal Data</a></li>
                                    <li><a href="#age-consent" className="block text-gray-600 hover:text-blue-600 transition-colors py-1">Age of Consent</a></li>
                                    <li><a href="#children-info" className="block text-gray-600 hover:text-blue-600 transition-colors py-1">Children's Information</a></li>
                                    <li><a href="#withdrawing-consent" className="block text-gray-600 hover:text-blue-600 transition-colors py-1">Withdrawing Consent</a></li>
                                    <li><a href="#policy-changes" className="block text-gray-600 hover:text-blue-600 transition-colors py-1">Changes To This Privacy Policy</a></li>
                                    <li><a href="#contact" className="block text-gray-600 hover:text-blue-600 transition-colors py-1">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="lg:col-span-8">
                        <div className="prose prose-lg max-w-none">
                            {/* Introduction */}
                            <section id="introduction" className="privacy-section mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-gray-200 pb-2">Introduction</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    At TEPS, we value the privacy of our Subscribers and others (collectively or individually "Users") who visit and use our Platform and or visit our Portal at www.eventeps.com and we are committed to protecting your personal data (i.e. any information you provide to us from which you can be identified) in accordance with this Privacy Policy.
                                </p>
                                
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    This Privacy Policy applies only to your use of TEPS' website, Platform and or Services provided by TEPS. This Policy also governs the information you provide to us or that we may learn from your use of our Platform and informs how we may collect, use and in some instances, share this information. This policy is not applicable to any information collected offline or via channels other than this Platform.
                                </p>
                                
                                <p className="text-gray-700 leading-relaxed">
                                    If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
                                </p>
                            </section>

                            {/* Consent */}
                            <section id="consent" className="privacy-section mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-gray-200 pb-2">Consent</h2>
                                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                                    <p className="text-gray-700 leading-relaxed">
                                        By using our Platform, Portal and Services, you hereby consent to our Privacy Policy and agree to be bound to its terms. If you do not consent to our Privacy Policy, then you must not access or use our Services.
                                    </p>
                                </div>
                            </section>

                            {/* Types of Personal Data We Collect */}
                            <section id="data-collection" className="privacy-section mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-gray-200 pb-2">Types of Personal Data We Collect</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    As a Platform for the provision of event technology solutions, when you create an account on the TEPS Platform or via our Portal, you may provide us with personal information that includes your name, contact details, login name and a password, payment or banking information (including related payment verification information) and other background information from you when you create or update a User account on our Platform.
                                </p>
                                
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Even if you have not created or are not signed into a TEPS account, you might choose to provide us with information — like an email address to communicate with us or receive updates about our Services and/or your transactions.
                                </p>
                                
                                <p className="text-gray-700 leading-relaxed">
                                    When you provide us with personal information to complete a transaction, verify your payment details, or create an event, we infer that you consent to TEPS collecting and processing your personal information and using it for that specific reason only. If we ask for your personal information for a secondary reason, like marketing, we will either ask you directly for your expressed consent, or provide you with an opportunity to say no.
                                </p>
                            </section>

                            {/* Subscriber Content */}
                            <section id="subscriber-content" className="privacy-section mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-gray-200 pb-2">Subscriber Content</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    You are solely responsible for any Subscriber Content that you submit. You are legally liable for the Subscriber Content that you submit including, for example, material protected by copyright, trademark, patent or trade secret law or other proprietary rights laws without permission of the author or owner, or subject featured in such submission, or defamatory comments.
                                </p>
                            </section>

                            {/* How we use your information */}
                            <section id="data-usage" className="privacy-section mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-gray-200 pb-2">How we use your Information</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Per the terms of this Privacy Policy, we may process and use the information we collect from you for the following purposes:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                                    <li>To provide, operate, and maintain our Portal and Platform</li>
                                    <li>To enable our Services including but not limited to creating and updating accounts, processing payments, processing and delivering your service requests, tracking, and sharing the progress of deliverables.</li>
                                    <li>To improve, personalise, and expand our Portal and Platform.</li>
                                    <li>To understand and analyse how you use our Platform and Platform</li>
                                    <li>For research and development including testing, research, analysis, product development, and machine learning to improve the experience of our Subscribers. This helps us make our services more convenient and easier-to-use, enhance the safety and security of our Services, and develop new products, services, features and functionality.</li>
                                    <li>To communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the Platform.</li>
                                    <li>For marketing and non-marketing communications with our Subscribers including enabling communication amongst our Subscribers, generating receipts and marketing our services to our Subscribers.</li>
                                    <li>To send you emails for promotional purposes.</li>
                                    <li>For compliance with a legal obligation. This includes anti-fraud and anti-money laundering measures as well as tax and social security requirements.</li>
                                </ul>
                                
                                <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
                                    <p className="text-gray-700 leading-relaxed">
                                        As to personal data we collect, we do not use the information for any purposes other than the fulfilment of our obligations to Subscribers. We keep Subscriber information secure at all times and prevent the use and disclosure of it by our employees or any third parties.
                                    </p>
                                </div>
                            </section>

                            {/* How we might share your Information */}
                            <section id="data-sharing" className="privacy-section mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-gray-200 pb-2">How we might share your Information</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    We may share your personal data with others such as:
                                </p>
                                <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-4">
                                    <li><strong>Our Clients and Partner Companies:</strong> Information such as names, demographic data and information related to the event services rendered including statistics may be shared with these entities.</li>
                                    <li><strong>Third party service providers:</strong> Who process information on our behalf to help run some of our internal business operations including processing and fulfilment of your requests, email distribution, marketing service, payments, Cloud storage and IT services, so that they can provide services to TEPS;</li>
                                    <li><strong>Law enforcement authorities:</strong> Or other government bodies when we are required to do so in compliance with all applicable laws, regulations and rules, and requests of law enforcement, regulatory and other governmental agencies.</li>
                                    <li><strong>Business transfers:</strong> If, in future, we are acquired by or merged with another company, and all of or a substantial amount of our assets are transferred to another company, or as part of bankruptcy proceedings, we may disclose/transfer the information we have collected from you to the acquiring company.</li>
                                </ul>
                                
                                <p className="text-gray-700 leading-relaxed">
                                    In addition to the above, we may share personal data about you with others to the extent you consent to such sharing.
                                </p>
                            </section>

                            {/* Log Files */}
                            <section id="log-files" className="privacy-section mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-gray-200 pb-2">Log Files</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    TEPS follows a standard procedure of using log files. These files log visitors when they visit our Portal and Platform. All hosting companies do this and is a part of hosting services' analytics. The information collected by log files include browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.
                                </p>
                                
                                <p className="text-gray-700 leading-relaxed">
                                    These are not linked to any information that is personally identifiable. The purpose of the information is for analysing trends, administering the site, tracking users' movement on the Portal and Platform, and gathering demographic information.
                                </p>
                            </section>

                            {/* Cookies and Web Beacons */}
                            <section id="cookies" className="privacy-section mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-gray-200 pb-2">Cookies and Web Beacons</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Like any other website, TEPS uses "cookies". These cookies are used to store information including its Portal visitors' preferences as well as the pages on the Portal that the visitor accessed or visited. The information is used to optimise the Subscribers' experience by customising our web page content based on visitors' browser type and/or other information.
                                </p>
                                
                                <p className="text-gray-700 leading-relaxed mb-6">
                                    Once you have given your consent to use cookies, we shall store a cookie on your computer or device to remember this for next time. If you wish to withdraw consent at any time you can reset your browser to refuse all cookies or to indicate when a cookie is being sent. However, certain functionalities of our Portal might not work properly if you do so.
                                </p>
                                
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Types of Cookies We Use</h3>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                                    <li><strong>Advertising cookies:</strong> These cookies may be used to share data with advertisers so that the ads you see are more relevant to you or allow you to share certain pages with social networks or allow you to post comments on our Platform.</li>
                                    <li><strong>Secure Cookies:</strong> Secure cookies serve the purpose of preventing your browsing patterns from being observed by authorised persons. Browsers which support these cookies will only send cookies with the secure attribute when the request is going to a HTTPS page.</li>
                                    <li><strong>Third Party Cookies:</strong> These cookies collect user data on our behalf and is used to improve user experience (UX) by remembering user preferences and settings, as well as provide related services.</li>
                                    <li><strong>Required Cookies:</strong> These cookies are necessary to enable the basic features of our Site to function, such as allowing images to load or allowing you to select your cookie preferences.</li>
                                    <li><strong>Functional Cookies:</strong> These cookies allow us analyse your use of our Platform to evaluate and improve our performance. They may also be used to provide a better customer experience on our Platform.</li>
                                    <li><strong>Persistent Cookies:</strong> The persistent cookies provide convenient and rapid access to familiar objects, which enhances the user experience (UX).</li>
                                    <li><strong>Session Cookies:</strong> A session starts when you launch the Portal or Platform and ends when you exit the Platform/Portal or close the browser window. Our session cookies store information in a temporary location. This information is deleted after the session ends.</li>
                                </ul>
                                
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Control of Cookies</h3>
                                <p className="text-gray-700 leading-relaxed mb-6">
                                    Most browsers are set to accept cookies by default. However, you can remove or reject cookies in your browser's settings. Please be aware that such action could affect the availability and functionality of the Portal/Platform.
                                </p>
                                
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Other Tracking Technologies</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    In addition to cookies, we may use web beacons, pixel tags, and other tracking technologies on the Platform to help customise the Portal and improve your experience. A "web beacon" or "pixel tag" is tiny object or image embedded in a web page or email. They are used to track the number of users who have visited particular pages and viewed emails and acquire other statistical data.
                                </p>
                            </section>

                            {/* Third Party Privacy Policies */}
                            <section id="third-party" className="privacy-section mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-gray-200 pb-2">Third Party Privacy Policies</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    TEPS' Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party and servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
                                </p>
                                
                                <p className="text-gray-700 leading-relaxed">
                                    You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.
                                </p>
                            </section>

                            {/* Data Protection Rights */}
                            <section id="data-rights" className="privacy-section mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-gray-200 pb-2">Data Protection Rights</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    We would like to make sure you are fully aware of all of your data protection rights. Every Subscriber is entitled to the following:
                                </p>
                                <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
                                    <li><strong>The right to access:</strong> You have the right to request copies of your personal data. We may charge you a small fee for this service.</li>
                                    <li><strong>The right to rectification:</strong> You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</li>
                                    <li><strong>The right to erasure:</strong> You have the right to request that we erase your personal data, under certain conditions.</li>
                                    <li><strong>The right to restrict processing:</strong> You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
                                    <li><strong>The right to object to processing:</strong> You have the right to object to our processing of your personal data, under certain conditions.</li>
                                    <li><strong>The right to data portability:</strong> You have the right to request that we transfer the data that we have collected to another organisation, or directly to you, under certain conditions.</li>
                                </ul>
                                
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    We may not always be able to fully address your request, for example if it would impact the duty of confidentiality we owe to others, or if we are legally obliged to deal with the request in a different way.
                                </p>
                                
                                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                                    <p className="text-gray-700 leading-relaxed">
                                        If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us at <a href="mailto:power@eventeps.com" className="text-blue-600 hover:text-blue-800 underline">power@eventeps.com</a>.
                                    </p>
                                </div>
                            </section>

                            {/* Data Security and Protection */}
                            <section id="data-security" className="privacy-section mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-gray-200 pb-2">Data Security and Protection</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    We understand the need for your personal data to remain secure and private and we have implemented appropriate technical and organisational security measures to protect your personal data from loss, misuse, data breaches, modification or destruction. Only authorised personnel and third parties will have access to any personal data provided by you, which is limited to the extent they need to do their job or provide their services.
                                </p>
                                
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    While we are committed to earning and keeping your trust with these precautions, provided information is exposed to inherent risks associated with Internet usage.
                                </p>
                                
                                <p className="text-gray-700 leading-relaxed mb-6">
                                    If we learn of a security systems breach, then we will attempt to notify you electronically so that you can take appropriate protective steps. By using our Platform/Portal or providing personal data to us, you agree that we can communicate with you electronically regarding security, privacy, and administrative issues relating to your use of our Platform.
                                </p>
                                
                                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                                    <p className="text-gray-700 leading-relaxed">
                                        Please note that while we take reasonable steps to verify your identity before granting Subscribers profile access, you also play an important part in securing your own data. To protect your privacy and security, you should never share your user account's password with anyone. The responsibility for maintaining the secrecy of your unique password and account information is yours at all times.
                                    </p>
                                </div>
                            </section>

                            {/* Data Transfers */}
                            <section id="data-transfers" className="privacy-section mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-gray-200 pb-2">Data Transfers</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    We may transfer to and store the data we collect about you in countries other than the country in which the data was originally collected, including the United States of America, Canada, North America, the European Economic Area ("EEA"), the United Kingdom, or other destinations outside Nigeria.
                                </p>
                                
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Those countries may not have the same data protection laws as the country in which you provided the data. When we transfer your data to other countries, we will protect the data as described in this Privacy Policy and comply with applicable legal requirements providing adequate protection for the transfer of data to countries outside Nigeria.
                                </p>
                                
                                <p className="text-gray-700 leading-relaxed">
                                    You may request more information about the safeguards that we have put in place in respect of transfers of personal data by contacting us at <a href="mailto:power@eventeps.com" className="text-blue-600 hover:text-blue-800 underline">power@eventeps.com</a>.
                                </p>
                            </section>

                            {/* Retention of Personal Data */}
                            <section id="data-retention" className="privacy-section mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-gray-200 pb-2">Retention of your Personal Data</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    We will retain your personal information for as long as your account is active or as needed to provide you services and to fulfil the purposes for which the data was collected. We may keep data longer if we have a legal obligation to keep it or to maintain necessary records for legal, financial, compliance, or other reporting obligations, and to enforce our rights and agreements.
                                </p>
                            </section>

                            {/* Age of Consent */}
                            <section id="age-consent" className="privacy-section mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-gray-200 pb-2">Age of Consent</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    By using this Platform, you represent that you are an adult by the laws of your country and are legally able to give us your consent.
                                </p>
                            </section>

                            {/* Children's Information */}
                            <section id="children-info" className="privacy-section mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-gray-200 pb-2">Children's Information</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    TEPS understands the importance of protecting children's privacy, particularly in their online interactions and as such, our Platform and/or Portal is not directed at persons younger than 18 years of age. TEPS therefore will not intentionally collect any personal identifiable information about anyone under the age of 18, and requests that no such information be submitted to us.
                                </p>
                                
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    We do not anticipate children utilising our Platform or visiting our Portal. However, as a parent or guardian, if you think that your child provided information to us via our Platform or Platform, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
                                </p>
                                
                                <p className="text-gray-700 leading-relaxed">
                                    If we also become aware that we have collected personal data from children without due verification of parental consent, we shall take steps to remove that information from our servers.
                                </p>
                            </section>

                            {/* Withdrawing Consent */}
                            <section id="withdrawing-consent" className="privacy-section mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-gray-200 pb-2">Withdrawing Consent</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    You have the option of withdrawing your consent. Should you change your mind after initially providing consent, you may withdraw your consent for us to contact you, for the continued collection, use or disclosure of your information at any time by contacting us at <a href="mailto:power@eventeps.com" className="text-blue-600 hover:text-blue-800 underline">power@eventeps.com</a>.
                                </p>
                            </section>

                            {/* Changes to Privacy Policy */}
                            <section id="policy-changes" className="privacy-section mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-gray-200 pb-2">Changes To This Privacy Policy</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Based on the evolving nature of privacy laws, and the needs of our users and business, TEPS reserves the right to amend this Policy at any time. We will notify you if material changes have been made to this policy to ensure that you are aware of any changes to the information we collect, how we use it, and the circumstances under which, if any, we use and/or disclose it.
                                </p>
                                
                                <p className="text-gray-700 leading-relaxed">
                                    Changes and clarifications will take effect immediately upon their posting on the Platform and/or Portal.
                                </p>
                            </section>

                            {/* Contact Section */}
                            <section id="contact" className="privacy-section mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-gray-200 pb-2">Contact Us</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Where you are of the opinion that you have suffered a breach, we advise that you inform us immediately to enable us take appropriate action within 72 hours of our receipt of your complaint.
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    If you want to make a complaint about how we have handled your personal information or would like to know more about your rights and how to exercise them, you may contact us by sending an email to:
                                </p>
                                <div className="bg-gray-100 p-6 rounded-lg text-center">
                                    <a href="mailto:power@eventeps.com" className="text-blue-600 hover:text-blue-800 underline text-lg font-medium">power@eventeps.com</a>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}


export default Privacy;